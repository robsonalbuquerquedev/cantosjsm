"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Calendar, BookOpen, Sparkles, Hand, Star } from "lucide-react";
import { formacaoData } from "@/data/formacaoData";
import Link from "next/link";

const ITEMS_PER_PAGE = 6;

const iconMap: Record<string, React.ElementType> = {
    "Canto Litúrgico × Canto Religioso": Music,
    Solenidades: Calendar,
    "Dia de Reis (Epifania do Senhor)": Star,
    "Histórias dos Santos": BookOpen,
    "Símbolos da Liturgia": Sparkles,
    "Gestos da Missa": Hand,
};

export default function FormacaoLiturgica() {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(formacaoData.length / ITEMS_PER_PAGE);

    const paginatedData = formacaoData.slice(
        currentPage * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    return (
        <>
            {/* Cabeçalho */}
            <motion.header className="col-span-full mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-3xl font-bold text-amber-300">
                    Formação Litúrgica
                </h1>
                <p className="text-white mt-2 max-w-2xl">
                    Conteúdos formativos para compreender melhor a liturgia,
                    seus cantos, celebrações, sinais e gestos.
                </p>
            </motion.header>

            {/* Cards */}
            {paginatedData.map((item, index) => {
                const Icon = iconMap[item.title];
                const isActive = item.status === "active";

                const CardContent = (
                    <motion.article
                        className={`
                relative
                bg-white/95
                rounded-2xl
                shadow-md
                p-6
                transition-all
                ${isActive
                                ? "cursor-pointer hover:shadow-xl hover:-translate-y-1"
                                : "opacity-90 cursor-not-allowed"}
            `}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {!isActive && (
                            <span className="absolute top-4 right-4 text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                                Em breve
                            </span>
                        )}

                        {Icon && (
                            <div className="mb-4 text-amber-500">
                                <Icon size={28} strokeWidth={1.5} />
                            </div>
                        )}

                        <h2 className="text-xl font-semibold mb-2">
                            {item.title}
                        </h2>

                        <p className="text-gray-700">
                            {item.description}
                        </p>
                    </motion.article>
                );

                return isActive && item.href ? (
                    <Link key={item.title} href={item.href}>
                        {CardContent}
                    </Link>
                ) : (
                    <div key={item.title}>
                        {CardContent}
                    </div>
                );
            })}
            
            {/* Navegação */}
            <div className="col-span-full flex justify-between mt-8">
                <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))} disabled={currentPage === 0} className="px-4 py-2 rounded-lg bg-amber-200 text-amber-900 disabled:opacity-40 cursor-pointer">
                    Anterior
                </button>

                <button
                    onClick={() =>
                        setCurrentPage((p) =>
                            Math.min(p + 1, totalPages - 1)
                        )
                    }
                    disabled={currentPage === totalPages - 1}
                    className="px-4 py-2 rounded-lg bg-amber-200 text-amber-900 disabled:opacity-40 cursor-pointer"
                >
                    Próximo
                </button>
            </div>
        </>
    );
}
