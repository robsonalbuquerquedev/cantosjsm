import AgendaJSM from "@/components/AgendaJSM";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Agenda do Ministério de Música JSM | Juventude de Santa Maria"
    },
    description:
        "Confira a Agenda do Ministério de Música da Juventude de Santa Maria (JSM). Veja as datas em que o grupo exerce seu serviço musical nas celebrações litúrgicas e em outras missões pastorais.",
    keywords: [
        "Agenda JSM",
        "Ministério de Música",
        "Juventude de Santa Maria",
        "Agenda Litúrgica",
        "Música Litúrgica Católica",
        "Cantos Litúrgicos",
        "Serviço Musical Pastoral",
        "Celebrações Litúrgicas",
        "Ministério de Música Católica"
    ],
    alternates: {
        canonical: "https://cantosjsm.com.br/agenda-jsm"
    },
    openGraph: {
        title: "Agenda do Ministério de Música JSM",
        description:
            "Datas e compromissos do Ministério de Música da Juventude de Santa Maria nas celebrações litúrgicas e missões pastorais.",
        url: "https://cantosjsm.com.br/agenda-jsm",
        siteName: "Cantos JSM",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "https://cantosjsm.com.br/og/og-agenda-jsm.png",
                width: 1200,
                height: 630,
                alt: "Agenda do Ministério de Música da Juventude de Santa Maria"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Agenda do Ministério de Música JSM",
        description:
            "Acompanhe as datas do serviço musical da Juventude de Santa Maria nas celebrações litúrgicas.",
        images: ["https://cantosjsm.com.br/og/og-agenda-jsm.png"]
    }
};

export default function AgendaJSMPage() {
    return (
        <AgendaJSM />
    )
}