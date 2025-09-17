"use client";

import { useState } from "react";
import { database } from "@/lib/firebase";
import { ref, set, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import songsInternal from "@/lib/songsInternal.json";
import { FaSearch, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Função de busca na base interna
function searchInternalSong(title: string) {
    return songsInternal.find(
        (song) => song.title.toLowerCase() === title.toLowerCase()
    );
}

export default function AddSongPage() {
    const [title, setTitle] = useState("");
    const [tone, setTone] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "alert">("idle");
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !tone || !lyrics) {
            setModalMessage("Por favor, preencha todos os campos.");
            setStatus("error");
            return;
        }

        try {
            const snapshot = await get(ref(database, "songs"));
            const songs = snapshot.val() || {};
            const exists = Object.values(songs).some(
                (song: any) => song.title.toLowerCase() === title.toLowerCase()
            );

            if (exists) {
                setModalMessage("⚠️ Música já adicionada!");
                setStatus("alert");
                return;
            }

            const songId = uuidv4();
            const songData = { title, tone, lyrics, source: "manual" };
            await set(ref(database, `songs/${songId}`), songData);

            setModalMessage("Música adicionada com sucesso!");
            setStatus("success");
            setTitle("");
            setTone("");
            setLyrics("");
        } catch (error) {
            console.error(error);
            setModalMessage("Erro ao adicionar música. Tente novamente.");
            setStatus("error");
        }
    };

    const handleSearch = () => {
        if (!title) {
            setModalMessage("Digite o título da música primeiro.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setModalMessage("Buscando música...");

        const song = searchInternalSong(title);

        if (song) {
            setLyrics(song.lyrics);
            setTone(song.tone || "");
            setModalMessage("✅ Música encontrada na base interna do JSM!");
            setStatus("success");
        } else {
            setModalMessage("❌ Música não encontrada. Preencha manualmente.");
            setStatus("error");
        }
    };

    const modalColor = {
        idle: "bg-gray-500",
        success: "bg-green-500",
        error: "bg-red-500",
        alert: "bg-yellow-500",
        loading: "bg-blue-500",
    }[status];

    return (
        <main className="flex items-center justify-center min-h-screen px-4 py-8">
            <div className="w-full max-w-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Adicionar Música</h2>
                <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
                    ← Voltar à lista
                </Link>

                {/* Modal animado */}
                <AnimatePresence>
                    {status !== "idle" && modalMessage && (
                        <motion.div
                            className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded shadow text-white ${modalColor} z-50`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            onAnimationComplete={() => {
                                if (["success", "error", "alert"].includes(status)) {
                                    setTimeout(() => setStatus("idle"), 2500);
                                }
                            }}
                        >
                            {modalMessage}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Formulário */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-semibold">Título da Música</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                        <motion.button
                            type="button"
                            onClick={handleSearch}
                            className="px-4 py-2 rounded mb-2 sm:mb-0 flex items-center justify-center w-full sm:w-auto text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaSearch className="mr-2" />
                            Buscar Música
                        </motion.button>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Tom</label>
                        <input
                            type="text"
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Ex.: C, G, Dm"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Letra</label>
                        <textarea
                            value={lyrics}
                            onChange={(e) => setLyrics(e.target.value)}
                            className="w-full border rounded px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaPlus className="mr-2" />
                        Adicionar Música
                    </motion.button>
                </form>
            </div>
        </main>
    );
}
