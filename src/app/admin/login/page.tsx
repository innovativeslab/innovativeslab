import { loginAction } from "../actions";

export const metadata = { title: "Staff sign in", robots: { index: false, follow: false } };

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const msg = searchParams.error === "rate" ? "Too many attempts. Try again in 15 minutes." : searchParams.error ? "Email or password is incorrect." : "";
  return (
    <div className="wrap section max-w-md">
      <h1 className="text-3xl font-bold">Staff sign in</h1>
      {msg && <p role="alert" className="mt-4 rounded-md border border-bad/60 bg-bad/10 p-3 text-sm text-bad">{msg}</p>}
      <form action={loginAction} className="mt-8 space-y-5">
        <div><label className="label" htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="username" required className="field" /></div>
        <div><label className="label" htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required className="field" /></div>
        <button type="submit" className="w-full rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover">Sign in</button>
      </form>
    </div>
  );
}
