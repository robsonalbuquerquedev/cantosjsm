import CardLayout from "@/components/layout/CardLayout";
import CardContentLiturgical from "@/components/CardContentLiturgical";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos da Páscoa | Cantos Litúrgicos Pascal"
  },

  description:
    "Descubra cantos litúrgicos para o Tempo Pascal, organizados por momento da Missa. Músicas que proclamam a Ressurreição de Cristo e a vitória da vida sobre a morte.",

  keywords: [
    "cantos da páscoa",
    "músicas para missa pascal",
    "cantos litúrgicos páscoa",
    "tempo pascal cantos",
    "aleluia páscoa"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/pascoa"
  }
};

export default function CardContentLiturgicalPage() {
    return (
        <CardLayout>
            <CardContentLiturgical basePath="pascoa" />
        </CardLayout>
    )
}