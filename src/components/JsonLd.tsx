export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Content is built server-side from static data; "<" is escaped to prevent script-tag breakout.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
