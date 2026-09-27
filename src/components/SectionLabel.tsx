interface SectionLabelProps {
  index: string; // e.g. "01"
  label: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionLabel({
  index,
  label,
  align = "left",
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="font-display italic text-2xl text-gold-light/90">
        {index}
      </span>
      <span className="hairline-solid flex-1 max-w-16" />
      <span
        className={`tracked-label text-xs font-semibold ${
          light ? "text-cream/70" : "text-bronze"
        }`}
      >
        {label}
      </span>
      {align === "center" && <span className="hairline-solid flex-1 max-w-16" />}
    </div>
  );
}
