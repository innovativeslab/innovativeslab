import { z } from "zod";
import { BUDGETS, SERVICE_OPTIONS, TIMELINES } from "./options";

export const LEAD_TYPES = ["QUOTE", "CONSULTATION", "CONTACT"] as const;


const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined));

const optionalUrl = z
  .string()
  .trim()
  .max(300)
  .optional()
  .transform((v) => (v ? v : undefined))
  .refine((v) => {
    if (!v) return true;
    try {
      const u = new URL(v.match(/^https?:\/\//i) ? v : `https://${v}`);
      return u.hostname.includes(".");
    } catch {
      return false;
    }
  }, "Enter a valid URL, for example https://example.com");

export const leadSchema = z.object({
  type: z.enum(LEAD_TYPES),
  fullName: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().toLowerCase().email("Enter a valid email address").max(200),
  company: optionalText(150),
  country: z.string().trim().min(2, "Enter your country or region").max(80),
  service: z.enum(SERVICE_OPTIONS, { errorMap: () => ({ message: "Choose a service" }) }),
  description: z.string().trim().min(20, "Describe your project in at least 20 characters").max(5000),
  siteUrl: optionalUrl,
  techStack: optionalText(300),
  budget: z.enum(BUDGETS).optional(),
  timeline: z.enum(TIMELINES).optional(),
  preferredTime: optionalText(200),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy terms to continue" }) }),
  // Anti-spam: honeypot (must stay empty) and form-render timestamp (ms).
  website_hp: z.string().max(200).optional(),
  startedAt: z.number().int(),
});

export type LeadInput = z.infer<typeof leadSchema>;
