import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Ajo Digital — Modernizing Africa's Informal Savings",
  description:
    "A mobile infrastructure platform that digitizes the traditional Alajo (thrift collection) system in Nigeria. Transforms manual paper-based savings into an offline-first digital ledger with instant SMS receipts and zero-custody routing.",
  keywords: [
    "Ajo Digital",
    "Alajo",
    "Esusu",
    "Ajo Nigeria",
    "Thrift Collection",
    "Informal Savings",
    "African Fintech",
    "Digital Ledger",
    "SMS Receipts",
    "Zero Custody",
  ],
  authors: [{ name: "Ajo Digital Team" }],
  openGraph: {
    title: "Ajo Digital — Modernizing Africa's Informal Savings",
    description:
      "Transforming manual paper-based daily savings into a transparent, offline-first digital ledger with instant SMS receipts and zero-custody bank routing.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased selection:bg-zinc-900 selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
