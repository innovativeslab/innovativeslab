"use server";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { createSession, destroySession, requireAdmin } from "@/lib/auth";
import { allow } from "@/lib/rate-limit";
import { getClientIp, hashIp } from "@/lib/request";

const STATUSES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "WON", "LOST"] as const;
// Placeholder bcrypt hash compared when the email is unknown, so response time does not reveal valid accounts.
const DUMMY_HASH = bcrypt.hashSync("placeholder-not-a-real-password", 12);

export async function loginAction(formData: FormData) {
  const ipHash = hashIp(getClientIp(headers()));
  if (!(await allow(`login:${ipHash}`, 8, 15 * 60))) redirect("/admin/login?error=rate");

  const email = String(formData.get("email") ?? "").trim().toLowerCase().slice(0, 200);
  const password = String(formData.get("password") ?? "").slice(0, 200);
  const user = email ? await prisma.adminUser.findUnique({ where: { email } }) : null;
  const valid = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);
  if (!user || !valid) redirect("/admin/login?error=invalid");

  await createSession(user.email);
  redirect("/admin");
}

export async function logoutAction() {
  destroySession();
  redirect("/admin/login");
}

export async function updateStatusAction(formData: FormData) {
  await requireAdmin();
  const id = z.string().min(1).parse(formData.get("id"));
  const status = z.enum(STATUSES).parse(formData.get("status"));
  await prisma.lead.update({ where: { id }, data: { status } });
  revalidatePath(`/admin/leads/${id}`);
  revalidatePath("/admin");
}

export async function addNoteAction(formData: FormData) {
  const session = await requireAdmin();
  const id = z.string().min(1).parse(formData.get("id"));
  const body = z.string().trim().min(1).max(3000).parse(formData.get("body"));
  await prisma.leadNote.create({ data: { leadId: id, author: session.email, body } });
  revalidatePath(`/admin/leads/${id}`);
}

export async function deleteLeadAction(formData: FormData) {
  await requireAdmin();
  const id = z.string().min(1).parse(formData.get("id"));
  await prisma.lead.delete({ where: { id } });
  revalidatePath("/admin");
  redirect("/admin");
}
