import Padroeiro from "@/components/cantos/Padroeiro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos ao Padroeiro | Músicas Católicas Devocionais"
  },

  description:
    "Cantos dedicados ao padroeiro da cidade ou comunidade, usados em festas, novenas e celebrações religiosas. Repertório devocional da fé católica.",

  keywords: [
    "cantos ao padroeiro",
    "músicas católicas devocionais",
    "festa do padroeiro",
    "novenas e celebrações",
    "devoção popular católica"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/padroeiro"
  }
};

export default function PadroeiroPage() {
    return (
        <Padroeiro />
    )
}