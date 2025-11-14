"use client";

import { CheckCircle2 } from "lucide-react";
import SongList from "@/components/SongList";

export default function AmenPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <CheckCircle2 size={32} className="text-amber-400" />
                Amém
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl 
        border-l-4 border-amber-400 mb-10 max-w-3xl">

                <h2 className="text-2xl font-bold mb-4">O Grande Amém</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O Amém após a doxologia é chamado de “Grande Amém”. Ele confirma a
                    oração do sacerdote e expressa a fé de toda a comunidade no mistério
                    que foi celebrado.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A música deste momento deve ser forte e clara, pois resume toda a
                    oração eucarística e o oferecimento de Cristo ao Pai.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos do Amém para fortalecer esse
                    momento tão solene da celebração.
                </p>
            </section>

            <SongList category="amem" title="🙌 Amém" />
        </main>
    );
}
