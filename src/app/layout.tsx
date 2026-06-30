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
    default: "Flowline Sverige AB | VA- och VVS-konsult",
    template: "%s | Flowline Sverige AB",
  },
  description:
    "Flowline Sverige AB är konsult inom VA, VVS och fastigheter med stöd inom utredning, projektering, teknisk rådgivning och beställarstöd.",
  applicationName: "Flowline Sverige AB",
  authors: [{ name: "Flowline Sverige AB" }],
  creator: "Flowline Sverige AB",
  publisher: "Flowline Sverige AB",
  keywords: [
    "Flowline",
    "Flowline Sverige AB",
    "VA konsult",
    "VVS konsult",
    "fastighetskonsult",
    "teknisk rådgivning",
    "projektering",
    "Sverige",
  ],
  openGraph: {
    title: "Flowline Sverige AB | VA- och VVS-konsult",
    description:
      "Teknisk rådgivning, utredning och projekteringsstöd inom VA, VVS och fastigheter.",
    url: "https://flowline.se",
    siteName: "Flowline Sverige AB",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/flowline-live-hero.webp",
        width: 2000,
        height: 917,
        alt: "Flowline arbetar med VA, VVS och fastigheter.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowline Sverige AB",
    description:
      "Teknisk rådgivning, utredning och projekteringsstöd inom VA, VVS och fastigheter.",
    images: ["/flowline-live-hero.webp"],
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
