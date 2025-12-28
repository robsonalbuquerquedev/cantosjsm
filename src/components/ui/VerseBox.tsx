"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import versesLocal from "@/data/versiculos.json";

export default function VerseBox() {
    const [verse, setVerse] = useState<string | null>(null);
    const [refText, setRefText] = useState<string | null>(null);

    useEffect(() => {
        if (!versesLocal || versesLocal.length === 0) return;

        // 🔀 Versículo aleatório real a cada carregamento
        const randomIndex = Math.floor(Math.random() * versesLocal.length);
        const v = versesLocal[randomIndex];

        setVerse(v.text);
        setRefText(v.ref);
    }, []);

    if (!verse) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="
        bg-white text-black rounded-2xl shadow-md border-l-4 border-amber-400
        p-4 my-6 max-w-xl mx-auto
      "
        >
            <p className="italic text-gray-700 leading-relaxed">{verse}</p>
            <p className="text-right text-sm text-amber-700 font-semibold mt-2">
                {refText}
            </p>
        </motion.div>
    );
}
