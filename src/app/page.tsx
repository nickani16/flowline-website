import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const expertise = [
  {
    title: "VA och ledningsnät",
    text: "Utredningar, tekniska bedömningar och underlag för robusta vatten- och avloppslösningar.",
  },
  {
    title: "VVS i fastigheter",
    text: "Rådgivning kring värme, tappvatten, spillvatten, driftfrågor och tekniska systemval.",
  },
  {
    title: "Beställarstöd",
    text: "Stöd vid kravställning, offertgranskning, projektsamordning och uppföljning av leveranser.",
  },
];

const process = [
  ["01", "Behov och nuläge"],
  ["02", "Teknisk analys"],
  ["03", "Rekommendation"],
  ["04", "Genomförandestöd"],
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0">
            <Image
              src="/flowline-live-hero.webp"
              alt="Flowline arbetar med teknisk rådgivning inom VA och VVS."
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-58"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/16" />
          </div>
          <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-5 w-fit rounded-md border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-lime backdrop-blur">
                Konsult inom VA, VVS och fastigheter
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
                Teknisk rådgivning för hållbara flöden.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                Flowline hjälper fastighetsägare, förvaltare och projektteam
                med utredning, projektering och beställarstöd inom VA, VVS och
                tekniska installationer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@flowline.se"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-lime px-6 text-sm font-semibold text-ink transition hover:bg-white"
                >
                  Kontakta oss
                </a>
                <a
                  href="#expertis"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/28 bg-white/8 px-6 text-sm font-semibold text-white transition hover:bg-white/16"
                >
                  Se expertis
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="expertis" className="border-b border-line py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                  Fokus framåt
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                  Från entreprenad till renodlad konsultpartner.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-ink/70">
                Flowline går vidare med den tekniska erfarenheten från fältet,
                men erbjuder nu rådgivning, analys och projektstöd snarare än
                entreprenadutförande. Det ger kunderna praktiskt grundade råd
                med tydlig riktning.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {expertise.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-line bg-surface p-6 shadow-[0_10px_30px_rgba(16,24,21,0.05)]"
                >
                  <h3 className="text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-ink/70">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="arbetssatt" className="bg-surface py-18 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-surface-muted">
              <Image
                src="/flowline-ramavtal-vvs.webp"
                alt="VVS-installationer och tekniska fastighetssystem."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Arbetssätt
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                Praktisk erfarenhet, tydliga beslutsunderlag.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/70">
                Vi kombinerar teknisk förståelse för verkliga installationer
                med strukturerade underlag som hjälper dig fatta rätt beslut i
                rätt tid.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {process.map(([number, label]) => (
                  <div
                    key={number}
                    className="rounded-lg border border-line bg-background p-5"
                  >
                    <p className="font-mono text-sm text-teal">{number}</p>
                    <p className="mt-2 font-semibold text-ink">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                Nästa projekt
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Behöver du stöd i en teknisk fråga?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Ta kontakt för rådgivning kring VA, VVS, fastighetsteknik,
                underhållsplanering eller kravställning inför projekt.
              </p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/8 p-6">
              <p className="text-sm text-white/64">E-post</p>
              <a
                href="mailto:info@flowline.se"
                className="mt-2 block text-2xl font-semibold text-lime transition hover:text-white"
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
