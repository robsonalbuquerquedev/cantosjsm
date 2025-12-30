import Hinos from "@/components/cantos/Hinos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Hinos Católicos | Cânticos Tradicionais da Igreja"
  },

  description:
    "Hinos católicos tradicionais usados em celebrações, solenidades e momentos de oração. Repertório clássico da Igreja com letras que atravessam gerações.",

  keywords: [
    "hinos católicos",
    "cânticos tradicionais da igreja",
    "músicas religiosas católicas",
    "hinos litúrgicos",
    "cantos tradicionais"
  ],

  alternates: {
    canonical: "https://cantosjsm.com.br/hinos"
  }
};

export default function HinosPage() {
    return (
        <Hinos />
    )
}