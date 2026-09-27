import type { SilhouetteVariant } from "@/data/cars";

interface CarSilhouetteProps {
  variant: SilhouetteVariant;
  scale?: number;
  roofRails?: boolean;
  className?: string;
}

/**
 * Hand-drawn gold line-art side-profile silhouette, in the style of an
 * automotive schematic / dealership catalogue plate. Four body-type
 * families (suv, sedan, pickup, hatchback) cover all seven fleet models;
 * scale/roofRails vary the read between models sharing a family
 * (e.g. Fortuner vs Prado vs V8).
 */
export function CarSilhouette({
  variant,
  scale = 1,
  roofRails = false,
  className,
}: CarSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 480 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "240px 130px",
          transform: `scale(${scale})`,
        }}
      >
        <ellipse cx="240" cy="177" rx="200" ry="6" fill="currentColor" stroke="none" opacity="0.12" />

        {variant === "hatchback" && (
          <>
            <rect x="78" y="118" width="306" height="52" rx="16" strokeWidth="2.5" />
            <polygon points="150,118 176,64 268,64 298,118" strokeWidth="2.5" />
            <line x1="222" y1="64" x2="222" y2="118" strokeWidth="1.25" opacity="0.6" />
          </>
        )}

        {variant === "sedan" && (
          <>
            <rect x="64" y="120" width="352" height="50" rx="14" strokeWidth="2.5" />
            <polygon
              points="140,120 164,66 246,66 268,102 300,102 326,120"
              strokeWidth="2.5"
            />
            <line x1="205" y1="66" x2="205" y2="120" strokeWidth="1.25" opacity="0.6" />
          </>
        )}

        {variant === "suv" && (
          <>
            <rect x="56" y="96" width="368" height="76" rx="14" strokeWidth="2.5" />
            <polygon
              points="118,96 142,44 178,40 296,40 330,44 356,96"
              strokeWidth="2.5"
            />
            <line x1="237" y1="40" x2="237" y2="96" strokeWidth="1.25" opacity="0.6" />
            {roofRails && (
              <>
                <line x1="160" y1="34" x2="290" y2="34" strokeWidth="1.5" opacity="0.75" />
                <line x1="160" y1="34" x2="160" y2="40" strokeWidth="1.5" opacity="0.75" />
                <line x1="290" y1="34" x2="290" y2="40" strokeWidth="1.5" opacity="0.75" />
              </>
            )}
          </>
        )}

        {variant === "pickup" && (
          <>
            <rect x="60" y="112" width="352" height="58" rx="14" strokeWidth="2.5" />
            <polygon points="96,112 120,58 196,58 214,90 214,112" strokeWidth="2.5" />
            <rect x="214" y="96" width="178" height="8" rx="2" strokeWidth="2" />
            <line x1="402" y1="98" x2="402" y2="112" strokeWidth="2" />
            <line x1="260" y1="104" x2="260" y2="112" strokeWidth="1.25" opacity="0.5" />
            <line x1="330" y1="104" x2="330" y2="112" strokeWidth="1.25" opacity="0.5" />
          </>
        )}

        {/* wheels */}
        <circle cx="148" cy="172" r="30" strokeWidth="2.5" />
        <circle cx="148" cy="172" r="11" strokeWidth="1.5" />
        <circle cx={variant === "sedan" ? "332" : variant === "pickup" ? "340" : "332"} cy="172" r="30" strokeWidth="2.5" />
        <circle cx={variant === "sedan" ? "332" : variant === "pickup" ? "340" : "332"} cy="172" r="11" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
