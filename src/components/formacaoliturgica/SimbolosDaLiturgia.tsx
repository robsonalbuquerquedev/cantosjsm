"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Hand, Palette, Church, } from "lucide-react";

export default function SimbolosDaLiturgia() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <motion.article initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative fade-in-up-30d">

                {/* Faixa decorativa */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                {/* Título */}
                <header className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                        Símbolos da Liturgia
                    </h1>
                    <p className="text-gray-600">
                        Descubra o significado dos objetos, cores e sinais usados nas celebrações litúrgicas
                        e aprenda como eles ajudam a Igreja a rezar com o corpo, os sentidos e o coração.
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
                    <p className="">
                        A Liturgia da Igreja fala muito além das palavras. Ela se comunica por meio
                        de sinais visíveis que ajudam os fiéis a compreender e viver o mistério da fé.
                        Cada objeto, cada cor e cada gesto presente na celebração possui um significado
                        profundo, pensado para conduzir o coração à oração e ao encontro com Deus.
                    </p>

                    <p className="mt-4">
                        Conhecer os símbolos da Liturgia é aprender a &rdquo;ler&rdquo; a celebração com mais atenção
                        e participação. Quando entendemos o que eles representam, a Missa deixa de ser
                        apenas algo que assistimos e passa a ser uma experiência vivida com o corpo,
                        os sentidos e a alma, fortalecendo nossa fé e nossa comunhão com a Igreja.
                    </p>
                </motion.section>

                {/* Objetos Litúrgicos */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Church className="text-amber-800" />
                        <h2 className="text-xl font-semibold text-amber-800">
                            Objetos Litúrgicos
                        </h2>
                    </div>

                    <p className="mb-4">
                        Os objetos usados na Liturgia não são simples elementos decorativos.
                        Eles fazem parte da linguagem simbólica da Igreja e ajudam os fiéis
                        a compreender, com os olhos e o coração, o mistério que está sendo celebrado.
                        Cada objeto litúrgico possui um significado espiritual profundo e está
                        diretamente ligado à fé cristã e à presença real de Cristo na celebração.
                    </p>

                    <p className="mb-6">
                        Ao conhecer melhor esses objetos, o fiel passa a participar da Missa
                        de forma mais consciente e ativa. O altar, o cálice e as velas, por exemplo,
                        não estão ali por acaso: eles expressam visualmente aquilo que a Igreja crê
                        e celebra desde os primeiros séculos do cristianismo.
                    </p>

                    {/* Galeria de Objetos */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        <figure className="text-center">
                            <Image
                                src="/images/altar.png"
                                alt="Altar litúrgico, centro da celebração e símbolo de Cristo"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-sm mb-3 mx-auto"
                            />
                            <figcaption className="text-sm text-gray-600">
                                <strong>Altar:</strong> representa o próprio Cristo e é o centro da celebração eucarística.
                            </figcaption>
                        </figure>

                        <figure className="text-center">
                            <Image
                                src="/images/calice.png"
                                alt="Cálice litúrgico utilizado na Eucaristia"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-sm mb-3 mx-auto"
                            />
                            <figcaption className="text-sm text-gray-600">
                                <strong>Cálice:</strong> recebe o vinho que se torna o Sangue de Cristo durante a Eucaristia.
                            </figcaption>
                        </figure>

                        <figure className="text-center">
                            <Image
                                src="/images/velas.png"
                                alt="Velas acesas na celebração litúrgica"
                                width={300}
                                height={300}
                                className="rounded-xl shadow-sm mb-3 mx-auto"
                            />
                            <figcaption className="text-sm text-gray-600">
                                <strong>Velas:</strong> simbolizam Cristo, a luz do mundo, que ilumina toda a humanidade.
                            </figcaption>
                        </figure>

                    </div>
                </section>

                {/* Cores Litúrgicas */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Palette className="text-amber-800" />
                        <h2 className="text-xl font-semibold text-amber-800">
                            Cores Litúrgicas
                        </h2>
                    </div>

                    <p className="mb-4">
                        As cores litúrgicas são uma forma simples e profunda de a Igreja ensinar e
                        conduzir os fiéis ao longo do Ano Litúrgico. Elas ajudam a criar o clima
                        espiritual de cada celebração e permitem que, mesmo sem muitas palavras,
                        o fiel compreenda se está vivendo um tempo de alegria, de espera,
                        de conversão ou de festa.
                    </p>

                    <p className="mb-6">
                        Cada cor utilizada na Liturgia possui um significado próprio e está ligada
                        a momentos específicos da vida da Igreja. Ao observar as vestes do sacerdote
                        e a ornamentação do altar, o fiel é convidado a entrar em sintonia com o
                        mistério celebrado, rezando também com os olhos e com a sensibilidade.
                    </p>

                    {/* Grade de Cores */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Branco */}
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="h-3 w-full bg-gray-100 rounded-full mb-3">
                                <div className="h-3 bg-white rounded-full border"></div>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Branco</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                O branco é a cor da alegria, da luz e da ressurreição. É utilizado nas
                                grandes festas do Senhor, como o Natal e a Páscoa, e também nas celebrações
                                de santos que não foram mártires, expressando pureza e vitória da vida
                                sobre a morte.
                            </p>
                        </div>

                        {/* Verde */}
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="h-3 w-full bg-green-500 rounded-full mb-3"></div>
                            <h3 className="font-semibold text-gray-800 mb-2">Verde</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                O verde simboliza a esperança e o crescimento espiritual. Ele aparece no
                                Tempo Comum, lembrando que a fé precisa ser cultivada todos os dias,
                                como uma planta que cresce lentamente, mas de forma constante.
                            </p>
                        </div>

                        {/* Roxo */}
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="h-3 w-full bg-purple-600 rounded-full mb-3"></div>
                            <h3 className="font-semibold text-gray-800 mb-2">Roxo</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                O roxo é a cor da preparação, da conversão e do silêncio interior.
                                Utilizado no Advento e na Quaresma, ele convida o fiel à reflexão,
                                ao arrependimento e à espera confiante pela vinda do Senhor.
                            </p>
                        </div>

                        {/* Vermelho */}
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="h-3 w-full bg-red-600 rounded-full mb-3"></div>
                            <h3 className="font-semibold text-gray-800 mb-2">Vermelho</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                O vermelho recorda o fogo do Espírito Santo e o sangue dos mártires.
                                É usado nas celebrações de Pentecostes, na Paixão do Senhor e nas festas
                                dos santos que deram a vida por amor a Cristo.
                            </p>
                        </div>

                        {/* Rosa */}
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="h-3 w-full bg-pink-400 rounded-full mb-3"></div>
                            <h3 className="font-semibold text-gray-800 mb-2">Rosa</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                O rosa aparece em momentos especiais do Advento e da Quaresma,
                                lembrando que a alegria já se aproxima, mesmo em tempos de espera
                                e penitência.
                            </p>
                        </div>

                        {/* Preto */}
                        <div className="bg-white border rounded-2xl p-5 shadow-sm">
                            <div className="h-3 w-full bg-black rounded-full mb-3"></div>
                            <h3 className="font-semibold text-gray-800 mb-2">Preto</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                O preto é sinal de luto e oração pelos falecidos. Seu uso recorda a
                                seriedade da morte cristã, vivida à luz da esperança na ressurreição.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Sinais e Gestos */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Hand className="text-amber-800" />
                        <h2 className="text-xl font-semibold text-amber-800">
                            Sinais e Gestos
                        </h2>
                    </div>

                    <p className="mb-4">
                        Na Liturgia, não é apenas a voz que reza, mas também o corpo inteiro.
                        A Igreja ensina que os gestos litúrgicos possuem um valor espiritual profundo,
                        pois ajudam o fiel a expressar exteriormente aquilo que acredita interiormente.
                        Ao fazer o sinal da cruz, ajoelhar-se, levantar-se ou inclinar a cabeça,
                        o cristão participa da celebração de forma mais consciente, ativa e verdadeira.
                    </p>

                    <p className="mb-4">
                        Esses sinais não são movimentos automáticos ou simples formalidades.
                        Eles educam a fé, criam unidade entre os fiéis e ajudam a assembleia
                        a viver a Missa como um único corpo em oração. Quando todos realizam
                        os mesmos gestos no mesmo momento, a Liturgia se torna uma experiência
                        comunitária, onde cada pessoa reza junto com a Igreja inteira.
                    </p>

                    <p>
                        Compreender o significado dos gestos da Missa transforma completamente
                        a participação na celebração. Aquilo que antes era feito por hábito
                        passa a ser vivido com sentido e profundidade. Por isso, este tema
                        merece um olhar ainda mais atento e detalhado, que você pode encontrar
                        no artigo específico sobre os
                        <Link
                            href="/formacao-liturgica/gestos-da-missa"
                            className="text-amber-700 font-medium hover:underline ml-1"
                        >
                            gestos da Missa
                        </Link>,
                        onde cada sinal é explicado com calma, clareza e riqueza espiritual.
                    </p>
                </section>
            </motion.article>
        </section>
    );
}
