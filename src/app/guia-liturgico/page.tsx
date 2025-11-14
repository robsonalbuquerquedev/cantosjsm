"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, Music2, Sparkles, Info } from "lucide-react";

export default function GuiaLiturgicoPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho da página */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl w-full text-center mb-10 text-white drop-shadow"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/40 rounded-full mb-4">
                    <BookOpenCheck size={22} className="text-amber-300" />
                    <span className="text-sm uppercase tracking-wide">
                        Guia Litúrgico para Cantos da Missa
                    </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
                    Entendendo os Cantos da Missa
                </h1>
                <p className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto">
                    Este guia foi preparado para ajudar ministérios de música, grupos de jovens
                    e comunidades a compreender melhor a função de cada canto na celebração
                    e escolher músicas com mais consciência litúrgica.
                </p>
            </motion.header>

            {/* 📘 Conteúdo principal */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-4xl w-full bg-white text-black rounded-2xl p-8 md:p-10 shadow-xl border-l-4 border-amber-400 space-y-8"
            >
                {/* O que é o Canto de Entrada */}
                <article id="canto-de-entrada" className="space-y-3">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Music2 size={22} className="text-amber-600" />
                        O que é o Canto de Entrada?
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        O Canto de Entrada é o primeiro momento musical da missa. Ele não é apenas
                        “a primeira música”, mas um convite para que a assembleia se una e entre,
                        de fato, na celebração. Acompanha a procissão de entrada e ajuda a comunidade
                        a passar do “cotidiano” para o “mistério” que será celebrado.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Por isso, costuma ser um canto de acolhida, esperança e alegria, que fala
                        de caminhar com Deus, reunir o povo, iniciar a celebração e louvar o Senhor.
                        Não é o momento ideal para cantos muito meditativos ou de adoração profunda:
                        aqui a Igreja está “chegando” e se reunindo.
                    </p>
                </article>

                {/* Quando usar cada canto na missa */}
                <article id="quando-usar" className="space-y-3 pt-4 border-t border-gray-200">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Info size={22} className="text-amber-600" />
                        Quando usar cada canto na missa?
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Cada canto da missa tem um momento próprio e uma função específica.
                        Entender isso ajuda o ministério de música a não escolher “apenas pela
                        beleza”, mas também pela coerência litúrgica.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
                        <li>
                            <strong>Canto de Entrada:</strong> acolhe a assembleia, acompanha a
                            procissão inicial e introduz o tema da celebração.
                        </li>
                        <li>
                            <strong>Ato Penitencial:</strong> ajuda a comunidade a reconhecer sua
                            fragilidade e pedir perdão, preparando o coração para a Palavra e a mesa.
                        </li>
                        <li>
                            <strong>Glória:</strong> é um hino de louvor, dirigido a Deus, rezado
                            ou cantado nos domingos (exceto Quaresma e Advento) e solenidades.
                        </li>
                        <li>
                            <strong>Salmo Responsorial:</strong> é parte da Liturgia da Palavra e
                            deve ser, preferencialmente, cantado, com resposta da assembleia.
                        </li>
                        <li>
                            <strong>Aclamação ao Evangelho:</strong> canto alegre que prepara a
                            comunidade para ouvir o próprio Cristo falando no Evangelho.
                        </li>
                        <li>
                            <strong>Ofertório:</strong> acompanha a preparação das oferendas,
                            falando de entrega, oferta, serviço e gratidão.
                        </li>
                        <li>
                            <strong>Santo:</strong> faz parte do centro da oração eucarística,
                            é um canto de adoração que une Céu e Terra em louvor.
                        </li>
                        <li>
                            <strong>Amém final da Oração Eucarística:</strong> é a resposta forte
                            e convencida da assembleia: “Assim seja!”, confirmando a oração do sacerdote.
                        </li>
                        <li>
                            <strong>Cordeiro de Deus:</strong> acompanha o gesto da fração do pão
                            e prepara para a comunhão.
                        </li>
                        <li>
                            <strong>Canto de Comunhão:</strong> favorece a oração e a unidade durante
                            a fila de comunhão, com clima de intimidade e agradecimento.
                        </li>
                        <li>
                            <strong>Canto Final:</strong> não faz parte estrita do rito, mas é
                            costume em muitas comunidades; pode ser um envio ou um canto mariano.
                        </li>
                    </ul>
                </article>

                {/* Função do Salmo Responsorial */}
                <article id="salmo-responsorial" className="space-y-3 pt-4 border-t border-gray-200">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpenCheck size={22} className="text-amber-600" />
                        Qual a função do Salmo Responsorial?
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        O Salmo Responsorial é parte da Liturgia da Palavra, e não apenas
                        “uma música entre as leituras”. Ele é a resposta orante do povo à
                        primeira leitura, normalmente retirada do Antigo Testamento.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Por isso, é importante que o salmo seja escolhido de acordo com as
                        leituras do dia (Missal ou Lecionário), e que a assembleia participe
                        ativamente por meio do refrão. Melodias simples ajudam o povo a
                        responder com mais segurança e oração.
                    </p>
                </article>

                {/* Diferença entre Aclamação e Ofertório */}
                <article id="aclamacao-ofertorio" className="space-y-3 pt-4 border-t border-gray-200">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Sparkles size={22} className="text-amber-600" />
                        Diferença entre Aclamação e Ofertório
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Embora ambos sejam cantos importantes, a Aclamação ao Evangelho e o
                        Canto de Ofertório têm funções bem diferentes na missa.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        <strong>Aclamação ao Evangelho:</strong> é um canto breve, alegre e
                        dinâmico, que prepara a assembleia para ouvir o Evangelho. Normalmente
                        é um “Aleluia” (exceto na Quaresma, quando se usa outra aclamação).
                        O foco aqui é a Palavra de Cristo que será proclamada.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        <strong>Ofertório:</strong> acontece depois da Oração dos Fiéis, quando
                        se apresentam pão, vinho e ofertas. O canto de ofertório fala de entrega,
                        doação, serviço, gratidão, gesto de oferecer a própria vida com os dons
                        colocados no altar.
                    </p>
                </article>

                {/* Como escolher cantos para cada tempo litúrgico */}
                <article id="tempos-liturgicos" className="space-y-3 pt-4 border-t border-gray-200">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Sparkles size={22} className="text-amber-600" />
                        Como escolher os cantos para cada tempo litúrgico?
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-700 mb-2">
                        A Igreja vive ao longo do ano diferentes tempos litúrgicos, e cada um
                        deles tem um “clima espiritual” próprio. Os cantos devem ajudar a
                        expressar esse clima:
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
                        <li>
                            <strong>Advento:</strong> tempo de espera e preparação. Cantos que falam
                            de esperança, vigilância, promessa de salvação.
                        </li>
                        <li>
                            <strong>Natal:</strong> celebra a encarnação do Filho de Deus. Cantos
                            de alegria, luz, louvor pelo nascimento de Jesus.
                        </li>
                        <li>
                            <strong>Quaresma:</strong> tempo de conversão, sobriedade e misericórdia.
                            Evita-se o “Glória” e cantos muito festivos; preferem-se melodias mais
                            simples e recolhidas.
                        </li>
                        <li>
                            <strong>Páscoa:</strong> centro da fé cristã. Tempo de grande alegria,
                            vitória sobre a morte, vida nova em Cristo. Cantos fortes de ressurreição.
                        </li>
                        <li>
                            <strong>Tempo Comum:</strong> tempo do dia a dia com Jesus. Cantos que
                            falam de seguimento, Reino de Deus, vida em comunidade.
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Ao escolher os cantos, vale sempre olhar as leituras do dia, o tempo
                        litúrgico e a realidade da comunidade. O objetivo não é “fazer um show”,
                        mas ajudar o povo a rezar melhor.
                    </p>
                </article>

                {/* Conclusão */}
                <footer className="pt-4 border-t border-gray-200 mt-2">
                    <p className="text-base md:text-lg text-gray-700 flex items-center gap-2">
                        <Music2 size={18} className="text-amber-600" />
                        <span>
                            Que este guia ajude seu ministério a servir com mais consciência,
                            unidade e amor à liturgia. A música é um serviço precioso na Igreja —
                            e quem canta, reza duas vezes.
                        </span>
                    </p>
                </footer>
            </motion.section>
        </main>
    );
}
