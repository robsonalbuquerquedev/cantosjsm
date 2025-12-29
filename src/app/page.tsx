import ResourcesCTA from "@/components/home/ResourcesCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "CantosJSM | Cantos Litúrgicos, Cifras e Guias para a Missa"
  },

  description:
    "CantosJSM é um espaço católico criado para ajudar ministérios de música a encontrarem cantos litúrgicos e devocionais com facilidade. Explore músicas organizadas por momento da Missa, conteúdos formativos como o Guia Litúrgico, o Guia do Rosário e recursos musicais para servir melhor na Igreja.",

  keywords: [
    "cantos litúrgicos",
    "músicas para missa",
    "cifras católicas",
    "ministério de música",
    "canto de comunhão",
    "salmo responsorial",
    "cantos devocionais",
    "guia litúrgico",
    "rosário católico"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/"
  },

  openGraph: {
    title: "CantosJSM | Cantos Litúrgicos e Conteúdos para a Missa",
    description:
      "Plataforma católica com cantos litúrgicos organizados por momento da Missa, além de guias espirituais e formativos para ministérios de música e fiéis.",
    url: "https://cantosjsm.com.br/",
    siteName: "CantosJSM",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://cantosjsm.com.br/og-home.png",
        width: 1200,
        height: 630,
        alt: "CantosJSM - Cantos Litúrgicos e Guias Católicos"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "CantosJSM | Cantos Litúrgicos para a Missa",
    description:
      "Encontre cantos litúrgicos, cifras e conteúdos católicos para ministérios de música e celebrações.",
    images: ["https://cantosjsm.com.br/og-home.png"]
  }
};

import { Library, Crown, Flame, HandHeart, Church, Calendar } from "lucide-react";
import MainHeroSplit from "@/components/hero/MainHeroSplit";
import LiturgicalDevotionalSplit from "@/components/LiturgicalDevotionalSplit";

export default function Home() {
  const liturgicalTimes = [
    { key: "advento", label: "Advento", icon: Calendar },
    { key: "natal", label: "Natal", icon: Calendar },
    { key: "quaresma", label: "Quaresma", icon: Calendar },
    { key: "pascoa", label: "Páscoa", icon: Calendar },
    { key: "tempo-comum", label: "Tempo Comum", icon: Calendar },
  ];

  const sections = [
    { label: "Hinos", path: "/hinos", icon: Library },
    { label: "Marianas", path: "/marianas", icon: Crown },
    { label: "Espírito Santo", path: "/espirito-santo", icon: Flame },
    { label: "Adoração", path: "/adoracao", icon: HandHeart },
    { label: "Padroeiro da Cidade", path: "/padroeiro-da-cidade", icon: Church },
  ];

  return (
    <>
      <MainHeroSplit />
      <LiturgicalDevotionalSplit
        liturgicalTimes={liturgicalTimes}
        devotionalSections={sections}
      />
      <ResourcesCTA />
    </>
  );
}
