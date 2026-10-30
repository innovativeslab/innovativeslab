import { describe, expect, it } from "vitest";
import { leadSchema } from "../src/lib/validation";

const valid = {
  type: "QUOTE", fullName: "Ada Lovelace", email: "Ada@Example.com", country: "United Kingdom",
  service: "Bug Fixing & Debugging", description: "Login fails after deploying to production hosting.",
  consent: true, startedAt: Date.now() - 10_000,
};

describe("leadSchema", () => {
  it("accepts a valid request and normalises email", () => {
    const r = leadSchema.safeParse(valid);
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.email).toBe("ada@example.com");
  });
  it("rejects missing consent", () => {
    expect(leadSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });
  it("rejects short descriptions", () => {
    expect(leadSchema.safeParse({ ...valid, description: "too short" }).success).toBe(false);
  });
  it("rejects unknown services and bad URLs", () => {
    expect(leadSchema.safeParse({ ...valid, service: "Hacking" }).success).toBe(false);
    expect(leadSchema.safeParse({ ...valid, siteUrl: "not a url" }).success).toBe(false);
  });
  it("accepts a bare domain as a URL", () => {
    expect(leadSchema.safeParse({ ...valid, siteUrl: "example.com" }).success).toBe(true);
  });
});
