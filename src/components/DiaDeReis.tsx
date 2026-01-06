import { Star, Gift, Music } from "lucide-react";

export default function DiaDeReis() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <article className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative fade-in-up-30d">
                {/* Faixa decorativa */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                {/* Título */}
                <header className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                        Dia de Reis (Epifania do Senhor)
                    </h1>
                    <p className="text-gray-600">
                        Entenda o significado litúrgico da Epifania, os símbolos dos
                        Reis Magos, a estrela, os dons e os cantos próprios desta
                        celebração.
                    </p>
                </header>

                {/* Introdução */}
                <section className="mb-8">
                    <p>
                        O Dia de Reis, celebrado em <strong>6 de janeiro</strong>,
                        encerra o Tempo do Natal e celebra um momento muito especial:
                        <strong> Jesus se manifesta ao mundo inteiro</strong>.
                    </p>
                    <p className="mt-4">
                        Na liturgia, essa celebração recebe o nome de{" "}
                        <strong>Epifania do Senhor</strong>, palavra que significa
                        &ldquo;manifestação&ldquo;. Deus se mostra não apenas a um povo, mas a
                        todos.
                    </p>
                </section>

                {/* Epifania */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-amber-800 mb-2">
                        O que é a Epifania?
                    </h2>
                    <p>
                        A Epifania recorda que Jesus não veio só para Israel, mas
                        para toda a humanidade. Os Reis Magos representam os povos
                        de todas as nações que reconhecem Cristo como luz e salvação.
                    </p>
                </section>

                {/* Reis Magos */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-amber-800 mb-2">
                        Os Reis Magos
                    </h2>
                    <p>
                        Os Magos eram sábios vindos do Oriente. Eles não conheciam as
                        Escrituras de Israel, mas souberam ler os sinais de Deus na
                        criação. Ao encontrar o Menino Jesus, eles se ajoelham e o
                        adoram.
                    </p>
                </section>

                {/* Estrela */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Star size={20} /> A Estrela
                    </h2>
                    <p>
                        A estrela é símbolo da luz de Deus que guia. Na liturgia, ela
                        nos lembra que quem se coloca a caminho encontra Cristo.
                    </p>
                </section>

                {/* Dons */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Gift size={20} /> Os Dons Oferecidos
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Ouro:</strong> reconhece Jesus como Rei.
                        </li>
                        <li>
                            <strong>Incenso:</strong> reconhece Jesus como Deus.
                        </li>
                        <li>
                            <strong>Mirra:</strong> recorda sua humanidade e sua
                            entrega.
                        </li>
                    </ul>
                </section>

                {/* Cantos */}
                <section>
                    <h2 className="text-xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Music size={20} /> Cantos Próprios da Celebração
                    </h2>
                    <p>
                        Na Epifania, os cantos devem expressar alegria, luz e
                        manifestação. É comum que falem de:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Luz que brilha para todos os povos</li>
                        <li>Caminho, estrela e revelação</li>
                        <li>Adoração e reconhecimento de Cristo</li>
                    </ul>
                </section>
            </article>
        </section>
    );
}
