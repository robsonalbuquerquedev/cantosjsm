import EspiritoSanto from "@/components/cantos/EspiritoSanto";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cantos ao Espírito Santo | Músicas Católicas de Oração"
  },

  description:
    "Cantos dedicados ao Espírito Santo para momentos de oração, invocação e celebrações religiosas. Músicas católicas que pedem luz, força e sabedoria.",

  keywords: [
    "cantos ao espírito santo",
    "músicas católicas espírito santo",
    "oração ao espírito santo",
    "pentecostes cantos",
    "invocação espírito santo"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/espirito-santo"
  }
};

export default function EspiritoSantoPage() {
    return (
        <EspiritoSanto />
    )
}