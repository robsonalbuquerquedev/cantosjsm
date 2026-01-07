import CantoLiturgicoVsCantoReligioso from "@/components/formacaoliturgica/CantoLiturgicoVsCantoReligioso";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Canto Litúrgico × Canto Religioso | Formação Litúrgica – CantosJSM",
  },

  description:
    "Entenda a diferença entre o canto litúrgico e o canto religioso. Saiba qual canto serve à ação litúrgica da Igreja e qual expressa a devoção pessoal.",

  keywords: [
    "canto litúrgico",
    "canto religioso",
    "música litúrgica",
    "formação litúrgica",
    "liturgia da Igreja",
    "música na missa",
    "cantos para a missa",
    "cantos religiosos",
    "CantosJSM",
  ],

  alternates: {
    canonical:
      "https://cantosjsm.com.br/formacao-liturgica/canto-liturgico-vs-canto-religioso",
  },

  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "https://cantosjsm.com.br/formacao-liturgica/canto-liturgico-vs-canto-religioso",
    siteName: "CantosJSM",
    title:
      "Canto Litúrgico × Canto Religioso | Formação Litúrgica",
    description:
      "Aprenda a diferença entre o canto que serve à liturgia da Igreja e o canto de devoção religiosa. Formação litúrgica clara e acessível.",
    images: [
      {
        url: "https://cantosjsm.com.br/og-canto-liturgico-vs-canto-religioso.png",
        width: 1200,
        height: 630,
        alt: "Canto Litúrgico versus Canto Religioso",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Canto Litúrgico × Canto Religioso",
    description:
      "Qual é a diferença entre o canto litúrgico e o canto religioso? Entenda e escolha melhor os cantos na vida da Igreja.",
    images: [
      "https://cantosjsm.com.br/og-canto-liturgico-vs-canto-religioso.png",
    ],
  },
};

export default function CantoLiturgicoVsCantoReligiosoPage() {
    return (
        <CantoLiturgicoVsCantoReligioso />
    )
}