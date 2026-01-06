import FormacaoLiturgicaLayout from "@/components/layout/FormacaoLiturgicaLayout";
import FormacaoLiturgica from "@/components/FormacaoLiturgica";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Formação Litúrgica | Cantos JSM",
    },

    description:
        "Formação Litúrgica com conteúdos para compreender melhor a liturgia da Igreja: canto litúrgico, solenidades, Epifania do Senhor, símbolos, gestos da Missa e o calendário litúrgico.",

    keywords: [
        "formação litúrgica",
        "liturgia católica",
        "canto litúrgico",
        "cantos da missa",
        "epifania do senhor",
        "dia de reis",
        "solenidades litúrgicas",
        "símbolos da liturgia",
        "gestos da missa",
        "calendário litúrgico",
        "cantos jsm",
    ],

    alternates: {
        canonical: "https://cantosjsm.com.br/formacao-liturgica",
    },

    openGraph: {
        title: "Formação Litúrgica | Cantos JSM",
        description:
            "Conteúdos formativos para compreender a liturgia, seus cantos, celebrações, sinais e gestos, à luz da tradição da Igreja.",
        url: "https://cantosjsm.com.br/formacao-liturgica",
        siteName: "Cantos JSM",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "/og-formacao-liturgica.png",
                width: 1200,
                height: 630,
                alt: "Formação Litúrgica – Cantos JSM",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Formação Litúrgica | Cantos JSM",
        description:
            "Aprenda sobre liturgia, canto litúrgico, solenidades e símbolos da Missa com conteúdos formativos do Cantos JSM.",
        images: ["/og-formacao-liturgica.png"],
    },
};

export default function FormacaoLiturgicaPage() {
    return (
        <FormacaoLiturgicaLayout>
            <FormacaoLiturgica />
        </FormacaoLiturgicaLayout>
    );
}
