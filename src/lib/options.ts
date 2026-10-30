import { services } from "@/content/en/services";

// Shared by the client form and server validation. Kept free of zod so the client bundle stays small.
export const BUDGETS = ["Not sure yet", "Under $1,000", "$1,000 - $3,000", "$3,000 - $10,000", "$10,000 - $25,000", "$25,000+"] as const;
export const TIMELINES = ["Urgent (within 1 week)", "1 - 4 weeks", "1 - 3 months", "Flexible"] as const;
export const SERVICE_OPTIONS = [...services.map((s) => s.title), "Not sure / other"] as [string, ...string[]];
