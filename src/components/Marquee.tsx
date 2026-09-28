const items = [
  "TOYOTA PRADO TX",
  "LAND CRUISER V8",
  "FORTUNER LEGENDER",
  "HILUX REVO ROCCO",
  "HONDA CIVIC RS",
  "COROLLA ALTIS GRANDE",
  "SUZUKI CULTUS",
  "50+ EXECUTIVE FLEET",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[#121316]/[0.08] bg-[#fbf9f5] py-4 my-8 lg:my-10 relative z-20">
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#333742]"
          >
            <span>{item}</span>
            <span className="text-[#9a7629] font-normal text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
