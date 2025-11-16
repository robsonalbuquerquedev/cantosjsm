"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SongModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: {
        imageLyrics: string;
    } | null;
}

export default function SongModal({ isOpen, onClose, song }: SongModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    // 🔒 bloqueia scroll do body
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // 🔼 sempre começa no topo ao abrir
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.scrollTo({ top: 0 });
        }
    }, [isOpen]);

    // 📌 zoom states
    const [scale, setScale] = useState(1);
    const [startDistance, setStartDistance] = useState(0);

    if (!song) return null;

    const getDistance = (touches: React.TouchList | TouchList) => {
        const t0 = touches[0];
        const t1 = touches[1];
        if (!t0 || !t1) return 0;

        return Math.sqrt(
            Math.pow(t0.pageX - t1.pageX, 2) +
            Math.pow(t0.pageY - t1.pageY, 2)
        );
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            setStartDistance(getDistance(e.touches));
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            const dist = getDistance(e.touches);
            const newScale = Math.min(3, Math.max(1, scale + (dist - startDistance) / 200));
            setScale(newScale);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
                    />

                    {/* MODAL CENTRALIZADO */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22 }}
                        className="
                            fixed inset-0 z-[9999]
                            flex items-center justify-center
                            overflow-y-auto
                            p-4
                        "
                    >
                        {/* CONTAINER DA IMAGEM (cartão centralizado) */}
                        <div
                            className="
                                relative bg-black rounded-2xl 
                                max-w-xl w-full 
                                max-h-[92vh] overflow-auto
                            "
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            {/* Botão fechar */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-white/90 hover:text-white z-[9999]"
                            >
                                <X size={32} />
                            </button>

                            {/* Imagem ocupando 100% */}
                            <div
                                style={{
                                    transform: `scale(${scale})`,
                                    transformOrigin: "center center",
                                    transition: "transform 0.05s linear",
                                }}
                                className="select-none touch-none"
                            >
                                <Image
                                    src={song.imageLyrics}
                                    alt="Letra da música"
                                    width={1200}
                                    height={2000}
                                    quality={100}
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
