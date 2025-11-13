"use client";

import { HandHelping } from "lucide-react";
import SongList from "@/components/SongList";

export default function AtoPenitencialPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <HandHelping size={32} className="text-amber-400" />
                Ato Penitencial
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl 
        border-l-4 border-amber-400 mb-10 max-w-3xl">

                <h2 className="text-2xl font-bold mb-4">Entendendo o Ato Penitencial</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    O Ato Penitencial é um momento de humildade e reflexão em que a comunidade
                    reconhece sua necessidade do amor e da misericórdia de Deus. Antes de celebrar
                    os mistérios da fé, abrimos o coração e pedimos perdão.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Os cantos desse momento são suaves e acolhedores, expressando confiança no
                    cuidado divino. Eles ajudam a assembleia a entrar em um clima de verdade,
                    conversão e esperança.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de cantos tradicionais do Ato
                    Penitencial, selecionados para apoiar seu ministério de música.
                </p>
            </section>

            <SongList category="ato-penitencial" title="🙏 Ato Penitencial" />
        </main>
    );
}
