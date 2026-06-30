import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowline.se"),
  title: {
    default: "Flowline Sverige AB",
    template: "%s | Flowline Sverige AB",
  },
  description:
    "Flowline Sverige AB skapar tydliga digitala floden for verksamheter som vill arbeta smartare, snabbare och mer hallbart.",
  applicationName: "Flowline Sverige AB",
  authors: [{ name: "Flowline Sverige AB" }],
  creator: "Flowline Sverige AB",
  publisher: "Flowline Sverige AB",
  keywords: [
    "Flowline",
    "Flowline Sverige AB",
    "digitala floden",
    "verksamhetsutveckling",
    "processutveckling",
    "Sverige",
  ],
  openGraph: {
    title: "Flowline Sverige AB",
    description:
      "Digital struktur, smartare arbetsfloden och robusta system for vaxande verksamheter.",
    url: "https://flowline.se",
    siteName: "Flowline Sverige AB",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/flowline-hero.png",
        width: 1536,
        height: 1024,
        alt: "Abstrakt visualisering av samordnade digitala arbetsfloden.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowline Sverige AB",
    description:
      "Digital struktur, smartare arbetsfloden och robusta system for vaxande verksamheter.",
    images: ["/flowline-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
