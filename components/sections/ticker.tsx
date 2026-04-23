import { tickerItems } from "@/lib/site-config";

export function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-rule py-3 bg-sky-brand/10"
    >
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 pr-12 text-[11px] font-bold uppercase tracking-[0.1em] text-sky-brand"
          >
            <span className="h-1 w-1 rounded-full bg-sky-brand shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
