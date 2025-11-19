import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Sobre | CantosJSM"
    },
    description:
        "Conheça a história do CantosJSM, um projeto criado por Robson Albuquerque em parceria com a Juventude de Santa Maria (JSM). Saiba como surgiu a plataforma, sua missão, valores e como ela ajuda ministérios de música e comunidades a encontrarem cantos litúrgicos de forma rápida e organizada.",
    keywords: [
        "Sobre o CantosJSM",
        "CantosJSM",
        "Robson Albuquerque",
        "Juventude de Santa Maria",
        "História do projeto",
        "Projeto litúrgico",
        "Cantos Litúrgicos",
        "Plataforma de música litúrgica",
        "Ministério de Música",
        "Cantos para Missa"
    ],
    alternates: {
        canonical: "https://cantosjsm.com.br/sobre"
    },
    openGraph: {
        title: "Sobre | CantosJSM",
        description:
            "Conheça a origem e a missão do CantosJSM — um projeto criado por Robson Albuquerque em parceria com a Juventude de Santa Maria (JSM) para facilitar o acesso aos cantos litúrgicos.",
        url: "https://cantosjsm.com.br/sobre",
        siteName: "CantosJSM",
        images: [
            {
                url: "https://cantosjsm.com.br/og-sobre.png",
                width: 1200,
                height: 630,
                alt: "Sobre o CantosJSM"
            }
        ],
        locale: "pt_BR",
        type: "article"
    },
    twitter: {
        card: "summary_large_image",
        title: "Sobre | CantosJSM",
        description:
            "Conheça a história, missão e propósito do CantosJSM, criado por Robson Albuquerque em parceria com a Juventude de Santa Maria (JSM).",
        images: ["https://cantosjsm.com.br/og-sobre.png"]
    }
};

export default function SobrePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20">
            <article
                className="max-w-3xl w-full bg-white text-black rounded-2xl p-8 md:p-10 shadow-xl border-l-4 border-amber-400 space-y-6 fade-in-up-30"
            >
                {/* Título */}
                <header className="text-center space-y-2 mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Sobre a JSM – Juventude de Santa Maria
                    </h1>
                </header>

                {/* Conteúdo */}
                <section className="space-y-4 leading-relaxed text-lg">
                    <p>
                        A <strong>JSM – Juventude de Santa Maria</strong> faz parte do carisma das{" "}
                        <span className="font-semibold">Irmãs de Santa Maria</span>, uma
                        congregação presente em diversos países ao redor do mundo. Somos jovens
                        que buscam viver a fé com alegria, entrega e serviço, inseridos na missão
                        desta família religiosa.
                    </p>

                    <p>
                        Entre nossas atividades, o ministério de música ocupa um lugar especial.
                        Cantamos nas missas, encontros, momentos de oração e celebrações que
                        fortalecem a fé e unem a comunidade. Cada canto é uma forma de rezar,
                        tocar corações e elevar a alma a Deus.
                    </p>

                    <p>
                        Ao longo da caminhada, percebemos uma dificuldade comum:{" "}
                        <span className="italic">
                            sempre precisar buscar letras e cantos toda vez que íamos ensaiar
                        </span>
                        . Isso tomava tempo, gerava desencontros e muitas vezes tornava os
                        encontros menos fluidos.
                    </p>

                    <p>
                        Sentindo essa necessidade na pele, nasceu o{" "}
                        <strong>CantosJSM</strong>. Um projeto feito com carinho, por quem vive
                        a música litúrgica no cotidiano, para facilitar o acesso aos cantos e
                        apoiar ministérios de música do Brasil inteiro — e até mesmo além
                        fronteiras.
                    </p>

                    <p>
                        Se este espaço é útil para nós, jovens que servem nas celebrações,
                        acreditamos profundamente que também será útil para todas as comunidades,
                        grupos e ministérios que dedicam sua voz e seu coração ao canto na missa.
                    </p>
                </section>

                {/* Frase final */}
                <footer className="text-center mt-6">
                    <p className="text-xl font-semibold text-amber-700">
                        “Quem canta, reza duas vezes.”
                    </p>
                    <p className="text-gray-700">— Santo Agostinho</p>
                </footer>
            </article>
        </main>
    );
}
