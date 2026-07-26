const items = [
  "Hydroseeding",
  "Hydromulching",
  "Anti-érosion",
  "Suivi 30 jours",
  "Solutions adaptées",
];

export default function KineticBand() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section aria-label="Expertises Hydrovert" className="overflow-hidden border-y border-[#244231] bg-[#0b2116] py-4 text-[#d8f3bd]">
      <div className="hydrovert-marquee flex items-center">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center whitespace-nowrap text-xs font-bold uppercase tracking-[.24em]">
            <span className="mx-5 size-1.5 rounded-full bg-[#9fd875]" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
