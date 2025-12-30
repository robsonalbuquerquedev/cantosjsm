import Adoracao from "@/components/cantos/Adoracao";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos de Adoração | Músicas Católicas para Oração"
  },

  description:
    "Cantos de adoração para momentos de oração, louvor e contemplação diante do Santíssimo Sacramento. Conteúdo devocional católico para uso pessoal e comunitário.",

  keywords: [
    "cantos de adoração",
    "músicas católicas de adoração",
    "adoração ao santíssimo",
    "louvor e adoração católico",
    "oração com música"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/adoracao"
  }
};

export default function AdoracaoPage() {
    return (
        <Adoracao />
    )
}