"use client";

import { Flag } from "lucide-react";
import SongList from "@/components/SongList";

export default function FinalPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Flag size={32} className="text-amber-400" />
                Canto Final
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl 
        border-l-4 border-amber-400 mb-10 max-w-3xl">

                <h2 className="text-2xl font-bold mb-4">Sair em missão</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O canto final encerra a celebração e envia a comunidade para a missão
                    diária de viver o Evangelho. É um momento alegre e motivador.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Esse canto não é obrigatório, mas é uma tradição bonita que reforça a
                    unidade e o espírito fraterno da comunidade.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos para esse momento especial de
                    envio e gratidão.
                </p>
            </section>

            <SongList category="final" title="🏁 Canto Final" />
        </main>
    );
}
