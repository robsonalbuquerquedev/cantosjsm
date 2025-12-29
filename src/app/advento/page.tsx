import CardLayout from "@/components/layout/CardLayout";
import CardContentLiturgical from "@/components/CardContentLiturgical";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Cantos do Advento | Cantos Litúrgicos para a Missa"
  },

  description:
    "Encontre cantos litúrgicos para o Tempo do Advento, organizados por cada momento da Missa. Uma preparação espiritual para o Natal, com músicas adequadas à espera, vigilância e esperança cristã.",

  keywords: [
    "cantos do advento",
    "músicas para missa do advento",
    "cantos litúrgicos advento",
    "ministério de música advento",
    "entrada advento",
    "salmo advento"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/advento"
  }
};

export default function CardContentLiturgicalPage() {
    return (
        <CardLayout>
            <CardContentLiturgical basePath="advento" />
        </CardLayout>
    )
}