import SongList from "@/components/SongList";
import { Flame } from "lucide-react";

export default function EspiritoSanto() {
    return (
        <section className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Flame size={32} className="text-amber-400" />
                Cantos ao Espírito Santo
            </h1>

            <article className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Por que cantar ao Espírito Santo?</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Os cantos dedicados ao Espírito Santo invocam a presença divina
                    que ilumina, fortalece e guia a comunidade cristã em cada
                    celebração e momento de oração.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Eles são muito usados em grupos de oração, missas votivas,
                    encontros de Pentecostes e momentos de discernimento espiritual.
                </p>
            </article>

            <SongList category="espirito-santo" title="🎶 Cantos ao Espírito Santo" />
        </section>
    );
}
