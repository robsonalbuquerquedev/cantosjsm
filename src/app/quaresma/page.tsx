import CardLayout from "@/components/layout/CardLayout";
import CardContentLiturgical from "@/components/CardContentLiturgical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos da Quaresma | Cantos Litúrgicos Quaresmais"
  },

  description:
    "Cantos litúrgicos para o Tempo da Quaresma, organizados por cada parte da Missa. Músicas voltadas à conversão, penitência e preparação para a Páscoa.",

  keywords: [
    "cantos da quaresma",
    "músicas para missa quaresmal",
    "cantos penitenciais",
    "quaresma liturgia",
    "ministério de música quaresma"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/quaresma"
  }
};

export default function CardContentLiturgicalPage() {
    return (
        <CardLayout>
            <CardContentLiturgical basePath="quaresma" />
        </CardLayout>
    )
}