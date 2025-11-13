"use client";

import { motion } from "framer-motion";

export default function SobrePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20 text-white">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg"
            >
                <h1 className="text-4xl font-bold text-amber-300 mb-6 text-center">
                    Sobre a JSM – Juventude de Santa Maria
                </h1>

                <p className="text-lg leading-relaxed text-gray-100 mb-4">
                    A JSM – Juventude de Santa Maria faz parte do carisma das{" "}
                    <span className="font-semibold text-amber-200">Irmãs de Santa Maria</span>,
                    uma congregação presente em diversos países ao redor do mundo. Somos
                    jovens que buscam viver a fé com alegria, entrega e serviço,
                    inseridos na missão desta família religiosa.
                </p>

                <p className="text-lg leading-relaxed text-gray-100 mb-4">
                    Entre nossas atividades, o ministério de música ocupa um lugar muito
                    especial. Cantamos nas missas, encontros, momentos de oração e
                    celebrações que fortalecem a fé e unem a comunidade. Cada canto é
                    uma forma de rezar, tocar corações e elevar a alma a Deus.
                </p>

                <p className="text-lg leading-relaxed text-gray-100 mb-4">
                    Ao longo do caminho, percebemos uma dificuldade comum:{" "}
                    <span className="italic">
                        sempre precisar buscar letras e cantos toda vez que íamos ensaiar
                    </span>. Isso tomava tempo, gerava desencontro e muitas vezes deixava
                    nossos encontros menos fluidos.
                </p>

                <p className="text-lg leading-relaxed text-gray-100 mb-4">
                    Sentindo essa necessidade na pele, nasceu o{" "}
                    <span className="font-semibold text-amber-200">CantosJSM</span>. Um
                    projeto feito com carinho, por quem vive a música litúrgica no
                    cotidiano, para facilitar o acesso aos cantos e apoiar ministérios de
                    música do Brasil inteiro — e até mesmo além fronteiras.
                </p>

                <p className="text-lg leading-relaxed text-gray-100 mb-6">
                    Se é útil para nós, jovens que servem nas celebrações, acreditamos
                    profundamente que também pode ser útil para todas aquelas comunidades,
                    grupos e ministérios que dedicam sua voz e seu coração ao canto na
                    missa.
                </p>

                <p className="text-lg leading-relaxed text-gray-200 text-center">
                    <span className="font-semibold text-amber-300">
                        “Quem canta, reza duas vezes.”
                    </span>{" "}
                    – e que este espaço ajude muitos a rezarem com mais fé, unidade e
                    alegria.
                </p>
            </motion.div>
        </main>
    );
}
