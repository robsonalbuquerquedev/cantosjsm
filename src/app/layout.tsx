import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CantosJSM",
  description: "Banco de cantos litúrgicos colaborativo criado pela Juventude de Santa Maria.",
  keywords: [
    "Cantos Litúrgicos",
    "Músicas para Missa",
    "Liturgia",
    "JSM",
    "Juventude de Santa Maria",
    "Irmãs de Santa Maria",
    "Ministério de Música",
    "Cantos Católicos",
    "Cânticos",
    "Louvor",
    "Igreja Católica"
  ],
  authors: [{ name: "Juventude de Santa Maria (JSM)" }],
  openGraph: {
    title: "CantosJSM",
    description: "Banco de cantos litúrgicos colaborativo criado pela Juventude de Santa Maria.",
    url: "https://cantosjsm.com.br",
    siteName: "CantosJSM",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CantosJSM - Cantos Litúrgicos"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CantosJSM",
    description: "Banco de cantos litúrgicos colaborativo criado pela Juventude de Santa Maria.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative min-h-screen flex flex-col">

        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/background.jpg")' }}
        />

        <div className="fixed inset-0 -z-10 bg-black/40" />

        <header className="relative z-20">
          <Header />
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 py-16 md:py-20">
          <div className="w-full text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            {children}
          </div>
        </main>

        <footer className="relative z-20 mt-10">
          <Footer />
        </footer>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9360124149047745"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
