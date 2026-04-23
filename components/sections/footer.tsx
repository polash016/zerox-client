import Link from "next/link";
import { Icon } from "@/components/icon";
import { footer, siteConfig } from "@/lib/site-config";

export function Footer() {
  const socials = Object.values(siteConfig.socials);
  return (
    <footer className="bg-ink py-10 md:py-14 px-5 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3.5">
              <span className="font-display font-bold text-lg text-white">
                {siteConfig.name}
              </span>
              <span
                aria-hidden
                className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-brand"
              />
            </div>
            <p className="text-[13px] text-white/30 leading-[1.8] max-w-[260px]">
              {footer.blurb}
            </p>
            <ul role="list" className="flex gap-2.5 mt-5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    aria-label={s.label}
                    rel="me noopener"
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-white/[0.07] hover:bg-sky-brand/25 transition-colors"
                  >
                    <Icon
                      name={s.icon}
                      size={13}
                      className="text-white/45"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.1em] text-white/30 mb-3.5">
                {col.title}
              </h4>
              <ul role="list" className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13px] text-white/40 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-5">
          <span className="text-xs text-white/20">{footer.copyright}</span>
          <ul role="list" className="flex gap-4">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs text-white/20 hover:text-white/50 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
