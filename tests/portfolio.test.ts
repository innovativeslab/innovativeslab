import { describe, expect, it } from "vitest";
import { projectGroups, projects } from "../src/content/en/portfolio";

describe("portfolio data", () => {
  it("has unique slugs and valid groups", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    for (const p of projects) expect(projectGroups.includes(p.group)).toBe(true);
  });
  it("has exactly one featured project", () => {
    expect(projects.filter((p) => p.featured).length).toBe(1);
  });
  it("only uses https links, and external links never point at localhost", () => {
    for (const p of projects) for (const link of [p.url, p.github]) if (link) expect(/^https:\/\/(?!localhost)/.test(link)).toBe(true);
  });
  it("makes no numeric performance claims", () => {
    for (const p of projects) expect(/\d+\s?(%|x\b|\+)/i.test(`${p.summary} ${p.description} ${p.capabilities.join(" ")}`)).toBe(false);
  });
  it("lists every project's capabilities and a role statement", () => {
    for (const p of projects) { expect(p.capabilities.length >= 3).toBe(true); expect(Boolean(p.role)).toBe(true); }
  });
});
