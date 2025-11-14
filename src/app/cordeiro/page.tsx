"use client";

import { LandPlot } from "lucide-react";
import SongList from "@/components/SongList";

export default function CordeiroPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <LandPlot size={32} className="text-amber-400" />
                Cordeiro de Deus
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl 
        border-l-4 border-amber-400 mb-10 max-w-3xl">

                <h2 className="text-2xl font-bold mb-4">A invocação ao Cordeiro</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O Canto do Cordeiro acompanha a fração do pão, gesto que recorda a
                    entrega de Cristo por amor à humanidade. É um momento silencioso e
                    contemplativo da missa.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Ao repetir “tende piedade de nós”, a assembleia manifesta confiança na
                    misericórdia divina e se prepara para receber a Comunhão.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos desse canto tão profundo e cheio
                    de significado.
                </p>
            </section>

            <SongList category="cordeiro" title="🐑 Cordeiro de Deus" />
        </main>
    );
}
