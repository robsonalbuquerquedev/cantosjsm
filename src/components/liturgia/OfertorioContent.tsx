import SongList from "@/components/SongList";
import { HandHeart } from "lucide-react";
import type { LiturgicalSeason } from "@/types/song";

interface OfertorioContentProps {
    title?: string;
    liturgicalSeason: LiturgicalSeason;
}

export default function OfertorioContent({
    title = "Canto de Ofertório",
    liturgicalSeason,
}: OfertorioContentProps) {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho com ícone */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <HandHeart size={32} className="text-amber-400" />
                {title}
            </h1>

            {/* 📘 Introdução Litúrgica */}
            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Oferecer a vida ao Senhor</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    No Ofertório, levamos ao altar pão, vinho e também nossa vida, nosso
                    trabalho e nossa gratidão. É um momento de entrega sincera, em que tudo
                    é colocado nas mãos de Deus.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O canto desse momento deve transmitir serenidade e espiritualidade,
                    ajudando a comunidade a rezar de forma profunda enquanto os dons são
                    apresentados.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Nesta página você encontra trechos de cantos apropriados para o Ofertório,
                    pensados para apoiar ministérios de música com beleza e devoção.
                </p>
            </article>

            {/* 🎶 Lista de músicas */}
            <SongList
                category="ofertorio"
                liturgicalSeason={liturgicalSeason}
                title="🕊️ Canto de Ofertório"
            />
        </section>
    );
}
