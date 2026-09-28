interface PageHeaderProps {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  description?: string;
}

export function PageHeader({
  eyebrow,
  title,
  italicTitle,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#fbf9f5] pt-16 pb-20 lg:pt-24 lg:pb-24 border-b border-slate-200">
      {/* Luxury ambient gold glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-30%] h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-[#9a7629]/[0.05] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="gold-badge-light mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9a7629]" />
          <span>{eyebrow}</span>
        </div>

        <h1 className="font-display max-w-4xl text-4xl leading-[1.06] text-[#111318] sm:text-6xl lg:text-7xl font-light">
          {title}{" "}
          {italicTitle && (
            <span className="block sm:inline italic text-[#9a7629]">{italicTitle}</span>
          )}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-[15px] sm:text-[17px] leading-relaxed text-[#5e6370]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
