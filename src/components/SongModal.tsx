"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SongModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: {
        name: string;
        lyrics: string;
        lyricsMobile?: string;
        description?: string;
        key?: string;
        copyright?: string;
    } | null;
}

export default function SongModal({ isOpen, onClose, song }: SongModalProps) {
    if (!song) return null;

    // 🔥 Escolhe automaticamente a melhor versão para portrait
    const lyricsToShow = song.lyricsMobile ?? song.lyrics;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                >
                    {/* Card do modal */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white text-black w-full max-w-lg rounded-2xl shadow-2xl border border-amber-400 p-6 relative max-h-[85vh] overflow-y-auto"
                    >
                        {/* Botão fechar */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-amber-700 hover:text-amber-900 transition cursor-pointer"
                        >
                            <X size={26} />
                        </button>

                        {/* Título */}
                        <h2 className="text-2xl font-bold text-amber-700 mb-2">
                            {song.name}
                        </h2>

                        {/* Descrição */}
                        {song.description && (
                            <p className="text-gray-700 italic mb-3">{song.description}</p>
                        )}

                        {/* Tom */}
                        {song.key && (
                            <p className="text-lg font-semibold text-amber-800 mb-3">
                                🎵 Tom: {song.key}
                            </p>
                        )}

                        {/* Letra ou letra mobile */}
                        <pre className="whitespace-pre-wrap font-mono text-[17px] leading-relaxed text-gray-900 bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-inner">
                            {lyricsToShow}
                        </pre>

                        {/* Copyright */}
                        {song.copyright && (
                            <p className="text-xs text-gray-600 italic mt-3">
                                {song.copyright}
                            </p>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
