"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

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
    // HOOKS DEVEM FICAR ANTES DO RETURN
    const modalRef = useRef<HTMLDivElement | null>(null);

    // 🔒 Bloqueia scroll do fundo ao abrir o modal
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // ❗ Só depois podemos verificar song
    if (!song) return null;

    const lyricsToShow = song.lyricsMobile ?? song.lyrics;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay clicável */}
                    <motion.div
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                    />

                    {/* Modal sem gesto de arrastar */}
                    <motion.div
                        ref={modalRef}
                        initial={{ y: 60, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 140, opacity: 0 }}
                        transition={{ type: "spring", damping: 22, stiffness: 260 }}
                        className="
                            fixed bottom-0 left-0 right-0 mx-auto 
                            w-full max-w-lg bg-white text-black 
                            rounded-t-3xl shadow-2xl border-t-4 border-amber-400 
                            p-6 z-[9999] max-h-[88vh] overflow-y-auto
                        "
                    >
                        {/* Barra de arrastar (visual apenas) */}
                        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

                        {/* Botão fechar */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 transition cursor-pointer"
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

                        {/* Letra */}
                        <pre className="
                            whitespace-pre-wrap font-mono text-[17px] leading-relaxed 
                            text-gray-900 bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-inner
                        ">
                            {lyricsToShow}
                        </pre>

                        {/* Copyright */}
                        {song.copyright && (
                            <p className="text-xs text-gray-600 italic mt-3">
                                {song.copyright}
                            </p>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
