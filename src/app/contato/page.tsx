import Contato from "@/components/Contato";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Contato | CantosJSM"
    },

    description:
        "Entre em contato com o CantosJSM. Envie sugestões, dúvidas, pedidos de oração ou fale diretamente com Robson Albuquerque e a Juventude de Santa Maria (JSM).",

    keywords: [
        "Contato CantosJSM",
        "Fale Conosco",
        "Juventude de Santa Maria",
        "JSM",
        "Ministério de Música Católica",
        "Cantos Litúrgicos",
        "Contato Comunidade Católica",
        "Pedido de Oração"
    ],

    alternates: {
        canonical: "https://cantosjsm.com.br/contato"
    },

    openGraph: {
        title: "Contato | CantosJSM",
        description:
            "Fale com o CantosJSM. Um canal aberto para diálogo, sugestões, pedidos de oração e apoio à missão da Juventude de Santa Maria (JSM).",
        url: "https://cantosjsm.com.br/contato",
        siteName: "CantosJSM",
        images: [
            {
                url: "https://cantosjsm.com.br/og-contato.png",
                width: 1200,
                height: 630,
                alt: "Contato - CantosJSM"
            }
        ],
        locale: "pt_BR",
        type: "website"
    },

    twitter: {
        card: "summary_large_image",
        title: "Contato | CantosJSM",
        description:
            "Entre em contato com o CantosJSM e caminhe conosco na missão.",
        images: ["https://cantosjsm.com.br/og-contato.png"]
    }
};

export default function ContatoPage() {
    return (
        <Contato />
    )
}