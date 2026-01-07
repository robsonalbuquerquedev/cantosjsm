import DiaDeReis from "@/components/formacaoliturgica/DiaDeReis";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Dia de Reis (Epifania do Senhor) | Formação Litúrgica – Cantos JSM",
    },

    description:
        "Entenda o significado litúrgico do Dia de Reis (Epifania do Senhor), os símbolos dos Reis Magos, a estrela, os dons e os cantos próprios desta celebração da Igreja.",

    keywords: [
        "dia de reis",
        "epifania do senhor",
        "epifania",
        "reis magos",
        "liturgia católica",
        "formação litúrgica",
        "canto litúrgico",
        "cantos da epifania",
        "símbolos da liturgia",
        "calendário litúrgico",
        "cantos jsm",
    ],

    alternates: {
        canonical: "https://cantosjsm.com.br/formacao-liturgica/dia-de-reis",
    },

    openGraph: {
        title: "Dia de Reis (Epifania do Senhor) | Cantos JSM",
        description:
            "Formação litúrgica sobre a Epifania do Senhor: o significado do Dia de Reis, os símbolos, a estrela, os dons e os cantos próprios desta celebração.",
        url: "https://cantosjsm.com.br/formacao-liturgica/dia-de-reis",
        siteName: "Cantos JSM",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "/og-dia-de-reis.png",
                width: 1200,
                height: 630,
                alt: "Dia de Reis – Epifania do Senhor | Cantos JSM",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Dia de Reis (Epifania do Senhor) | Cantos JSM",
        description:
            "Descubra o significado litúrgico da Epifania do Senhor, os símbolos dos Reis Magos e os cantos próprios desta celebração.",
        images: ["/og-dia-de-reis.png"],
    },
};

export default function DiaDeReisPage() {
    return (
        <DiaDeReis />
    )
}