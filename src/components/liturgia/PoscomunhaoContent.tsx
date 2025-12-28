import SongList from "@/components/SongList";
import { Wine } from "lucide-react";
import type { LiturgicalSeason } from "@/types/song";

interface PosComunhaoContentProps {
    title?: string;
    liturgicalSeason: LiturgicalSeason;
}

export default function PosComunhaoContent({
    title = "Pós-Comunhão",
    liturgicalSeason,
}: PosComunhaoContentProps) {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho com ícone */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Wine size={32} className="text-amber-400" />
                {title}
            </h1>

            {/* 📘 Introdução Litúrgica */}
            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Ação de graças após receber Jesus</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O canto de Pós-Comunhão acompanha o momento de ação de graças depois
                    que a assembleia recebeu o Corpo e Sangue de Cristo. É um instante de
                    silêncio interior, gratidão e contemplação diante do grande mistério
                    que acabamos de participar.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Diferente do canto de Comunhão, que acompanha o rito de distribuição
                    da Eucaristia, o canto de Pós-Comunhão ajuda a comunidade a manter-se
                    em oração e reflexão, preparando o coração para continuar a celebração.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de cantos que podem enriquecer
                    este momento de profunda intimidade com o Senhor.
                </p>
            </article>

            {/* 🎶 Lista de músicas */}
            <SongList
                category="pos-comunhao"
                liturgicalSeason={liturgicalSeason}
                title="🙏 Canto de Pós-Comunhão"
            />
        </section>
    );
}
