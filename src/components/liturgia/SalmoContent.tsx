import SongList from "@/components/SongList";
import { BookOpenCheck } from "lucide-react";
import type { LiturgicalSeason } from "@/types/song";

interface SalmoContentProps {
    title?: string;
    liturgicalSeason: LiturgicalSeason;
}

export default function SalmoContent({
    title = "Salmo Responsorial",
    liturgicalSeason,
}: SalmoContentProps) {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho com ícone */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <BookOpenCheck size={32} className="text-amber-400" />
                {title}
            </h1>

            {/* 📘 Introdução Litúrgica */}
            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">O Salmo Responsorial na Missa</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O Salmo Responsorial é parte fundamental da Liturgia da Palavra. Ele é a
                    resposta orante da assembleia à leitura proclamada e deve ser cantado com
                    reverência e simplicidade.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O salmista entoa os versos e o povo responde com o refrão. É um diálogo
                    de fé, onde cada melodia ajuda a gravar no coração a mensagem da Palavra.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos de melodias tradicionais para salmos, pensadas
                    para facilitar ensaios e execuções.
                </p>
            </article>

            {/* 🎶 Lista de músicas */}
            <SongList
                category="salmo"
                liturgicalSeason={liturgicalSeason}
                title="📖 Salmo Responsorial"
            />
        </section>
    );
}
