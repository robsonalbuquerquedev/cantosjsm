"use client";

import { Sun } from "lucide-react";
import SongList from "@/components/SongList";

export default function GloriaPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Sun size={32} className="text-amber-400" />
                Glória
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl 
        border-l-4 border-amber-400 mb-10 max-w-3xl">

                <h2 className="text-2xl font-bold mb-4">Por que cantamos o Glória?</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O Glória é um hino antigo de louvor e alegria, inspirado no canto dos anjos
                    no nascimento de Jesus: “Glória a Deus nas alturas!”. É um momento festivo,
                    vibrante e cheio de gratidão.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Ao cantar o Glória, a assembleia proclama a grandeza de Deus, reconhecendo
                    Sua bondade e misericórdia. Ele não é cantado na Quaresma e no Advento,
                    períodos mais meditativos da liturgia.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de cantos de Glória para fortalecer
                    esse momento tão especial da celebração.
                </p>
            </section>

            <SongList category="gloria" title="✨ Glória" />
        </main>
    );
}
