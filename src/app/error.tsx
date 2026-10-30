"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="wrap section">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="lede mt-4">An unexpected error occurred. You can try again, or return to the homepage.</p>
      <button type="button" onClick={reset} className="mt-8 rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-hover">Try again</button>
    </div>
  );
}
