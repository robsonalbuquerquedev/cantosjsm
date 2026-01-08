import GestosDaMissa from "@/components/formacaoliturgica/GestosDaMissa";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Gestos da Missa: significado, posturas e o valor do silêncio | Formação Litúrgica – Cantos JSM"
    },
    description:
        "Entenda o significado dos gestos, posturas e atitudes corporais na Missa. Saiba por que ficar de pé, sentar, ajoelhar e o silêncio são expressões vivas da fé cristã.",

    keywords: [
        "gestos da missa",
        "posturas na missa",
        "significado dos gestos litúrgicos",
        "silêncio na missa",
        "formação litúrgica",
        "liturgia católica",
        "participação na missa",
        "cantos e gestos litúrgicos"
    ],

    alternates: {
        canonical: "https://cantosjsm.com.br/formacao-liturgica/gestos-da-missa"
    },

    openGraph: {
        title: "Gestos da Missa: o corpo também reza",
        description:
            "Descubra como os gestos, as posturas e o silêncio expressam a fé durante a Missa e ajudam a viver melhor a liturgia.",
        url: "https://cantosjsm.com.br/formacao-liturgica/gestos-da-missa",
        siteName: "Cantos JSM",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "https://cantosjsm.com.br/og-gestos-da-missa.png",
                width: 1200,
                height: 630,
                alt: "Gestos da Missa e o significado litúrgico das posturas"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",
        title: "Gestos da Missa: o corpo também reza",
        description:
            "Por que ficamos de pé, sentamos, ajoelhamos e fazemos silêncio na Missa? Entenda o sentido litúrgico desses gestos.",
        images: [
            "https://cantosjsm.com.br/og/og-gestos-da-missa.png"
        ]
    }
};

export default function GestosDaMissaPage() {
    return (
        <GestosDaMissa />
    )
}