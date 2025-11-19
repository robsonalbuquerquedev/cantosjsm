import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cantosjsm.com.br"),

  title: {
    default: "CantosJSM",
    template: "%s | CantosJSM"
  },

  description:
    "Plataforma completa de cantos litúrgicos criada por Robson Albuquerque e pela Juventude de Santa Maria (JSM). Reúne músicas para todas as partes da Missa — Entrada, Ato Penitencial, Salmo, Glória, Aclamação, Ofertório, Santo, Amém, Cordeiro, Comunhão e Final — além de categorias especiais como Hinos, Cantos Marianos, Espírito Santo, Adoração e Padroeiro da Cidade. Também oferece rotas institucionais como Sobre, Contato, Agradecimentos, Guia Litúrgico, Termos de Uso e Política de Privacidade, criando um ambiente seguro, organizado e formativo para ministérios de música.",

  keywords: [
    // Conceito geral
    "Cantos Litúrgicos",
    "Músicas para Missa",
    "Cantos Católicos",
    "Liturgia",
    "Missa Católica",
    "Ministério de Música",
    "Louvor",
    "Repertório Litúrgico",
    "Cânticos Católicos",

    // Rotas institucionais
    "Guia Litúrgico",
    "Contato CantosJSM",
    "Sobre Juventude de Santa Maria",
    "Política de Privacidade CantosJSM",
    "Termos de Uso CantosJSM",

    // Partes da Missa
    "Canto de Entrada",
    "Ato Penitencial",
    "Salmo Responsorial",
    "Glória",
    "Aclamação ao Evangelho",
    "Ofertório",
    "Santo",
    "Amém",
    "Cordeiro de Deus",
    "Canto de Comunhão",
    "Canto Final",

    // Categorias especiais
    "Hinos Católicos",
    "Cantos Marianos",
    "Músicas ao Espírito Santo",
    "Cantos de Adoração",
    "Padroeiro da Cidade",

    // Variedades úteis
    "Música Católica para Missa",
    "Repertório para Liturgia",
    "Cantos para Celebrações",
    "Cantos para Igreja"
  ],

  // CATEGORIA
  category: "Religious Education",

  // AUTORIA COMPLETA
  authors: [
    { name: "Robson Albuquerque", url: "https://robsonverse.vercel.app" },
    { name: "Juventude de Santa Maria (JSM)" }
  ],

  creator: "Robson Albuquerque",
  publisher: "CantosJSM • Projeto de Robson Albuquerque",

  openGraph: {
    title: "CantosJSM",
    description:
      "Plataforma completa de cantos litúrgicos criada por Robson Albuquerque e pela Juventude de Santa Maria (JSM). Reúne músicas para todas as partes da Missa — Entrada, Ato Penitencial, Salmo, Glória, Aclamação, Ofertório, Santo, Amém, Cordeiro, Comunhão e Final — além de categorias especiais como Hinos, Cantos Marianos, Espírito Santo, Adoração e Padroeiro da Cidade. Também oferece rotas institucionais como Sobre, Contato, Agradecimentos, Guia Litúrgico, Termos de Uso e Política de Privacidade, criando um ambiente seguro, organizado e formativo para ministérios de música.",
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
    description:
      "Plataforma completa de cantos litúrgicos criada por Robson Albuquerque e pela Juventude de Santa Maria (JSM). Reúne músicas para todas as partes da Missa — Entrada, Ato Penitencial, Salmo, Glória, Aclamação, Ofertório, Santo, Amém, Cordeiro, Comunhão e Final — além de categorias especiais como Hinos, Cantos Marianos, Espírito Santo, Adoração e Padroeiro da Cidade. Também oferece rotas institucionais como Sobre, Contato, Agradecimentos, Guia Litúrgico, Termos de Uso e Política de Privacidade, criando um ambiente seguro, organizado e formativo para ministérios de música.",
    images: ["/og-image.png"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    types: {
      "application/ld+json": "Religious Education",
    },
    canonical: "https://cantosjsm.com.br",
    languages: {
      "pt-BR": "https://cantosjsm.com.br",
      "en-US": "https://cantosjsm.com.br/en",
    },
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Tag obrigatória do AdSense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-9360124149047745"
        />

        {/* JSON-LD — Organização + Website */}
        <Script id="jsonld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CantosJSM",
            url: "https://cantosjsm.com.br",
            logo: "https://cantosjsm.com.br/og-image.png",
            founder: "Robson Albuquerque",
            sameAs: [
              "https://www.instagram.com/juventudesantamaria/",
              "https://robsonverse.vercel.app/",
              "https://www.facebook.com/robson.albuquerque098",
              "https://www.instagram.com/robson.albuquerque_cm/"
            ]
          })}
        </Script>

        <Script id="jsonld-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CantosJSM",
            url: "https://cantosjsm.com.br",
            publisher: {
              "@type": "Organization",
              name: "CantosJSM"
            }
          })}
        </Script>

        {/* 📌 Breadcrumb automático (para SEO avançado) */}
        <Script id="breadcrumb-injector" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Início",
                item: "https://cantosjsm.com.br"
              }
            ]
          })}
        </Script>
      </head>

      <body className="relative min-h-screen flex flex-col">
        {/* Background fixo */}
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

        {/* Google AdSense Script */}
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
