import SongList from "@/components/SongList";
import { Megaphone } from "lucide-react";
import type { LiturgicalSeason } from "@/types/song";

interface AclamacaoContentProps {
    title?: string;
    liturgicalSeason: LiturgicalSeason;
}

export default function AclamacaoContent({
    title = "Aclamação ao Evangelho",
    liturgicalSeason,
}: AclamacaoContentProps) {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho com ícone */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Megaphone size={32} className="text-amber-400" />
                {title}
            </h1>

            {/* 📘 Introdução Litúrgica */}
            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">A alegria de acolher o Evangelho</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A Aclamação ao Evangelho é um momento de alegria e expectativa. Antes de
                    ouvir as palavras de Jesus, a comunidade proclama o “Aleluia” — ou um
                    refrão próprio, no caso da Quaresma — como sinal de fé e acolhida.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Esse canto convida todos os fiéis a ficarem de pé e se prepararem para
                    escutar o Evangelho com atenção e coração aberto. É um gesto bonito de
                    respeito e amor à Palavra de Deus.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de aclamações que ajudam a comunidade
                    a viver esse momento com entusiasmo, fé e reverência.
                </p>
            </article>

            {/* 🎶 Lista de músicas */}
            <SongList
                category="aclamacao"
                liturgicalSeason={liturgicalSeason}
                title="📣 Aclamação ao Evangelho"
            />
        </section>
    );
}
