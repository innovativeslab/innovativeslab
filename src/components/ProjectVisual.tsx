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
    case "social":
      return (
        <Frame>
          <rect x="36" y="62" width="196" height="206" rx="12" fill="#F8FAFC" stroke={L} />
          <rect x="48" y="74" width="172" height="104" rx="8" fill={B} opacity="0.14" /><circle cx="134" cy="126" r="26" fill={C} opacity="0.35" /><path d="M96 168l30-34 24 24 16-14 28 24z" fill={B} opacity="0.4" />
          <rect x="48" y="192" width="150" height="8" rx="4" fill={M} /><rect x="48" y="208" width="110" height="7" rx="3.5" fill={L} />
          <rect x="48" y="230" width="52" height="24" rx="12" fill="#fff" stroke={M} /><rect x="108" y="230" width="68" height="24" rx="12" fill={B} />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(256 ${64 + i * 40})`}>
              <rect width="192" height="32" rx="8" fill="#fff" stroke={L} /><rect x="10" y="10" width="26" height="12" rx="6" fill={D} opacity="0.35" />
              <rect x="48" y="12" width="70" height="8" rx="4" fill={M} />
              <rect x="132" y="7" width="50" height="18" rx="9" fill={i < 2 ? B : C} opacity="0.2" />
            </g>
          ))}
        </Frame>
      );
    case "marketplace":
      return (
        <Frame>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${36 + (i % 3) * 78} ${62 + Math.floor(i / 3) * 104})`}>
              <rect width="68" height="94" rx="8" fill="#F8FAFC" stroke={L} />
              <rect x="6" y="6" width="56" height="44" rx="6" fill={i % 2 ? C : B} opacity="0.2" />
              <rect x="6" y="58" width="44" height="7" rx="3.5" fill={M} /><rect x="6" y="72" width="26" height="12" rx="6" fill={B} opacity="0.85" />
            </g>
          ))}
          <rect x="278" y="62" width="170" height="124" rx="10" fill="#F8FAFC" stroke={L} />
          <rect x="290" y="76" width="96" height="22" rx="11" fill="#fff" stroke={L} /><rect x="340" y="108" width="96" height="22" rx="11" fill={B} opacity="0.85" /><rect x="290" y="140" width="72" height="22" rx="11" fill="#fff" stroke={L} />
          <rect x="278" y="200" width="170" height="68" rx="10" fill={B} /><rect x="292" y="214" width="60" height="8" rx="4" fill="#fff" opacity="0.6" /><rect x="292" y="232" width="100" height="14" rx="7" fill="#fff" />
        </Frame>
      );
    case "identity":
      return (
        <Frame>
          <rect x="36" y="78" width="204" height="130" rx="12" fill="#F8FAFC" stroke={M} strokeWidth="2" />
          <circle cx="86" cy="130" r="26" fill={B} opacity="0.2" /><circle cx="86" cy="122" r="9" fill={B} opacity="0.55" /><path d="M68 150a18 13 0 0136 0z" fill={B} opacity="0.55" />
          <rect x="128" y="104" width="90" height="9" rx="4.5" fill={M} /><rect x="128" y="124" width="70" height="7" rx="3.5" fill={L} /><rect x="128" y="140" width="80" height="7" rx="3.5" fill={L} /><rect x="128" y="172" width="60" height="7" rx="3.5" fill={L} />
          {[[30, 72], [242, 72], [30, 214], [242, 214]].map(([x, y], i) => <path key={i} d={`M${x + (i % 2 ? -14 : 14)} ${y}h${i % 2 ? 14 : -14}v${i < 2 ? 14 : -14}`} fill="none" stroke={C} strokeWidth="3" strokeLinecap="round" />)}
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(278 ${76 + i * 58})`}>
              <rect width="170" height="46" rx="10" fill="#fff" stroke={L} /><circle cx="24" cy="23" r="12" fill={B} opacity="0.18" /><path d="M18 23l4 4 8-9" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="46" y="14" width="80" height="8" rx="4" fill={M} /><rect x="46" y="28" width="52" height="6" rx="3" fill={L} />
            </g>
          ))}
          <rect x="36" y="228" width="204" height="40" rx="10" fill={B} opacity="0.12" /><rect x="52" y="244" width="120" height="8" rx="4" fill={B} opacity="0.5" />
        </Frame>
      );
    case "analytics":
      return (
        <Frame>
          {[44, 78, 62, 104, 88, 126].map((h, i) => <rect key={i} x={40 + i * 34} y={190 - h} width="22" height={h} rx="4" fill={i % 2 ? C : B} opacity="0.75" />)}
          <line x1="36" y1="190" x2="248" y2="190" stroke={M} /><path d="M50 150l34-30 34 14 34-44 34 22 34-34" fill="none" stroke={B} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="36" y="206" width="90" height="8" rx="4" fill={M} /><rect x="36" y="224" width="140" height="7" rx="3.5" fill={L} /><rect x="36" y="240" width="110" height="7" rx="3.5" fill={L} />
          {Array.from({ length: 20 }).map((_, i) => <rect key={i} x={282 + (i % 5) * 33} y={64 + Math.floor(i / 5) * 33} width="28" height="28" rx="6" fill={B} opacity={0.08 + ((i * 7) % 10) * 0.08} />)}
          <rect x="282" y="206" width="160" height="62" rx="10" fill="#F8FAFC" stroke={L} /><rect x="296" y="220" width="70" height="8" rx="4" fill={M} /><rect x="296" y="238" width="120" height="12" rx="6" fill={B} opacity="0.75" />
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
export function ProjectVisual({ project, priority = false, className = "" }: { project: Project; priority?: boolean; className?: string }) {
  return (
    <div className={`relative aspect-[8/5] w-full overflow-hidden border-b border-line bg-soft ${className}`}>
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
