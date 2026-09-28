interface SectionLabelProps {
  index: string; // e.g. "01"
  label: string;
  align?: "left" | "center";
  theme?: "dark" | "light"; // which section background this label sits on
}

export function SectionLabel({
  index,
  label,
  align = "left",
  theme = "dark",
}: SectionLabelProps) {
  const isLight = theme === "light";
  return (
    <div
      className={`flex items-center gap-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className={`font-display italic text-2xl ${isLight ? "text-[#9a7629]" : "text-gold-light/90"}`}>
        {index}
      </span>
      <span className={`h-px flex-1 max-w-16 ${isLight ? "bg-gray-200" : "bg-line"}`} />
      <span
        className={`tracked-label text-xs font-semibold ${
          isLight ? "text-gray-500" : "text-bronze"
        }`}
      >
        {label}
      </span>
      {align === "center" && (
        <span className={`h-px flex-1 max-w-16 ${isLight ? "bg-gray-200" : "bg-line"}`} />
      )}
    </div>
  );
}
