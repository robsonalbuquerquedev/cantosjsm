import ResourcesCTA from "@/components/home/ResourcesCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "CantosJSM — Cifras e Cantos Litúrgicos Organizados"
  },
  description:
    "Acesse cantos litúrgicos organizados por categorias como Entrada, Salmo, Comunhão, Final e muito mais. Projeto criado por Robson Albuquerque em parceria com a Juventude de Santa Maria (JSM) para auxiliar ministérios de música e celebrações.",
  keywords: [
    "Cantos Litúrgicos",
    "Cifras Católicas",
    "Músicas para Missa",
    "Canto de Entrada",
    "Salmo Responsorial",
    "Aclamação",
    "Comunhão",
    "Cantos Católicos",
    "Hinos Católicos",
    "Músicas Religiosas",
    "CantosJSM",
    "Robson Albuquerque",
    "Juventude de Santa Maria"
  ],
  alternates: {
    canonical: "https://cantosjsm.com.br/"
  },
  openGraph: {
    title: "CantosJSM — Cantos Litúrgicos para Missa e Adoração",
    description:
      "Encontre cantos litúrgicos por categoria: Entrada, Glória, Salmo, Ofertório, Comunhão, Final e muito mais. Uma plataforma criada para ministérios de música.",
    url: "https://cantosjsm.com.br/",
    siteName: "CantosJSM",
    images: [
      {
        url: "https://cantosjsm.com.br/og-home.png",
        width: 1200,
        height: 630,
        alt: "CantosJSM — Plataforma de Cantos Litúrgicos"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CantosJSM — Cantos Litúrgicos para Missa",
    description:
      "Plataforma organizada com cantos e cifras para missas, celebrações e momentos de oração.",
    images: ["https://cantosjsm.com.br/og-home.png"]
  }
};

import Link from "next/link";
import { BookOpen, Music, Mic2, Sparkles, Star, HeartHandshake, Library, Crown, Flame, HandHeart, Church, Calendar, DoorOpen, Wine, Flag, HandHelping, Sun, BookOpenCheck, Megaphone, CheckCircle2, BadgeCheck } from "lucide-react";
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

  const variableParts = [
    { key: "entrada", label: "Entrada", icon: DoorOpen },
    { key: "ofertorio", label: "Ofertório", icon: HandHeart },
    { key: "comunhao", label: "Comunhão", icon: Wine },
    { key: "pos-comunhao", label: "Pós-Comunhão", icon: Wine },
    { key: "final", label: "Final", icon: Flag },
  ];

  const fixedParts = [
    { key: "ato-penitencial", label: "Ato Penitencial", icon: HandHelping },
    { key: "gloria", label: "Glória", icon: Sun },
    { key: "salmo", label: "Salmo", icon: BookOpenCheck },
    { key: "aclamacao", label: "Aclamação", icon: Megaphone },
    { key: "santo", label: "Santo", icon: Sparkles },
    { key: "amem", label: "Amém", icon: CheckCircle2 },
    { key: "cordeiro", label: "Cordeiro", icon: BadgeCheck },
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
