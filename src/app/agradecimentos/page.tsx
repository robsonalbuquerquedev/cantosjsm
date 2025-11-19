import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Agradecimentos | CantosJSM"
    },

    description:
        "Agradecimentos especiais escritos por Robson Albuquerque e pela Juventude de Santa Maria (JSM). Uma homenagem a todos que contribuem com apoio, orações, participação nos ministérios e fortalecimento da missão.",

    keywords: [
        "Agradecimentos",
        "Juventude de Santa Maria",
        "JSM",
        "CantosJSM",
        "Comunidade Católica",
        "Ministério de Música",
        "Gratidão",
        "Apoio Pastoral"
    ],

    alternates: {
        canonical: "https://cantosjsm.com.br/agradecimentos"
    },

    openGraph: {
        title: "Agradecimentos | CantosJSM",
        description:
            "Uma página dedicada para expressar gratidão a todos que caminham conosco na missão, criada por Robson Albuquerque e pela Juventude de Santa Maria (JSM).",
        url: "https://cantosjsm.com.br/agradecimentos",
        siteName: "CantosJSM",
        images: [
            {
                url: "https://cantosjsm.com.br/og-agradecimentos.png",
                width: 1200,
                height: 630,
                alt: "Agradecimentos - CantosJSM"
            }
        ],
        locale: "pt_BR",
        type: "article"
    },

    twitter: {
        card: "summary_large_image",
        title: "Agradecimentos | CantosJSM",
        description:
            "Uma homenagem a todos que contribuem com apoio, orações e incentivo à missão.",
        images: ["https://cantosjsm.com.br/og-agradecimentos.png"]
    }
};

export default function AgradecimentosPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20">

            <article className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative fade-in-up-30">
                {/* Faixa decorativa */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                {/* Título */}
                <header className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                        Agradecimentos
                    </h1>
                </header>

                {/* Texto */}
                <section className="space-y-5 leading-relaxed text-lg text-gray-800">
                    <p>
                        O <strong>CantosJSM</strong> nasceu da vivência real e do amor que a
                        Juventude de Santa Maria tem pelo serviço nas celebrações. Este
                        projeto não é apenas um site — é fruto da generosidade, dedicação e
                        do desejo sincero de facilitar a missão de tantos ministérios de música
                        que, com alegria, ajudam o povo de Deus a rezar cantando.
                    </p>

                    <p>
                        Agradecemos de coração às{" "}
                        <strong>Irmãs de Santa Maria</strong>, que com seu testemunho,
                        espiritualidade e carinho, inspiram caminhos de fé e serviço em todo
                        o mundo. Este projeto é também um reflexo do carisma que elas nos
                        ensinam a viver: simplicidade, entrega e amor ao próximo.
                    </p>

                    <p>
                        Nosso agradecimento especial aos jovens da{" "}
                        <strong>JSM – Juventude de Santa Maria</strong>, que dedicaram tempo,
                        ideias, sugestões e motivação para que este espaço se tornasse uma
                        realidade. Cada canto, cada detalhe e cada página reflete o empenho e
                        a união dessa família espiritual.
                    </p>

                    <p>
                        Agradecemos também a todos que, direta ou indiretamente, enviaram
                        sugestões, compartilharam cantos, corrigiram detalhes ou espalharam
                        este projeto pelos grupos e comunidades. Vocês fazem parte desta construção.
                    </p>

                    <p>
                        Que este espaço continue ajudando ministérios de música,
                        comunidades e celebrantes a viver com mais profundidade a beleza da
                        liturgia. E que, através de cada canto, muitos corações possam ser
                        tocados pela presença amorosa de Deus.
                    </p>

                    <p className="font-semibold text-amber-700 text-center mt-6 text-xl">
                        “Quem canta, reza duas vezes.” — Santo Agostinho
                    </p>
                </section>
            </article>
        </main>
    );
}
