import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#expertis", label: "Expertis" },
  { href: "#arbetssatt", label: "Arbetssätt" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/92 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="Flowline">
          <Image
            src="/flowline-logo.webp"
            alt="Flowline"
            width={230}
            height={35}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav
          className="hidden items-center gap-2 sm:flex"
          aria-label="Huvudnavigation"
        >
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
        <a
          href="mailto:info@flowline.se"
          className="inline-flex h-10 items-center justify-center rounded-md bg-teal px-4 text-sm font-semibold text-white transition hover:bg-ink"
        >
          Boka rådgivning
        </a>
      </div>
    </header>
  );
}
