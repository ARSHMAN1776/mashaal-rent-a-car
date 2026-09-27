const items = [
  "TOYOTA FORTUNER",
  "TOYOTA PRADO",
  "TOYOTA REVO",
  "HONDA CIVIC",
  "TOYOTA LAND CRUISER V8",
  "SUZUKI ALTO",
  "SUZUKI CULTUS",
  "+ 50 VEHICLES",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-surface py-5">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="tracked-label flex items-center gap-10 text-sm text-bronze"
          >
            {item}
            <span className="text-gold-dim">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
