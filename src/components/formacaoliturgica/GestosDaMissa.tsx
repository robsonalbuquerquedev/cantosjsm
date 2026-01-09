"use client";

import Link from "next/link";
import Image from "next/image";
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
                    className="space-y-4"
                >
                    <p>
                        Na Missa, não rezamos apenas com palavras. A Liturgia envolve a pessoa
                        por inteiro, incluindo o corpo, os sentidos e a atenção interior.
                        Cada gesto, postura e atitude corporal possui um significado e expressa
                        aquilo que a Igreja acredita e celebra. Ao longo da história, esses sinais
                        foram sendo transmitidos para ajudar os fiéis a viver a fé de forma
                        concreta e participativa.
                    </p>

                    <p>
                        Quando participamos da celebração com atenção aos gestos litúrgicos,
                        a Missa deixa de ser apenas algo externo ou repetitivo e se transforma
                        em um verdadeiro encontro com Deus. Entender o sentido de cada gesto
                        ajuda o fiel a rezar com mais consciência, a se unir à assembleia e
                        a viver a Liturgia não como espectador, mas como participante ativo
                        do mistério celebrado.
                    </p>
                </motion.section>

                {/* O corpo que reza */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-3 flex items-center gap-2">
                        <PersonStanding size={20} /> O corpo também reza
                    </h2>

                    <p className="mb-4">
                        A Liturgia envolve a pessoa por completo. Corpo, mente e coração não rezam
                        separadamente, mas formam uma única oração oferecida a Deus. Por isso,
                        na celebração da Missa, os gestos e as posturas corporais não são detalhes
                        secundários ou simples formalidades, mas fazem parte essencial da forma
                        como a Igreja reza e expressa sua fé.
                    </p>

                    <p className="mb-4">
                        Quando o fiel se levanta, se ajoelha, faz o sinal da cruz ou inclina a cabeça,
                        o corpo acompanha aquilo que o coração acredita. Esses gestos ajudam a
                        interiorizar a oração, educam a fé e favorecem uma participação mais
                        consciente e respeitosa. A repetição desses sinais ao longo das celebrações
                        cria um verdadeiro aprendizado espiritual, onde o corpo também aprende
                        a rezar.
                    </p>

                    <p>
                        Compreender que o corpo faz parte da oração transforma a maneira de viver
                        a Liturgia. A Missa deixa de ser apenas algo que se assiste e passa a ser
                        uma experiência vivida com atenção, reverência e entrega. Assim, cada gesto
                        se torna um meio concreto de encontro com Deus e de comunhão com toda
                        a assembleia reunida.
                    </p>
                </section>

                {/* Posturas */}
                <section className="mb-10 space-y-6">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2">
                        Principais gestos e posturas na Liturgia
                    </h2>

                    <p>
                        Na celebração litúrgica, o corpo não é um simples espectador, mas um verdadeiro
                        participante da oração. As posturas assumidas durante a Missa ajudam os fiéis
                        a entrar mais profundamente no mistério celebrado, educando o coração e a mente
                        para uma participação mais consciente, ativa e frutuosa. Ao longo dos séculos,
                        a Igreja reconheceu que esses gestos falam uma linguagem universal, capaz de
                        expressar fé, respeito, escuta e adoração sem a necessidade de palavras.
                    </p>

                    <p>
                        Cada postura corporal possui um significado espiritual próprio e está ligada a
                        momentos específicos da celebração. Quando compreendemos esses significados,
                        deixamos de apenas repetir movimentos e passamos a vivê-los como verdadeiros
                        atos de oração. Assim, o gesto externo se transforma em experiência interior,
                        fortalecendo o vínculo com Deus e com a comunidade reunida.
                    </p>

                    <ul className="list-disc list-inside space-y-6 text-gray-700">
                        <li>
                            <strong>Em pé:</strong> é a postura da ressurreição, da prontidão e do respeito.
                            Permanecer em pé durante o Evangelho e as principais orações expressa atenção,
                            disponibilidade e abertura à Palavra de Deus.
                            <div className="mt-3">
                                <Image
                                    src="/images/empe.png"
                                    alt="Fiéis em pé durante a celebração litúrgica"
                                    width={800}
                                    height={450}
                                    className="rounded-xl shadow-sm"
                                />
                            </div>
                        </li>

                        <li>
                            <strong>Sentado:</strong> representa a atitude de escuta serena e acolhedora.
                            Ao sentar-se para ouvir as leituras e a homilia, o fiel assume a postura do
                            discípulo que aprende, reflete e permite que a Palavra transforme o coração.
                            <div className="mt-3">
                                <Image
                                    src="/images/sentado.jpg"
                                    alt="Fiéis sentados ouvindo a Palavra de Deus"
                                    width={800}
                                    height={450}
                                    className="rounded-xl shadow-sm"
                                />
                            </div>
                        </li>

                        <li>
                            <strong>Ajoelhado:</strong> é um dos gestos mais expressivos da tradição cristã,
                            simbolizando adoração, humildade e reconhecimento da presença real de Deus.
                            Especialmente na Eucaristia, ajoelhar-se é uma profissão silenciosa de fé.
                            <div className="mt-3">
                                <Image
                                    src="/images/ajoelhado.jpg"
                                    alt="Fiéis ajoelhados em adoração eucarística"
                                    width={800}
                                    height={450}
                                    className="rounded-xl shadow-sm"
                                />
                            </div>
                        </li>

                        <li>
                            <strong>Sinal da Cruz:</strong> é o gesto que marca o início e o fim das
                            celebrações e orações. Ao traçar a cruz sobre o próprio corpo, o cristão
                            recorda a Trindade e renova sua identidade batismal.
                            <div className="mt-3">
                                <Image
                                    src="/images/sinaldacruz.jpg"
                                    alt="Sinal da Cruz durante a liturgia"
                                    width={800}
                                    height={450}
                                    className="rounded-xl shadow-sm"
                                />
                            </div>
                        </li>

                        <li>
                            <strong>Inclinação:</strong> mesmo sendo um gesto simples e discreto, possui
                            profundo valor espiritual. A inclinação do corpo expressa reverência, respeito
                            e amor diante de Deus, do altar ou do nome de Jesus. É um gesto silencioso que
                            ensina humildade e interioridade, mesmo sem qualquer representação visual.
                        </li>
                    </ul>
                </section>

                {/* Silêncio */}
                <section className="mb-10 space-y-6">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <Ear size={20} /> A importância do silêncio na Liturgia
                    </h2>

                    <p>
                        O silêncio na Missa não é ausência de som, nem um simples intervalo entre uma
                        oração e outra. Ele é um espaço sagrado, cuidadosamente previsto pela liturgia,
                        para que o coração do fiel possa escutar aquilo que Deus deseja comunicar.
                        Em um mundo marcado pelo excesso de ruídos, informações e distrações, o
                        silêncio litúrgico se torna um verdadeiro convite à interioridade, ajudando
                        cada pessoa a sair da superficialidade e a entrar em um diálogo profundo com
                        o Senhor.
                    </p>

                    <p>
                        Após a proclamação da Palavra, durante a oração pessoal ou depois da Comunhão,
                        o silêncio permite que aquilo que foi ouvido não permaneça apenas na mente,
                        mas desça até o coração. É nesse recolhimento que a Palavra de Deus cria raízes,
                        ilumina a vida concreta e provoca conversão. Sem esse tempo de pausa interior,
                        a Missa corre o risco de ser percebida apenas como uma sequência de textos e
                        ritos, perdendo sua força transformadora.
                    </p>

                    <p>
                        Quando o silêncio é vivido com consciência, ele se torna um verdadeiro ato de
                        fé. O fiel aprende a escutar mais do que falar, a acolher mais do que pedir,
                        e a reconhecer que Deus também se manifesta na quietude. Assim, o silêncio não
                        empobrece a celebração, mas a completa, tornando a Missa um encontro real,
                        pessoal e profundo com o próprio Deus.
                    </p>
                </section>

                {/* Atitude interior */}
                <section className="mb-10 space-y-6">
                    <h2 className="text-2xl font-semibold text-amber-800 mb-2 flex items-center gap-2">
                        <HandHeart size={20} /> Gestos exteriores e atitude interior
                    </h2>

                    <p>
                        Na Liturgia, os gestos exteriores nunca são um fim em si mesmos. Eles só alcançam
                        seu verdadeiro sentido quando nascem de uma atitude interior autêntica, marcada
                        pela fé, pela escuta e pelo desejo sincero de encontro com Deus. Levantar-se,
                        ajoelhar-se, fazer o sinal da cruz ou cantar não são simples movimentos do corpo,
                        mas expressões visíveis de uma realidade invisível que acontece no coração do fiel.
                        Quando essa unidade se rompe, corre-se o risco de transformar a celebração em um
                        conjunto de ações automáticas, vazias de significado espiritual.
                    </p>

                    <p>
                        Participar bem da Missa, portanto, não depende apenas de &rdquo;fazer corretamente&rdquo;
                        os gestos, mas de unir aquilo que se faz com aquilo que se acredita e se vive.
                        A Liturgia educa o cristão exatamente nesse caminho: ajuda a alinhar corpo,
                        mente e coração em uma única oração. Quando os gestos são acompanhados por uma
                        atitude interior sincera, eles se tornam verdadeiros instrumentos de encontro
                        com Deus e de comunhão com a assembleia reunida.
                    </p>

                    <p>
                        Essa harmonia entre exterior e interior também se manifesta de modo muito claro
                        no canto litúrgico. Cantar na Missa não é apenas preencher o silêncio ou embelezar
                        a celebração, mas rezar com a voz aquilo que o coração acredita. Para aprofundar
                        ainda mais esse tema e compreender melhor essa diferença essencial, vale a pena
                        ler o artigo sobre{" "}
                        <Link
                            href="/formacao-liturgica/canto-liturgico-vs-canto-religioso"
                            className="text-amber-700 font-medium hover:underline"
                        >
                            canto litúrgico e canto religioso
                        </Link>
                        , que aprofunda como a atitude interior transforma o canto em verdadeira oração.
                    </p>
                </section>
            </motion.article>
        </section>
    );
}
