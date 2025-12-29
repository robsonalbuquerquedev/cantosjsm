import CardLayout from "@/components/layout/CardLayout";
import CardContentLiturgical from "@/components/CardContentLiturgical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos do Tempo Comum | Cantos Litúrgicos para a Missa"
  },

  description:
    "Explore cantos litúrgicos para o Tempo Comum, organizados por cada momento da Missa. Músicas que acompanham a vida cotidiana da Igreja e o seguimento de Cristo.",

  keywords: [
    "cantos do tempo comum",
    "músicas para missa tempo comum",
    "liturgia tempo comum",
    "cantos católicos missa",
    "ministério de música tempo comum"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/tempo-comum"
  }
};

export default function CardContentLiturgicalPage() {
    return (
        <CardLayout>
            <CardContentLiturgical basePath="tempo-comum" />
        </CardLayout>
    )
}