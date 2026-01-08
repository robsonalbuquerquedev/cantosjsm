"use client";

import { motion } from "framer-motion";
import { PersonStanding, Ear, HandHeart } from "lucide-react";

export default function GestosDaMissa() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative fade-in-up-30d"
            >
                {/* Faixa decorativa */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                {/* Título */}
                <header className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                        Gestos da Missa
                    </h1>
                    <p className="text-gray-600">
                        Entenda os gestos, posturas e atitudes corporais que
                        expressam a fé durante a Missa e descubra por que o
                        silêncio é tão importante.
                    </p>
                </header>

                {/* Introdução */}
                <motion.section
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-3"
                >
                    <p>
                        Na Missa, não rezamos apenas com palavras. O corpo também
                        participa da oração. Cada gesto, postura e atitude
                        corporal expressa aquilo que acreditamos e celebramos.
                    </p>
                    <p className="mt-4">
                        Quando participamos com atenção aos gestos, a celebração
                        deixa de ser algo externo e se torna um verdadeiro
                        encontro com Deus.
                    </p>
                </motion.section>

                {/* O corpo que reza */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <PersonStanding size={20} /> O corpo também reza
                    </h2>
                    <p>
                        A liturgia envolve a pessoa inteira. Corpo, mente e
                        coração formam uma única oração. Por isso, os gestos não
                        são detalhes, mas parte essencial da celebração.
                    </p>
                </section>

                {/* Posturas */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2">
                        Principais gestos e posturas
                    </h2>

                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Em pé:</strong> postura de respeito,
                            prontidão e fé. Usada especialmente para o Evangelho
                            e as orações.
                        </li>
                        <li>
                            <strong>Sentado:</strong> atitude de escuta e
                            acolhimento da Palavra de Deus.
                        </li>
                        <li>
                            <strong>Ajoelhado:</strong> gesto de adoração,
                            humildade e reverência diante do mistério
                            eucarístico.
                        </li>
                        <li>
                            <strong>Sinal da Cruz:</strong> recorda a Trindade e
                            o mistério da salvação.
                        </li>
                        <li>
                            <strong>Inclinação:</strong> pequeno gesto que
                            expressa profundo respeito e amor a Deus.
                        </li>
                    </ul>
                </section>

                {/* Silêncio */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Ear size={20} /> A importância do silêncio
                    </h2>
                    <p>
                        O silêncio na Missa não é ausência de som, mas espaço
                        para escutar Deus. Ele permite que a Palavra proclamada
                        desça da mente para o coração.
                    </p>
                    <p className="mt-3">
                        Sem silêncio, a Missa vira apenas palavras. Com silêncio,
                        ela se torna encontro.
                    </p>
                </section>

                {/* Atitude interior */}
                <section>
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <HandHeart size={20} /> Gestos exteriores e atitude interior
                    </h2>
                    <p>
                        Os gestos só fazem sentido quando acompanham uma atitude
                        interior verdadeira. Participar bem da Missa é unir o
                        que fazemos com aquilo que acreditamos.
                    </p>
                </section>
            </motion.article>
        </section>
    );
}
