import SongList from "@/components/SongList";
import { Flower2 } from "lucide-react";

export default function Marianas() {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Flower2 size={32} className="text-amber-400" />
                Cantos Marianos
            </h1>

            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">O que são os Cantos Marianos?</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Os cantos marianos são expressões de amor, devoção e confiança
                    na Virgem Maria. Eles ajudam a comunidade a contemplar a Mãe de
                    Jesus e a viver o Evangelho com simplicidade, fé e alegria.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    São utilizados em missas marianas, celebrações especiais, terços,
                    novenas e encontros dedicados a Nossa Senhora.
                </p>
            </article>

            <SongList category="marianas" title="🎶 Cantos Marianos" />
        </section>
    );
}
