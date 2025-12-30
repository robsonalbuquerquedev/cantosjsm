import Marianas from "@/components/cantos/Marianas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos Marianos | Músicas Católicas para Nossa Senhora"
  },

  description:
    "Cantos marianos dedicados à Virgem Maria para momentos de devoção, oração e celebrações especiais. Músicas que expressam amor, confiança e entrega.",

  keywords: [
    "cantos marianos",
    "músicas para nossa senhora",
    "devoção mariana",
    "cânticos a maria",
    "oração mariana"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/marianas"
  }
};

export default function MarianasPage() {
    return (
        <Marianas />
    )
}