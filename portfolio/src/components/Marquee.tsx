const items = [
  "BACKEND",
  "PYTHON",
  "DJANGO",
  "AI",
  "LLMS",
  "AUTOMATION",
  "DISTRIBUTED SYSTEMS",
  "SYSTEMS AT SCALE",
  "RAG",
  "MICROSERVICES",
  "SQL",
];

export default function Marquee() {
  return (
    <div className="border-y border-[#1a1a1a] bg-[#0a0a0a] py-4 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center font-mono text-xs tracking-widest text-[#6b6b6b] uppercase whitespace-nowrap"
              >
                <span className="text-[#cbff3f] mx-4">·</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
