import SongList from "@/components/SongList";
import { Sparkles } from "lucide-react";
import type { LiturgicalSeason } from "@/types/song";

interface SantoContentProps {
    title?: string;
    liturgicalSeason: LiturgicalSeason;
}

export default function SantoContent({
    title = "Santo",
    liturgicalSeason,
}: SantoContentProps) {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho com ícone */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Sparkles size={32} className="text-amber-400" />
                {title}
            </h1>

            {/* 📘 Introdução Litúrgica */}
            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Unidos aos anjos no Céu</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O canto do Santo é um dos momentos mais solenes da missa. Nele, a
                    assembleia se une aos anjos e santos para proclamar: “Santo, Santo,
                    Santo, Senhor Deus do Universo”. É um hino de adoração e maravilha.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A música costuma ser vibrante e grandiosa, expressando a alegria de
                    participar deste louvor celestial. É um momento em que o céu e a terra
                    se encontram.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos de cantos do Santo, ideais para esse momento
                    tão especial da liturgia.
                </p>
            </article>

            {/* 🎶 Lista de músicas */}
            <SongList
                category="santo"
                liturgicalSeason={liturgicalSeason}
                title="✨ Santo"
            />
        </section>
    );
}
