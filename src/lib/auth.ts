import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, SESSION_SECONDS, signToken, verifyToken } from "./jwt";

export async function createSession(email: string) {
  const token = await signToken(email);
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function getSession() {
  return verifyToken(cookies().get(SESSION_COOKIE)?.value);
}

/** Call at the top of every admin page and server action (defence in depth beyond middleware). */
export async function requireAdmin() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}

export function destroySession() {
  cookies().delete(SESSION_COOKIE);
}
