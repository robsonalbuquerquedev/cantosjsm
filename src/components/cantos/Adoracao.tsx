import SongList from "@/components/SongList";
import { HandHeart } from "lucide-react";

export default function Adoracao() {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <HandHeart size={32} className="text-amber-400" />
                Cantos de Adoração
            </h1>

            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">O que são os Cantos de Adoração?</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Os cantos de adoração conduzem a comunidade à contemplação,
                    silêncio e reverência diante do mistério de Deus, especialmente
                    em momentos como Adoração ao Santíssimo e vigílias de oração.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    São canções profundas, que expressam entrega, humildade e amor
                    a Jesus presente na Eucaristia.
                </p>
            </article>

            <SongList category="adoracao" title="🎶 Cantos de Adoração" />
        </section>
    );
}
