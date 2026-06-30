import Link from "next/link";

const navItems = [
  { href: "#tjanster", label: "Tjanster" },
  { href: "mailto:hello@flowline.se", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Flowline">
          <span className="flex size-10 items-center justify-center rounded-md bg-ink text-base font-semibold text-lime">
            F
          </span>
          <span className="text-lg font-semibold text-ink">
            Flowline Sverige AB
          </span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Huvudnavigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-surface-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
