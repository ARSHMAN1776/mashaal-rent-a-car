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
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[110px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="tracked-label text-xs text-gold-light/80">{eyebrow}</p>
        <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          {title}
          {italicTitle && (
            <span className="block italic text-gold-light">{italicTitle}</span>
          )}
        </h1>
        {description && (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
