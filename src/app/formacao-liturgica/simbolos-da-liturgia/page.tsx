import SimbolosDaLiturgia from "@/components/formacaoliturgica/SimbolosDaLiturgia";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Símbolos da Liturgia: Objetos, Cores e Gestos da Missa | Cantos JSM",
  },

  description:
    "Conheça o significado dos símbolos da Liturgia Católica. Entenda os objetos, as cores litúrgicas e os gestos da Missa, e participe da celebração com mais consciência e fé.",

  keywords: [
    "símbolos da liturgia",
    "liturgia católica",
    "objetos litúrgicos",
    "cores litúrgicas",
    "gestos da missa",
    "formação litúrgica",
    "missa católica",
    "cantos jsm",
    "igreja católica",
  ],

  alternates: {
    canonical:
      "https://cantosjsm.com.br/formacao-liturgica/simbolos-da-liturgia",
  },

  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "https://cantosjsm.com.br/formacao-liturgica/simbolos-da-liturgia",
    siteName: "Cantos JSM",
    title:
      "Símbolos da Liturgia: o que significam objetos, cores e gestos da Missa",
    description:
      "Aprenda o significado dos símbolos usados na Liturgia Católica e descubra como objetos, cores e gestos ajudam os fiéis a viver a Missa de forma mais profunda.",
    images: [
      {
        url: "https://cantosjsm.com.br/og-simbolos-da-liturgia.png",
        width: 1200,
        height: 630,
        alt: "Símbolos da Liturgia Católica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Símbolos da Liturgia: Objetos, Cores e Gestos da Missa",
    description:
      "Descubra o significado dos símbolos litúrgicos e aprofunde sua participação na Missa.",
    images: [
      "https://cantosjsm.com.br/og/og-simbolos-da-liturgia.png",
    ],
  },
};

export default function SimbolosDaLiturgiaPage() {
    return (
        <SimbolosDaLiturgia />
    )
}