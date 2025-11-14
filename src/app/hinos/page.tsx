import SongList from "@/components/SongList";
import { Music } from "lucide-react";

export default function HinosPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            {/* Cabeçalho */}
            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Music size={32} className="text-amber-400" />
                Hinos Católicos
            </h1>

            {/* Introdução */}
            <section className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">O que são os Hinos Católicos?</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Os hinos são cantos que expressam fé, unidade e louvor ao Senhor.
                    São amplamente utilizados em encontros, grupos de oração, retiros
                    e momentos de espiritualidade fora da missa, enriquecendo a vida cristã.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Aqui você encontra trechos permitidos de hinos tradicionais e
                    contemporâneos, escolhidos para apoiar ministérios, pastorais
                    e grupos que servem com música.
                </p>
            </section>

            {/* Lista */}
            <SongList category="hinos" title="🎶 Hinos Católicos" />
        </main>
    );
}
