"use client";

import { Wine } from "lucide-react";
import SongList from "@/components/SongList";

export default function ComunhaoPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Wine size={32} className="text-amber-400" />
                Comunhão
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl 
        border-l-4 border-amber-400 mb-10 max-w-3xl">

                <h2 className="text-2xl font-bold mb-4">O encontro com o Senhor</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O canto de Comunhão acompanha um dos momentos mais íntimos da missa.
                    Ele ajuda a comunidade a permanecer em oração enquanto os fiéis recebem
                    o Corpo de Cristo.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    A música deve transmitir paz, reverência e gratidão. É um momento de
                    encontro pessoal com Jesus, que alimenta e fortalece a fé.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de cantos de Comunhão que ajudam
                    a tornar este momento ainda mais profundo.
                </p>
            </section>

            <SongList category="comunhao" title="🍞 Canto de Comunhão" />
        </main>
    );
}
