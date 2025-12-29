import CardLayout from "@/components/layout/CardLayout";
import CardContentLiturgical from "@/components/CardContentLiturgical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos do Natal | Cantos Litúrgicos Natalinos"
  },

  description:
    "Cantos litúrgicos para o Tempo do Natal, organizados por cada parte da Missa. Músicas que celebram o nascimento de Jesus Cristo com alegria, luz e espiritualidade.",

  keywords: [
    "cantos de natal litúrgicos",
    "músicas para missa de natal",
    "cantos natalinos igreja",
    "ministério de música natal",
    "entrada natal",
    "comunhão natal"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/natal"
  }
};

export default function CardContentLiturgicalPage() {
    return (
        <CardLayout>
            <CardContentLiturgical basePath="natal" />
        </CardLayout>
    )
}