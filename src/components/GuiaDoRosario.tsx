"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpenCheck, BookOpen, Sun, HeartCrack, Lightbulb, ArrowUp } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function GuiaDoRosario() {

    // 🔽 Rolagem suave para toda a página
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            {/* Cabeçalho */}
            <header className="mb-10 text-center max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-white drop-shadow">
                    <Sparkles size={32} className="text-amber-300" />
                    Guia do Rosário
                </h1>

                <p className="text-base md:text-lg text-amber-50/90">
                    Passo a passo simples para rezar o Rosário, o Terço, conhecer os mistérios, dias e todas as orações.
                </p>
            </header>

            {/* ÍNDICE NAVEGÁVEL */}
            <motion.nav
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                    bg-white text-black p-6 rounded-2xl shadow-xl
                    border-l-4 border-amber-400 max-w-4xl w-full mb-10
                "
            >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-800">
                    <BookOpenCheck /> Índice rápido
                </h2>

                <ul className="grid gap-3 text-amber-700 font-semibold md:grid-cols-2">
                    <li><a href="#o-que-e" className="hover:text-amber-900">• O que é o Rosário</a></li>
                    <li><a href="#passo-passo" className="hover:text-amber-900">• Como rezar o Terço</a></li>
                    <li><a href="#misterios" className="hover:text-amber-900">• Mistérios do Rosário</a></li>
                    <li><a href="#dias-da-semana" className="hover:text-amber-900">• Dias de cada mistério</a></li>
                    <li><a href="#oracoes" className="hover:text-amber-900">• Orações do Rosário</a></li>
                </ul>

                <p className="text-xs text-gray-600 mt-3">
                    Toque em um item para ir diretamente ao conteúdo.
                </p>
            </motion.nav>

            {/* CONTEÚDO PRINCIPAL */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-4xl w-full space-y-10"
            >
                {/* Seção 1 */}
                {/* O que é o Rosário e o Terço */}
                <section id="o-que-e" aria-labelledby="o-que-e-rosario">
                    <h2
                        id="o-que-e-rosario"
                        className="text-2xl font-bold mb-3 text-amber-800"
                    >
                        O que é o Rosário e o Terço?
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-700 mb-3">
                        O Rosário é uma oração contemplativa na qual meditamos a vida de
                        Jesus e de Maria, dividida em mistérios. Tradicionalmente, o Rosário
                        completo possui quatro conjuntos de mistérios, com cinco dezenas em
                        cada um.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        O Terço é uma parte do Rosário: rezamos apenas um conjunto de cinco
                        mistérios por vez (Gozosos, Luminosos, Dolorosos ou Gloriosos), o que
                        costuma ser feito diariamente, de acordo com o dia da semana.
                    </p>
                </section>

                {/* Seção 2 */}
                {/* Como rezar o Terço passo a passo */}
                <section id="passo-passo" aria-labelledby="como-rezar-terco">
                    <h2
                        id="como-rezar-terco"
                        className="text-2xl font-bold mb-3 text-amber-800"
                    >
                        Como rezar o Terço (passo a passo)
                    </h2>

                    <ol className="list-decimal list-inside space-y-2 text-gray-800 text-lg leading-relaxed">
                        <li>Inicie com o sinal da cruz.</li>
                        <li>Reze o <strong>Creio</strong> no primeiro grande grão.</li>
                        <li>
                            Em seguida, reze um <strong>Pai Nosso</strong>, três{" "}
                            <strong>Ave-Marias</strong> (pedindo fé, esperança e caridade) e
                            um <strong>Glória</strong>.
                        </li>
                        <li>
                            Anuncie o primeiro mistério correspondente ao dia e reze um{" "}
                            <strong>Pai Nosso</strong>.
                        </li>
                        <li>
                            Reze <strong>dez Ave-Marias</strong>, meditando o mistério
                            anunciado, e conclua com um <strong>Glória</strong>.
                        </li>
                        <li>
                            Repita o mesmo para os <strong>cinco mistérios</strong> (Pai
                            Nosso + dez Ave-Marias + Glória em cada dezena).
                        </li>
                        <li>
                            Ao final, reze a <strong>Salve Rainha</strong> e, se desejar,
                            outras orações de devoção, como a oração de São Miguel Arcanjo ou
                            um oferecimento.
                        </li>
                    </ol>
                </section>

                {/* Seção 3 */}
                {/* Mistérios do Rosário */}
                <section id="misterios" aria-labelledby="misterios-rosario">
                    <h2
                        id="misterios-rosario"
                        className="text-2xl font-bold mb-3 text-amber-800"
                    >
                        Mistérios do Rosário
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">

                        <div className="flex flex-col items-center">
                            <Sun size={36} className="text-amber-600" />
                            <p className="font-semibold mt-2">Gozosos</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <HeartCrack size={36} className="text-red-600" />
                            <p className="font-semibold mt-2">Dolorosos</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Sparkles size={36} className="text-emerald-600" />
                            <p className="font-semibold mt-2">Gloriosos</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Lightbulb size={36} className="text-blue-600" />
                            <p className="font-semibold mt-2">Luminosos</p>
                        </div>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Gozosos */}
                        <article className="bg-amber-50 border border-amber-100 rounded-xl p-4 shadow-sm">
                            <h3 className="font-semibold text-amber-800 mb-2">
                                Mistérios Gozosos (Alegria)
                            </h3>
                            <ol className="list-decimal list-inside text-gray-800 text-sm space-y-1">
                                <li>Anunciação do Anjo a Maria</li>
                                <li>Visitação de Maria a Isabel</li>
                                <li>Nascimento de Jesus em Belém</li>
                                <li>Apresentação de Jesus no Templo</li>
                                <li>Perda e reencontro de Jesus no Templo</li>
                            </ol>
                        </article>

                        {/* Luminosos */}
                        <article className="bg-amber-50 border border-amber-100 rounded-xl p-4 shadow-sm">
                            <h3 className="font-semibold text-amber-800 mb-2">
                                Mistérios Luminosos (Luz)
                            </h3>
                            <ol className="list-decimal list-inside text-gray-800 text-sm space-y-1">
                                <li>Batismo de Jesus no Jordão</li>
                                <li>Milagre nas Bodas de Caná</li>
                                <li>Anúncio do Reino de Deus</li>
                                <li>Transfiguração de Jesus</li>
                                <li>Instituição da Eucaristia</li>
                            </ol>
                        </article>

                        {/* Dolorosos */}
                        <article className="bg-amber-50 border border-amber-100 rounded-xl p-4 shadow-sm">
                            <h3 className="font-semibold text-amber-800 mb-2">
                                Mistérios Dolorosos (Paixão)
                            </h3>
                            <ol className="list-decimal list-inside text-gray-800 text-sm space-y-1">
                                <li>Agonia de Jesus no Horto</li>
                                <li>Flagelação de Jesus</li>
                                <li>Coroação de espinhos</li>
                                <li>Jesus carrega a cruz</li>
                                <li>Crucifixão e morte de Jesus</li>
                            </ol>
                        </article>

                        {/* Gloriosos */}
                        <article className="bg-amber-50 border border-amber-100 rounded-xl p-4 shadow-sm">
                            <h3 className="font-semibold text-amber-800 mb-2">
                                Mistérios Gloriosos (Glória)
                            </h3>
                            <ol className="list-decimal list-inside text-gray-800 text-sm space-y-1">
                                <li>Ressurreição de Jesus</li>
                                <li>Ascensão de Jesus ao Céu</li>
                                <li>Vinda do Espírito Santo</li>
                                <li>Assunção de Nossa Senhora</li>
                                <li>Coroação de Maria no Céu</li>
                            </ol>
                        </article>
                    </div>
                </section>

                {/* Seção 4 */}
                {/* Dias da semana */}
                <section id="dias-da-semana" aria-labelledby="dias-da-semana">
                    <h2 id="dias-misterios" className="text-2xl font-bold mb-3 text-amber-800">
                        Dias da semana de cada mistério
                    </h2>

                    <div className="grid gap-3 text-sm md:text-base text-gray-800">

                        <p>
                            <strong>Segunda-feira:</strong> Mistérios Gozosos
                        </p>

                        <p>
                            <strong>Terça-feira:</strong> Mistérios Dolorosos
                        </p>

                        <p>
                            <strong>Quarta-feira:</strong> Mistérios Gloriosos
                        </p>

                        <p>
                            <strong>Quinta-feira:</strong> Mistérios Luminosos
                        </p>

                        <p>
                            <strong>Sexta-feira:</strong> Mistérios Dolorosos
                        </p>

                        <p>
                            <strong>Sábado:</strong> Mistérios Gozosos
                        </p>

                        <p>
                            <strong>Domingo:</strong> Mistérios Gloriosos
                            <span className="text-gray-600">
                                {" "} (ou conforme o tempo litúrgico)
                            </span>
                        </p>

                    </div>
                </section>

                {/* Seção 5 */}
                {/* Orações básicas */}
                <section id="oracoes" aria-labelledby="oracoes-basicas">
                    <h2
                        id="oracoes-basicas"
                        className="text-2xl font-bold mb-3 text-amber-800"
                    >
                        Orações do Rosário
                    </h2>

                    <article className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Sinal da Cruz</h3>
                            <p>
                                Em nome do Pai, e do Filho, e do Espírito Santo. Amém.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Creio</h3>
                            <p>
                                Creio em Deus Pai todo-poderoso, criador do céu e da terra;
                                e em Jesus Cristo, seu único Filho, nosso Senhor; que foi
                                concebido pelo poder do Espírito Santo; nasceu da Virgem
                                Maria; padeceu sob Pôncio Pilatos; foi crucificado, morto e
                                sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro
                                dia; subiu aos céus; está sentado à direita de Deus Pai
                                todo-poderoso, donde há de vir a julgar os vivos e os mortos.
                                Creio no Espírito Santo; na Santa Igreja Católica; na comunhão
                                dos santos; na remissão dos pecados; na ressurreição da carne;
                                na vida eterna. Amém.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Pai Nosso</h3>
                            <p>
                                Pai nosso, que estais nos céus, santificado seja o vosso nome;
                                venha a nós o vosso reino; seja feita a vossa vontade, assim
                                na terra como no céu. O pão nosso de cada dia nos dai hoje;
                                perdoai-nos as nossas ofensas, assim como nós perdoamos a quem
                                nos tem ofendido; e não nos deixeis cair em tentação, mas
                                livrai-nos do mal. Amém.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Ave Maria</h3>
                            <p>
                                Ave Maria, cheia de graça, o Senhor é convosco; bendita sois
                                vós entre as mulheres, e bendito é o fruto do vosso ventre,
                                Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores,
                                agora e na hora de nossa morte. Amém.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Glória</h3>
                            <p>
                                Glória ao Pai, ao Filho e ao Espírito Santo. Como era no
                                princípio, agora e sempre. Amém.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">Salve Rainha</h3>
                            <p>
                                Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança
                                nossa, salve! A vós bradamos, os degredados filhos de Eva; a
                                vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia,
                                pois, advogada nossa, esses vossos olhos misericordiosos a nós
                                volvei; e, depois deste desterro, mostrai-nos Jesus, bendito
                                fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre
                                Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos
                                dignos das promessas de Cristo. Amém.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-amber-800 mb-1">
                                Oração a São Miguel Arcanjo
                            </h3>
                            <p>
                                São Miguel Arcanjo, defendei-nos no combate; sede o nosso
                                refúgio contra as maldades e ciladas do demônio. Ordene-lhe
                                Deus, instantemente o pedimos; e vós, príncipe da milícia
                                celeste, pela virtude divina, precipitai no inferno a Satanás e
                                a todos os espíritos malignos, que andam pelo mundo para perder
                                as almas. Amém.
                            </p>
                        </div>
                    </article>
                </section>
                {/* CTA — Guia Litúrgico */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 mb-20 text-center"
                >
                    <h2 className="text-2xl font-bold text-amber-800 mb-4">
                        Quer aprofundar ainda mais?
                    </h2>

                    <p className="text-gray-700 max-w-xl mx-auto mb-6">
                        Veja também nosso Guia Litúrgico completo — com explicações simples,
                        claras e organizadas para quem deseja entender cada parte da Santa Missa.
                    </p>

                    <Link
                        href="/guia-liturgico"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 
                   text-black font-semibold px-6 py-3 rounded-xl shadow-md 
                   transition"
                    >
                        Acessar Guia Litúrgico
                        <BookOpen size={20} />
                    </Link>
                </motion.section>
                {/* Botão Flutuante — Voltar ao topo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="
        fixed bottom-6 right-6 z-50 
        bg-amber-600 hover:bg-amber-500 
        text-black p-4 rounded-full shadow-xl 
        transition cursor-pointer
    "
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp size={22} />
                </button>
            </motion.section>
        </main >
    );
}
