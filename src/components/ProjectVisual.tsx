import Image from "next/image";
import type { Project } from "@/content/en/portfolio";

const B = "#2563EB", C = "#38BDF8", L = "#E2E8F0", M = "#CBD5E1", D = "#94A3B8";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect width="480" height="300" fill="#F1F5F9" />
      <rect x="16" y="14" width="448" height="272" rx="12" fill="#fff" stroke={L} />
      <circle cx="34" cy="31" r="4" fill={M} /><circle cx="48" cy="31" r="4" fill={M} /><circle cx="62" cy="31" r="4" fill={M} />
      <line x1="16" y1="46" x2="464" y2="46" stroke={L} />
      {children}
    </>
  );
}

function Art({ kind }: { kind: Project["visual"] }) {
  switch (kind) {
    case "funnel":
      return (
        <Frame>
          {[[40, 196, 0.9], [62, 150, 0.65], [84, 104, 0.45], [106, 60, 0.3]].map(([y, w, o]) => (
            <rect key={y} x={40 + (196 - w) / 2} y={y + 20} width={w} height="16" rx="8" fill={B} opacity={o} />
          ))}
          <path d="M60 188h156" stroke={L} strokeWidth="2" /><rect x="40" y="204" width="196" height="64" rx="8" fill="#F8FAFC" stroke={L} />
          <rect x="52" y="218" width="90" height="8" rx="4" fill={M} /><rect x="52" y="236" width="140" height="8" rx="4" fill={L} /><rect x="52" y="250" width="70" height="8" rx="4" fill={L} />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(262 ${64 + i * 40})`}>
              <circle cx="12" cy="12" r="12" fill={i % 2 ? C : B} opacity="0.2" />
              <rect x="34" y="4" width="96" height="8" rx="4" fill={M} /><rect x="34" y="18" width="64" height="6" rx="3" fill={L} />
              <rect x="146" y="4" width="40" height="18" rx="9" fill={i % 2 ? C : B} opacity="0.18" />
            </g>
          ))}
        </Frame>
      );
    case "registry":
      return (
        <Frame>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(36 ${62 + i * 52})`}>
              <rect width="200" height="42" rx="8" fill={i === 1 ? "#EFF6FF" : "#F8FAFC"} stroke={i === 1 ? B : L} />
              {[0, 1, 2, 3, 4, 5, 6].map((j) => <rect key={j} x={14 + j * 8} y={21 - ((j * 7 + i * 5) % 12) / 2 - 3} width="4" height={6 + ((j * 7 + i * 5) % 12)} rx="2" fill={B} opacity="0.7" />)}
              <rect x="82" y="12" width="90" height="8" rx="4" fill={M} /><rect x="82" y="26" width="56" height="6" rx="3" fill={L} />
            </g>
          ))}
          <rect x="260" y="62" width="184" height="206" rx="10" fill="#F8FAFC" stroke={L} />
          {[0, 1, 2, 3].map((i) => <g key={i}><rect x="276" y={80 + i * 32} width="56" height="7" rx="3.5" fill={D} /><rect x="276" y={92 + i * 32} width="120" height="9" rx="4.5" fill={M} /></g>)}
          {[0, 1, 2].map((i) => <g key={i} transform={`translate(${276 + i * 54} 218)`}><rect width="46" height="26" rx="13" fill={C} opacity="0.2" /><path d="M16 13l5 5 9-10" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></g>)}
        </Frame>
      );
    case "relationship":
      return (
        <Frame>
          {[[130, 110], [130, 220], [250, 80], [250, 250], [60, 165]].map(([x, y], i) => <line key={i} x1="170" y1="165" x2={x + 40} y2={y} stroke={M} strokeWidth="2" />)}
          {[[130, 110], [130, 220], [250, 80], [250, 250], [60, 165]].map(([x, y], i) => <circle key={i} cx={x + 40} cy={y} r="18" fill="#fff" stroke={i % 2 ? C : B} strokeWidth="2.5" />)}
          <circle cx="170" cy="165" r="30" fill={B} /><circle cx="170" cy="157" r="9" fill="#fff" opacity="0.9" /><path d="M153 182a17 13 0 0134 0z" fill="#fff" opacity="0.9" />
          <rect x="296" y="82" width="152" height="184" rx="10" fill="#F8FAFC" stroke={L} />
          <rect x="310" y="98" width="96" height="9" rx="4.5" fill={M} /><rect x="310" y="116" width="120" height="7" rx="3.5" fill={L} /><rect x="310" y="130" width="100" height="7" rx="3.5" fill={L} />
          <rect x="310" y="156" width="124" height="38" rx="8" fill="#EFF6FF" stroke={B} opacity="0.9" /><rect x="320" y="168" width="70" height="7" rx="3.5" fill={B} opacity="0.6" /><rect x="320" y="180" width="48" height="6" rx="3" fill={C} opacity="0.7" />
          <rect x="310" y="210" width="124" height="38" rx="8" fill="#fff" stroke={L} /><rect x="320" y="222" width="80" height="7" rx="3.5" fill={M} /><rect x="320" y="234" width="52" height="6" rx="3" fill={L} />
        </Frame>
      );
    case "delivery":
      return (
        <Frame>
          <rect x="36" y="62" width="150" height="206" rx="16" fill="#F8FAFC" stroke={M} strokeWidth="2" />
          {[0, 1, 2].map((i) => <g key={i} transform={`translate(48 ${78 + i * 54})`}><rect width="126" height="44" rx="8" fill="#fff" stroke={L} /><rect x="8" y="8" width="28" height="28" rx="6" fill={i === 1 ? C : B} opacity="0.25" /><rect x="46" y="12" width="60" height="7" rx="3.5" fill={M} /><rect x="46" y="26" width="34" height="6" rx="3" fill={L} /></g>)}
          <rect x="48" y="240" width="126" height="20" rx="10" fill={B} />
          <rect x="214" y="62" width="234" height="206" rx="10" fill="#F8FAFC" stroke={L} />
          <path d="M240 230C270 190 290 230 320 180S380 150 420 96" fill="none" stroke={B} strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
          <circle cx="240" cy="230" r="9" fill="#fff" stroke={C} strokeWidth="3" /><circle cx="420" cy="96" r="11" fill={B} /><circle cx="420" cy="96" r="4" fill="#fff" />
          {[0, 1, 2].map((i) => <g key={i} transform={`translate(${232 + i * 72} 244)`}><circle cx="6" cy="6" r="6" fill={i < 2 ? B : M} /><rect x="16" y="2" width="44" height="7" rx="3.5" fill={i < 2 ? M : L} /></g>)}
        </Frame>
      );
  }
}

/** Fixed aspect ratio box: no layout shift. Uses a real screenshot when `image` is provided, otherwise an original illustration. */
export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="relative aspect-[8/5] w-full overflow-hidden border-b border-line bg-soft">
      {project.image ? (
        <Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} priority={priority} sizes="(min-width: 1024px) 560px, 100vw" className="h-full w-full object-cover object-top" />
      ) : (
        <>
          <svg viewBox="0 0 480 300" role="img" aria-label={`Illustration representing ${project.category.toLowerCase()}`} className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <Art kind={project.visual} />
          </svg>
          <span className="absolute bottom-2 right-3 rounded bg-white/90 px-1.5 py-0.5 text-[11px] text-muted">Illustration</span>
        </>
      )}
    </div>
  );
}
