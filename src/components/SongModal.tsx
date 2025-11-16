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

    // 📌 estados para zoom manual
    const [scale, setScale] = useState(1);
    const [startDistance, setStartDistance] = useState(0);

    if (!song) return null;

    // ✋ Função que calcula distância entre dois dedos
    const getDistance = (touches: React.TouchList | TouchList) => {
        const t0 = touches[0];
        const t1 = touches[1];

        if (!t0 || !t1) return 0;

        return Math.sqrt(
            Math.pow(t0.pageX - t1.pageX, 2) +
            Math.pow(t0.pageY - t1.pageY, 2)
        );
    };

    // 📱 Pinch-to-zoom
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

                    {/* Modal que agora é praticamente só a imagem */}
                    <motion.div
                        ref={modalRef}
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22 }}
                        className="
                            fixed bottom-0 left-0 right-0 mx-auto 
                            w-full max-w-xl 
                            z-[9999] max-h-[92vh] overflow-auto
                        "
                    >
                        {/* Fechar */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-6 z-[9999] text-white/90 hover:text-white transition"
                        >
                            <X size={32} />
                        </button>

                        {/* Imagem ocupando tudo */}
                        <div
                            className="
                                relative w-full 
                                bg-black 
                                rounded-t-3xl
                            "
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                            <div
                                style={{
                                    transform: `scale(${scale})`,
                                    transformOrigin: "center center",
                                    transition: "transform 0.05s linear",
                                }}
                            >
                                <Image
                                    src={song.imageLyrics}
                                    alt="Letra da música"
                                    width={1200}
                                    height={2000}
                                    quality={100}
                                    className="w-full h-auto select-none touch-none rounded-t-3xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
