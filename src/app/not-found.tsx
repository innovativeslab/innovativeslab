import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="wrap section">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="lede mt-4">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8 flex gap-3"><ButtonLink href="/">Go to the homepage</ButtonLink><ButtonLink href="/services" variant="secondary">Browse services</ButtonLink></div>
    </div>
  );
}
