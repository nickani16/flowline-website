import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const services = [
  {
    title: "VA-utredning",
    text: "Kapacitet, status, åtgärdsbehov och tekniska vägval för vatten- och avloppssystem.",
  },
  {
    title: "VVS-rådgivning",
    text: "Stöd kring värme, tappvatten, spillvatten och tekniska installationer i fastigheter.",
  },
  {
    title: "Beställarstöd",
    text: "Kravställning, upphandling, granskning och samordning inför tekniska projekt.",
  },
  {
    title: "Fastighetsteknik",
    text: "Praktiska beslutsunderlag för drift, underhåll och långsiktiga investeringar.",
  },
];

const method = [
  ["01", "Kartlägg nuläge"],
  ["02", "Analysera teknik och risk"],
  ["03", "Prioritera åtgärder"],
  ["04", "Stöd genomförandet"],
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-ink text-white">
          <Image
            src="/flowline-live-hero.webp"
            alt="Teknisk miljö kopplad till VA och VVS."
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/10" />
          <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1480px] items-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-12">
            <div className="max-w-5xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-lime">
                Flowline Sverige AB
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] sm:text-7xl lg:text-8xl">
                Teknisk rådgivning inom VA, VVS och fastigheter.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-white/82">
                Vi hjälper fastighetsägare, förvaltare och projektteam att
                fatta trygga tekniska beslut, från tidig analys till
                genomförande.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-lime py-10 text-ink">
          <div className="mx-auto grid max-w-[1480px] gap-6 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              Ny riktning
            </p>
            <p className="text-2xl font-semibold leading-snug sm:text-3xl">
              Flowline går från entreprenadverksamhet till renodlad konsultroll
              med praktiskt grundad expertis inom vatten, värme, installationer
              och fastighetsteknik.
            </p>
          </div>
        </section>

        <section id="tjanster" className="border-b border-line py-16 sm:py-24">
          <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                  Tjänster
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                  När tekniska system behöver bli begripliga.
                </h2>
              </div>
              <div className="grid border-t border-line md:grid-cols-2">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="border-b border-line py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"
                  >
                    <h3 className="text-2xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-7 text-ink/68">
                      {service.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="omstallning" className="bg-surface-muted py-16 sm:py-24">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
            <div className="relative min-h-[420px] overflow-hidden bg-line">
              <Image
                src="/flowline-ramavtal-vvs.webp"
                alt="VVS och tekniska system i fastigheter."
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Omställning
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Erfarenhet från utförande, nu som rådgivning.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/70">
                Flowline tar med sig förståelsen för hur systemen fungerar i
                verkligheten, men fokuserar nu på analys, råd och
                beslutsunderlag. Det passar kunder som behöver tydlighet innan
                de investerar, upphandlar eller startar åtgärder.
              </p>
            </div>
          </div>
        </section>

        <section id="metod" className="py-16 sm:py-24">
          <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Metod
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-6xl">
                Rådgivning som går att använda.
              </h2>
            </div>
            <div className="mt-12 grid border-t border-line lg:grid-cols-4">
              {method.map(([number, label]) => (
                <div
                  key={number}
                  className="border-b border-line py-8 lg:border-r lg:px-7 lg:last:border-r-0"
                >
                  <p className="font-mono text-sm text-teal">{number}</p>
                  <p className="mt-5 text-2xl font-semibold text-ink">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-ink py-16 text-white sm:py-24">
          <div className="mx-auto grid max-w-[1480px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                Kontakt
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
                Låt oss titta på din tekniska fråga.
              </h2>
            </div>
            <div className="border-t border-white/20 pt-8">
              <p className="max-w-2xl text-lg leading-8 text-white/72">
                Skicka en kort beskrivning av fastigheten, systemet eller
                projektet så återkommer vi med nästa rimliga steg.
              </p>
              <a
                href="mailto:info@flowline.se"
                className="mt-8 inline-flex h-12 items-center justify-center bg-lime px-6 text-sm font-semibold text-ink transition hover:bg-white"
              >
                info@flowline.se
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
