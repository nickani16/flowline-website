import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#omstallning", label: "Omställning" },
  { href: "#metod", label: "Metod" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/94 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center" aria-label="Flowline">
          <Image
            src="/flowline-logo.webp"
            alt="Flowline"
            width={230}
            height={35}
            priority
            className="h-7 w-auto sm:h-8"
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
              className="px-3 py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:info@flowline.se"
          className="inline-flex h-10 items-center justify-center bg-ink px-4 text-sm font-semibold text-white transition hover:bg-teal"
        >
          Boka rådgivning
        </a>
      </div>
    </header>
  );
}
