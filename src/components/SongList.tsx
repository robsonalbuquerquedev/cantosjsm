"use client";

import { useEffect, useState } from "react";
import { Song } from "@/types/song";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface SongListProps {
    category: Song["category"];
    title: string;
}

export default function SongList({ category, title }: SongListProps) {
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchSongs() {
            const res = await fetch("/api/songs");
            const data: Song[] = await res.json();

            // 🔤 Filtra e ordena alfabeticamente
            const filtered = data
                .filter((song) => song.category === category)
                .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

            setSongs(filtered);
        }
        fetchSongs();
    }, [category]);

    // 🔍 Busca dinâmica
    const filteredSongs = songs.filter((song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentSong = filteredSongs[currentIndex];

    const nextSong = () =>
        setCurrentIndex((prev) =>
            prev < filteredSongs.length - 1 ? prev + 1 : prev
        );

    const prevSong = () =>
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));

    return (
        <main className="min-h-screen text-white p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>

            {/* 🔎 Campo de busca */}
            <div className="relative w-full max-w-md mb-10">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Buscar música..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentIndex(0);
                    }}
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* 🎵 Exibição da música atual */}
            {filteredSongs.length === 0 ? (
                <p className="text-gray-300 italic">Nenhum canto encontrado.</p>
            ) : (
                <div className="w-full max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSong?.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-md"
                        >
                            {/* 🎶 Nome */}
                            <h2 className="text-2xl font-semibold mb-2">
                                {currentSong?.name}
                            </h2>

                            {/* ℹ️ Descrição */}
                            <p className="text-sm text-gray-300 italic mb-4">
                                {currentSong?.description}
                            </p>

                            {/* 🎵 Tom */}
                            {currentSong?.key && (
                                <p className="text-yellow-300 font-semibold mb-3">
                                    🎵 Tom: {currentSong.key}
                                </p>
                            )}

                            {/* 🎼 Letra (trecho permitido) */}
                            <pre className="whitespace-pre-wrap text-lg leading-relaxed text-gray-100 font-sans mb-6">
                                {currentSong?.lyrics}
                            </pre>

                            {/* 📜 Direitos autorais */}
                            {currentSong?.copyright && (
                                <p className="text-xs text-gray-300 italic mb-4">
                                    {currentSong?.copyright}
                                </p>
                            )}

                            {/* 🔗 Link para letra completa */}
                            {currentSong?.fullLyricsUrl && (
                                <a
                                    href={currentSong.fullLyricsUrl}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-black px-4 py-2 rounded-xl font-semibold transition"
                                >
                                    Ver letra completa
                                    <ExternalLink size={16} />
                                </a>
                            )}

                            {/* ⚖️ Aviso legal curto */}
                            {!currentSong?.isPublicDomain && currentSong?.fullLyricsUrl && (
                                <p className="text-xs text-gray-400 mt-3 italic">
                                    Exibido apenas trecho permitido da obra, conforme legislação de direitos autorais.
                                    Para a letra completa, acesse o link acima.
                                </p>
                            )}

                        </motion.div>
                    </AnimatePresence>

                    {/* 🔄 Navegação entre músicas */}
                    <div className="flex justify-between items-center mt-8">
                        <button
                            onClick={prevSong}
                            disabled={currentIndex === 0}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 ${currentIndex === 0
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-white/20 transition"
                                }`}
                        >
                            <ChevronLeft size={18} /> Anterior
                        </button>

                        <span className="text-sm text-gray-400">
                            {currentIndex + 1} de {filteredSongs.length}
                        </span>

                        <button
                            onClick={nextSong}
                            disabled={currentIndex === filteredSongs.length - 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 ${currentIndex === filteredSongs.length - 1
                                ? "opacity-40 cursor-not-allowed"
                                : "hover:bg-white/20 transition"
                                }`}
                        >
                            Próxima <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
