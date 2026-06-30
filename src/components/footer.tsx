export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-ink/64 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Flowline Sverige AB.</p>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-teal" href="mailto:info@flowline.se">
            info@flowline.se
          </a>
          <span>Konsult inom VA, VVS och fastigheter</span>
        </div>
      </div>
    </footer>
  );
}
