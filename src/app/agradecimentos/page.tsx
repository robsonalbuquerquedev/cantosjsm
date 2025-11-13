"use client";

import { motion } from "framer-motion";

export default function AgradecimentosPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20">

            <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative"
            >
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
            </motion.article>
        </main>
    );
}
