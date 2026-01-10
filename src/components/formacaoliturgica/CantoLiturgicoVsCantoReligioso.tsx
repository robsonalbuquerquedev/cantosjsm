"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Church, Heart, Scale, } from "lucide-react";

export default function CantoLiturgicoVsCantoReligioso() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative fade-in-up-30d">

                {/* Faixa decorativa */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                <header className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                        Canto Litúrgico × Canto Religioso
                    </h1>

                    <p className="text-gray-600">
                        Entenda a diferença entre o canto que serve diretamente à ação litúrgica
                        da Igreja e o canto voltado à devoção religiosa.
                    </p>
                </header>

                <section className="space-y-5 mb-10">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Church className="w-6 h-6 text-amber-800" />
                        <h2 className="text-2xl font-semibold text-amber-800">
                            O que é o Canto Litúrgico?
                        </h2>
                    </div>

                    <p>
                        O canto litúrgico nasce da própria Liturgia e existe para servi-la. Ele não é
                        apenas um momento musical inserido na Missa, nem um recurso para &rdquo;embelezar&rdquo;
                        a celebração. Pelo contrário, o canto litúrgico faz parte do rito e participa
                        ativamente da ação celebrativa, ajudando a expressar, por meio da música, aquilo
                        que a Igreja está celebrando em cada momento específico.
                    </p>

                    <p>
                        Por isso, seu texto, sua melodia e seu ritmo não são escolhidos ao acaso. Tudo
                        no canto litúrgico está profundamente ligado ao tempo litúrgico, à parte da
                        Missa em que ele é executado e ao sentido espiritual daquele rito. Quando a
                        assembleia canta unida, não está apenas cantando &rdquo;sobre Deus&rdquo;, mas rezando
                        com a própria voz, tornando audível a fé da Igreja reunida.
                    </p>

                    <p>
                        Diferente de outras formas de música religiosa, o canto litúrgico tem como
                        finalidade principal favorecer a participação ativa de todos os fiéis,
                        ajudando a assembleia a rezar como Corpo de Cristo. Ele conduz o coração,
                        educa a escuta e cria um ambiente de oração que envolve toda a celebração,
                        fazendo com que a Missa seja vivida não como um espetáculo, mas como um
                        verdadeiro encontro com Deus.
                    </p>
                </section>

                <section className="space-y-5 mb-12">
                    <h3 className="text-xl font-semibold text-amber-800">
                        Um exemplo concreto de Canto Litúrgico na Missa
                    </h3>

                    <p>
                        Para compreender verdadeiramente o que é o canto litúrgico, nada substitui
                        a experiência concreta vivida dentro da celebração. Mais do que uma explicação
                        teórica, é no contexto real da Missa que o canto revela sua função: acompanhar
                        o rito, favorecer a oração da assembleia e ajudar todos a viverem aquele momento
                        específico da Liturgia com profundidade e unidade.
                    </p>

                    <p>
                        No vídeo abaixo, vemos um exemplo autêntico de canto litúrgico durante o momento
                        do ofertório da Missa. Executado pela JSM na Catedral de Palmares, em Pernambuco,
                        o canto <strong>&rdquo;Sobe a Jerusalém&rdquo;</strong> não aparece como uma apresentação musical,
                        mas como parte integrante da ação litúrgica. A melodia, o texto e o clima orante
                        acompanham o gesto da oferta, ajudando a assembleia a rezar enquanto o pão e o
                        vinho são levados ao altar.
                    </p>

                    <p>
                        Observar esse exemplo ajuda a perceber que o canto litúrgico não busca aplausos,
                        destaque pessoal ou emoção isolada. Seu objetivo é conduzir o coração da
                        comunidade ao mistério celebrado, respeitando o tempo litúrgico, o momento do
                        rito e a participação de todos. Ao assistir, vale prestar atenção não apenas
                        na música, mas na relação entre o canto, o altar, os gestos do sacerdote e a
                        atitude orante da assembleia.
                    </p>

                    {/* Vídeo – Exemplo real de Canto Litúrgico */}
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-amber-100">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                            poster="/images/thumb-sobe-jerusalem.png"
                        >
                            <source
                                src="/videos/sobe-a-jerusalem-ofertorio.mp4"
                                type="video/mp4"
                            />
                            Seu navegador não suporta a reprodução de vídeo.
                        </video>
                    </div>
                </section>

                <section className="space-y-5 mb-10">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Heart className="w-6 h-6 text-amber-800" />
                        <h2 className="text-2xl font-semibold text-amber-800">
                            O que é o Canto Religioso?
                        </h2>
                    </div>

                    <p>
                        O canto religioso é uma expressão legítima e profunda da fé pessoal e comunitária.
                        Ele nasce da experiência individual com Deus, da devoção, dos sentimentos e da
                        vivência espiritual de cada pessoa ou grupo. Por meio dele, o cristão manifesta
                        alegria, confiança, gratidão, entrega e até mesmo suas fragilidades diante do
                        Senhor, usando a música como linguagem do coração.
                    </p>

                    <p>
                        Diferente do canto litúrgico, o canto religioso não está diretamente ligado à
                        estrutura ritual da Missa. Por isso, ele encontra seu espaço natural em encontros
                        de oração, retiros espirituais, momentos de adoração, novenas, grupos de jovens,
                        formações, missões e ações evangelizadoras. Nessas ocasiões, a música ajuda a criar
                        um ambiente fraterno, acolhedor e espontâneo, favorecendo a proximidade entre as
                        pessoas e fortalecendo a vivência comunitária da fé.
                    </p>

                    <p>
                        Isso não diminui sua importância. Pelo contrário, o canto religioso desempenha um
                        papel fundamental na caminhada cristã, pois ajuda a alimentar a espiritualidade
                        diária, fortalece vínculos, anima a missão e desperta o desejo de seguir Jesus com
                        mais entusiasmo. O essencial é compreender que cada tipo de canto tem seu lugar
                        próprio, sua função e seu contexto adequado dentro da vida da Igreja.
                    </p>
                </section>

                <section className="space-y-5 mb-12">
                    <h3 className="text-xl font-semibold text-amber-800">
                        Um exemplo concreto de Canto Religioso
                    </h3>

                    <p>
                        Para entender melhor o canto religioso, é importante observá-lo em seu ambiente
                        próprio, marcado pela fraternidade, pela espontaneidade e pela partilha da fé.
                        Diferente da Missa, esses momentos não seguem um rito fixo, permitindo que a
                        música acompanhe a alegria do encontro, a convivência e a experiência comunitária.
                    </p>

                    <p>
                        No vídeo abaixo, a JSM aparece em um momento de descontração e fraternidade no
                        Centro de Treinamento, em Palmares – Pernambuco. A canção <strong>&rdquo;A Escolhida&rdquo;</strong> é cantada em um ambiente acolhedor, com a presença de diversas congregações
                        religiosas, expressando de forma simples e alegre a vivência da fé
                        fora da ação litúrgica. Esse é um exemplo claro de como o canto religioso fortalece
                        laços, anima o espírito e cria comunhão.
                    </p>

                    {/* Vídeo */}
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-md border border-amber-100">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                            poster="/images/thumb-a-escolhida.png"
                        >
                            <source
                                src="/videos/a-escolhida-ct-palmares.mp4"
                                type="video/mp4"
                            />
                            Seu navegador não suporta a reprodução de vídeo.
                        </video>
                    </div>
                </section>

                <section className="space-y-6 mb-12">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Scale className="w-6 h-6 text-amber-800" />
                        <h2 className="text-2xl font-semibold text-amber-800">
                            Principais diferenças entre o Canto Litúrgico e o Canto Religioso
                        </h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Compreender as diferenças entre o canto litúrgico e o canto religioso é essencial
                        para uma participação mais consciente e madura na vida da Igreja. Muitas dúvidas
                        e conflitos pastorais surgem justamente porque essas duas realidades são confundidas,
                        como se fossem a mesma coisa. No entanto, embora ambas expressem a fé cristã e tenham
                        grande valor espiritual, cada uma possui finalidade, linguagem e contexto próprios.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        O canto litúrgico está diretamente ligado à ação ritual da Missa. Ele serve ao rito,
                        acompanha momentos específicos da celebração e ajuda toda a assembleia a rezar como
                        Igreja. Já o canto religioso nasce da experiência pessoal ou comunitária de fé e
                        encontra seu espaço fora da ação litúrgica, em encontros, retiros, momentos fraternos
                        e iniciativas de evangelização. Quando essa distinção é respeitada, a Liturgia se
                        torna mais fiel à sua natureza e a vivência espiritual dos fiéis se enriquece.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        A tabela abaixo ajuda a visualizar de forma simples e objetiva essas diferenças,
                        deixando claro que não se trata de dizer que um canto é &rdquo;melhor&rdquo; que o outro, mas
                        de reconhecer que cada um tem seu lugar adequado. Esse discernimento evita abusos,
                        favorece a unidade da assembleia e contribui para celebrações mais profundas,
                        organizadas e verdadeiramente orantes.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg text-left">
                            <thead className="bg-amber-100">
                                <tr>
                                    <th className="p-3 font-semibold text-amber-700">
                                        Canto Litúrgico
                                    </th>
                                    <th className="p-3 font-semibold text-amber-700">
                                        Canto Religioso
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3">
                                        Serve diretamente ao rito litúrgico e à ação celebrativa da Missa
                                    </td>
                                    <td className="p-3">
                                        Serve à devoção pessoal, à espiritualidade e à expressão livre da fé
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">
                                        Está integrado à estrutura da Missa e aos seus momentos específicos
                                    </td>
                                    <td className="p-3">
                                        É usado fora da liturgia, em encontros, retiros e momentos de oração
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">
                                        Possui caráter comunitário, objetivo e eclesial
                                    </td>
                                    <td className="p-3">
                                        Possui caráter mais subjetivo, afetivo e emocional
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">
                                        Segue textos, tempos e momentos próprios do rito litúrgico
                                    </td>
                                    <td className="p-3">
                                        Trabalha temas livres, ligados à experiência pessoal de fé
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <footer className="mt-12 space-y-5">
                    <p>
                        O canto litúrgico e o canto religioso possuem grande valor na vida da Igreja,
                        cada um à sua maneira e em seu contexto próprio. Quando compreendemos essa
                        diferença, deixamos de fazer comparações inadequadas e passamos a enxergar a
                        riqueza de cada expressão musical como um dom colocado a serviço da fé. A
                        Liturgia ganha mais profundidade quando é respeitada em sua linguagem própria,
                        e a vivência espiritual cotidiana se fortalece quando encontra espaços livres
                        para a expressão pessoal e comunitária da fé.
                    </p>

                    <p>
                        Conhecer a finalidade de cada tipo de canto ajuda equipes de música, agentes de
                        pastoral e toda a assembleia a fazer escolhas mais conscientes e coerentes,
                        evitando improvisações que empobrecem a celebração. Quando cada canto ocupa o
                        seu lugar correto, a Missa se torna mais orante, mais participativa e mais fiel
                        ao mistério que celebra, conduzindo os fiéis a um encontro verdadeiro com Deus
                        e com a comunidade reunida.
                    </p>

                    <p>
                        A Liturgia é um grande caminho pedagógico da fé, no qual gestos, símbolos,
                        palavras e cantos caminham juntos para formar o coração cristão. Se você deseja
                        continuar aprofundando esse itinerário e compreender como a Igreja celebra os
                        mistérios da fé ao longo do ano, vale a pena conhecer também o artigo sobre o
                        significado do{" "}
                        <Link
                            href="/formacao-liturgica/dia-de-reis"
                            className="text-amber-700 font-medium hover:underline"
                        >
                            Dia de Reis
                        </Link>
                        , que ajuda a perceber como a música, os símbolos e a Liturgia se unem para
                        anunciar Cristo ao mundo.
                    </p>
                </footer>
            </motion.article>
        </section>
    );
}
