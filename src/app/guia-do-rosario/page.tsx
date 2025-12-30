import GuiaDoRosario from "@/components/GuiaDoRosario";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Guia do Rosário | Como Rezar o Terço | CantosJSM"
    },

    description:
        "Guia completo do Rosário: o que é o Rosário, como rezar o Terço passo a passo, mistérios do Rosário, dias de cada mistério e todas as orações. Conteúdo catequético do CantosJSM.",

    keywords: [
        "Guia do Rosário",
        "Como rezar o Terço",
        "Rosário Católico",
        "Mistérios do Rosário",
        "Dias dos Mistérios do Rosário",
        "Orações do Rosário",
        "Terço Católico",
        "Devoção Mariana",
        "CantosJSM"
    ],

    alternates: {
        canonical: "https://cantosjsm.com.br/guia-do-rosario"
    },

    openGraph: {
        title: "Guia do Rosário | Como Rezar o Terço",
        description:
            "Aprenda o que é o Rosário, como rezar o Terço, conheça os mistérios, os dias de cada mistério e todas as orações do Rosário em um guia completo do CantosJSM.",
        url: "https://cantosjsm.com.br/guia-do-rosario",
        siteName: "CantosJSM",
        images: [
            {
                url: "https://cantosjsm.com.br/og-guia-do-rosario.png",
                width: 1200,
                height: 630,
                alt: "Guia do Rosário - Como Rezar o Terço | CantosJSM"
            }
        ],
        locale: "pt_BR",
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title: "Guia do Rosário | CantosJSM",
        description:
            "Guia completo para aprender a rezar o Terço e compreender os mistérios do Rosário.",
        images: ["https://cantosjsm.com.br/og-guia-do-rosario.png"]
    }
};

export default function GuiaDoRosarioPage() {
    return (
        <GuiaDoRosario />
    )
}