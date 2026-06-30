import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const services = [
  {
    title: "Digital struktur",
    text: "Vi hjalper team att forma tydliga arbetsfloden, prioriteringar och beslutsvagar.",
  },
  {
    title: "System som haller",
    text: "Grunden byggs for saker drift, ren data och smidig integration mellan viktiga verktyg.",
  },
  {
    title: "Tillvaxt med kontroll",
    text: "Nya initiativ far matbara steg, ansvar och uppfoljning redan fran start.",
  },
];

const metrics = [
  ["01", "Kartlagg nulage"],
  ["02", "Forma flode"],
  ["03", "Bygg stabilt"],
  ["04", "Folj upp"],
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line bg-surface">
          <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
            <div className="relative z-10 max-w-2xl py-8">
              <p className="mb-5 w-fit rounded-full border border-line bg-surface-muted px-4 py-2 text-sm font-medium text-teal">
                Flowline Sverige AB
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                Smartare floden for vaxande verksamheter.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
                Vi bygger digital struktur for bolag som vill samla processer,
                system och uppfoljning i ett lugnare, mer skalbart arbetssatt.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:hello@flowline.se"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white transition hover:bg-teal"
                >
                  Kontakta oss
                </a>
                <a
                  href="#tjanster"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
                >
                  Se vad vi gor
                </a>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-surface-muted shadow-[0_24px_80px_rgba(16,24,21,0.14)] lg:min-h-[620px]">
              <Image
                src="/flowline-hero.png"
                alt="Visualisering av samordnade digitala arbetsfloden."
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/88 p-5 text-white backdrop-blur sm:p-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {metrics.map(([number, label]) => (
                    <div key={number}>
                      <p className="font-mono text-sm text-lime">{number}</p>
                      <p className="mt-1 text-sm font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tjanster" className="border-b border-line py-18 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Grund for nasta steg
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                En hemsida redo att vaxa med verksamheten.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-line bg-surface p-6 shadow-[0_10px_30px_rgba(16,24,21,0.05)]"
                >
                  <h3 className="text-xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-ink/70">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime">
                Produktionsklar start
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Byggd for Next.js, Supabase och Vercel fran dag ett.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/72">
              Projektet ar separerat fran tidigare system, har egna
              miljo-variabler och en ren struktur for kommande sidor,
              formulär, datalager och deploy-floden.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
