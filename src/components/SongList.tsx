"use client";

import { useEffect, useState } from "react";
import { Song } from "@/types/song";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    RotateCcw,
} from "lucide-react";

interface SongListProps {
    category: Song["category"];
    title: string;
}

export default function SongList({ category, title }: SongListProps) {
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLandscape, setIsLandscape] = useState(true);

    useEffect(() => {
        function detectOrientation() {
            const { innerWidth, innerHeight } = window;
            setIsLandscape(innerWidth > innerHeight);
        }

        detectOrientation();
        window.addEventListener("resize", detectOrientation);
        return () => window.removeEventListener("resize", detectOrientation);
    }, []);

    useEffect(() => {
        async function fetchSongs() {
            const res = await fetch("/api/songs");
            const data: Song[] = await res.json();

            const filtered = data
                .filter((song) => song.category === category)
                .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

            setSongs(filtered);
        }
        fetchSongs();
    }, [category]);

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
        <main className="min-h-screen w-full flex flex-col items-center px-6 py-16">

            {/* Título */}
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-10 text-center">
                {title}
            </h1>

            {/* Campo de busca */}
            <div className="relative w-full max-w-md mb-10">
                <Search className="absolute left-3 top-3 text-gray-500" size={20} />
                <input
                    type="text"
                    placeholder="Buscar música..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentIndex(0);
                    }}
                    className="
                        w-full bg-white border border-gray-300 rounded-xl 
                        py-2 pl-10 pr-4 text-black placeholder-gray-600 
                        focus:outline-none focus:ring-2 focus:ring-amber-500 shadow
                    "
                />
            </div>

            {/* Nenhuma música encontrada */}
            {filteredSongs.length === 0 && (
                <p className="text-gray-100 italic">Nenhum canto encontrado.</p>
            )}

            {/* Conteúdo principal */}
            {filteredSongs.length > 0 && (
                <div className="w-full max-w-3xl">

                    {/* 🎛️ PORTRAIT MODE (INFORMAÇÕES) */}
                    {!isLandscape && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="
                                bg-white text-black rounded-2xl p-10 shadow-xl 
                                border-l-4 border-amber-400 space-y-6
                            "
                        >
                            <h2 className="text-3xl font-bold text-amber-700">
                                {currentSong?.name}
                            </h2>

                            {currentSong?.description && (
                                <p className="text-gray-700 italic">{currentSong.description}</p>
                            )}

                            {currentSong?.key && (
                                <p className="text-lg font-semibold text-amber-800">
                                    🎵 Tom: {currentSong.key}
                                </p>
                            )}

                            <div
                                className="
    bg-amber-100 text-amber-900 
    border border-amber-300 
    rounded-xl px-4 py-4 
    text-sm shadow 
    flex flex-col gap-3
  "
                            >
                                <p className="flex items-center gap-2">
                                    <RotateCcw size={18} className="flex-shrink-0" />
                                    <span>
                                        Para visualizar <strong>letra completa e cifras</strong>,
                                        vire seu dispositivo para o modo <strong>paisagem (landscape)</strong>.
                                    </span>
                                </p>

                                <p className="text-xs text-amber-700">
                                    Dica: no modo paisagem, as cifras ficam alinhadas com perfeição — ideal para músicos.
                                </p>
                            </div>

                            {/* Botão para letra completa (se houver) */}
                            {currentSong?.fullLyricsUrl && (
                                <a
                                    href={currentSong.fullLyricsUrl}
                                    target="_blank"
                                    className="
                                        inline-flex items-center gap-2 
                                        bg-amber-600 hover:bg-amber-500 
                                        text-black px-4 py-2 rounded-xl 
                                        font-semibold transition shadow
                                    "
                                >
                                    Abrir letra completa
                                    <ExternalLink size={16} />
                                </a>
                            )}
                        </motion.div>
                    )}

                    {/* 🎼 LANDSCAPE MODE (LETRA + CIFRA) */}
                    {isLandscape && (
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={currentSong?.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="
                                    bg-white text-black 
                                    rounded-2xl p-10 shadow-xl 
                                    border-l-4 border-amber-400 
                                    space-y-6
                                "
                            >
                                <h2 className="text-3xl font-bold text-amber-700">
                                    {currentSong?.name}
                                </h2>

                                {currentSong?.description && (
                                    <p className="text-gray-700 italic">
                                        {currentSong.description}
                                    </p>
                                )}

                                {currentSong?.key && (
                                    <p className="text-lg font-semibold text-amber-800">
                                        🎵 Tom: {currentSong.key}
                                    </p>
                                )}

                                <pre className="whitespace-pre-wrap text-lg leading-relaxed text-gray-800">
                                    {currentSong?.lyrics}
                                </pre>

                                {currentSong?.copyright && (
                                    <p className="text-sm text-gray-600 italic">
                                        {currentSong?.copyright}
                                    </p>
                                )}

                                {currentSong?.fullLyricsUrl && (
                                    <a
                                        href={currentSong.fullLyricsUrl}
                                        target="_blank"
                                        className="
                                            inline-flex items-center gap-2 
                                            bg-amber-600 hover:bg-amber-500 
                                            text-black px-4 py-2 rounded-xl 
                                            font-semibold transition shadow
                                        "
                                    >
                                        Ver letra completa
                                        <ExternalLink size={16} />
                                    </a>
                                )}

                                {!currentSong?.isPublicDomain && currentSong?.fullLyricsUrl && (
                                    <p className="text-xs text-gray-500 italic">
                                        Exibido apenas trecho permitido da obra, conforme legislação.
                                        Para a letra completa, acesse o link acima.
                                    </p>
                                )}
                            </motion.article>
                        </AnimatePresence>
                    )}

                    {/* Navegação entre músicas */}
                    <div className="flex justify-between items-center mt-8">
                        <button
                            onClick={prevSong}
                            disabled={currentIndex === 0}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-xl border 
                                transition shadow
                                ${currentIndex === 0
                                    ? "opacity-40 cursor-not-allowed border-gray-300"
                                    : "bg-white hover:bg-gray-100 border-gray-300"
                                }
                            `}
                        >
                            <ChevronLeft size={18} /> Anterior
                        </button>

                        <span className="text-gray-100 font-semibold">
                            {currentIndex + 1} de {filteredSongs.length}
                        </span>

                        <button
                            onClick={nextSong}
                            disabled={currentIndex === filteredSongs.length - 1}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-xl border 
                                transition shadow
                                ${currentIndex === filteredSongs.length - 1
                                    ? "opacity-40 cursor-not-allowed border-gray-300"
                                    : "bg-white hover:bg-gray-100 border-gray-300"
                                }
                            `}
                        >
                            Próxima <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
