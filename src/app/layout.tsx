import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import BreadcrumbInjector from "@/components/BreadcrumbInjector";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://cantosjsm.com.br"),

  title: {
    default: "CantosJSM | Cantos Litúrgicos e Músicas para a Missa",
    template: "%s | CantosJSM"
  },

  description:
    "CantosJSM é uma plataforma católica dedicada a cantos litúrgicos e devocionais para a Santa Missa. Encontre músicas organizadas por momento da celebração — Entrada, Salmo, Comunhão, Final e mais — além de categorias espirituais como Adoração, Espírito Santo e Maria. Criado para ajudar ministérios de música com clareza, organização e fidelidade litúrgica.",

  keywords: [
    "cantos litúrgicos",
    "músicas para missa",
    "cantos católicos",
    "repertório litúrgico",
    "ministério de música católico",
    "música católica para igreja",
    "canto de entrada",
    "salmo responsorial",
    "canto de comunhão",
    "cantos de adoração",
    "cantos marianos"
  ],

  category: "Religious Music and Liturgy",

  authors: [
    {
      name: "Robson Albuquerque",
      url: "https://robsonverse.vercel.app"
    },
    {
      name: "Juventude de Santa Maria (JSM)"
    }
  ],

  creator: "Robson Albuquerque",
  publisher: "CantosJSM",

  openGraph: {
    title: "CantosJSM | Cantos Litúrgicos para a Missa",
    description:
      "Descubra cantos litúrgicos e devocionais organizados por momento da Missa. Uma plataforma criada para apoiar ministérios de música com clareza, espiritualidade e fidelidade litúrgica.",
    url: "https://cantosjsm.com.br",
    siteName: "CantosJSM",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CantosJSM - Cantos Litúrgicos Católicos"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "CantosJSM | Cantos Litúrgicos para a Missa",
    description:
      "Plataforma católica com cantos litúrgicos organizados por momento da Missa e categorias espirituais.",
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
      "max-video-preview": -1
    }
  },

  alternates: {
    canonical: "https://cantosjsm.com.br",
    languages: {
      "pt-BR": "https://cantosjsm.com.br"
    }
  }
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

      <body>
        <BreadcrumbInjector />
        <MainLayout>
          {children}
        </MainLayout>
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
