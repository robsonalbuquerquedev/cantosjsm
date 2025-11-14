import SongList from "@/components/SongList";
import { Shield } from "lucide-react";

export default function PadroeiroPage() {
    return (
        <main className="min-h-screen px-6 py-12 flex flex-col items-center">

            <h1 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white drop-shadow">
                <Shield size={32} className="text-amber-400" />
                Cantos ao Padroeiro
            </h1>

            <section className="bg-white text-black p-8 rounded-2xl shadow-xl border-l-4 border-amber-400 mb-10 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">O que são os Cantos ao Padroeiro?</h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Cada cidade tem um santo ou santa padroeiro, e muitos cantos
                    foram compostos especialmente para celebrar sua vida, testemunho
                    e proteção sobre o povo.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    Este espaço reúne trechos permitidos de cantos dedicados ao
                    padroeiro da sua comunidade, festa ou devoção local.
                </p>
            </section>

            <SongList category="padroeiro-da-cidade" title="🎶 Cantos ao Padroeiro da Cidade" />
        </main>
    );
}
