import SongList from "@/components/SongList";
import { DoorOpen } from "lucide-react";
import type { LiturgicalSeason } from "@/types/song";

interface EntradaContentProps {
    title?: string;
    liturgicalSeason: LiturgicalSeason;
}

export default function EntradaContent({
    title = "Canto de Entrada",
    liturgicalSeason,
}: EntradaContentProps) {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">
            {/* 🌿 Cabeçalho com ícone */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <DoorOpen size={32} className="text-amber-400" />
                {title}
            </h1>

            {/* 📘 Introdução Litúrgica */}
            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">
                    O que é o Canto de Entrada?
                </h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O Canto de Entrada é o primeiro momento musical da missa. Ele acolhe a
                    comunidade, desperta o coração para Deus e marca o início da celebração.
                    Não é apenas um canto, mas um convite: “Estamos juntos, vamos caminhar
                    como povo de Deus”.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A função principal deste canto é unir todos os fiéis em um só sentimento.
                    Ele acompanha a procissão inicial — quando o padre e os ministros entram —
                    e deve expressar alegria, esperança e comunhão. Também ajuda cada pessoa a
                    deixar preocupações de lado e entrar espiritualmente na liturgia.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de cantos de Entrada, organizados
                    por nome, tom e estilo. Eles foram escolhidos com carinho para apoiar
                    ministérios de música que desejam servir com dedicação e qualidade.
                </p>
            </article>

            {/* 🎶 Lista de músicas */}
            <SongList
                category="entrada"
                liturgicalSeason={liturgicalSeason}
                title="🎶 Canto de Entrada"
            />
        </section>
    );
}
