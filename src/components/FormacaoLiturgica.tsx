"use client";

import { motion } from "framer-motion";
import {
    Music,
    Calendar,
    BookOpen,
    Sparkles,
    Hand,
} from "lucide-react";

import { formacaoData } from "@/data/formacaoData";

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const iconMap: Record<string, React.ElementType> = {
    "Canto Litúrgico × Canto Religioso": Music,
    Solenidades: Calendar,
    "Histórias dos Santos": BookOpen,
    "Símbolos da Liturgia": Sparkles,
    "Gestos da Missa": Hand,
};

export default function FormacaoLiturgica() {
    return (
        <>
            {/* Cabeçalho */}
            <motion.header
                className="col-span-full mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h1 className="text-3xl font-bold text-amber-300">
                    Formação Litúrgica
                </h1>
                <p className="text-white mt-2 max-w-2xl">
                    Conteúdos formativos para compreender melhor a liturgia,
                    seus cantos, celebrações, sinais e gestos.
                </p>
            </motion.header>

            {formacaoData.map((item, index) => {
                const Icon = iconMap[item.title];

                return (
                    <motion.article
                        key={item.title}
                        className="
                            relative
                            bg-white/95
                            rounded-2xl
                            shadow-md
                            p-6
                            opacity-90
                            cursor-not-allowed
                            hover:shadow-lg
                            transition-shadow
                        "
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.1,
                        }}
                    >
                        {/* Badge */}
                        <span className="absolute top-4 right-4 text-xs font-semibold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                            Em breve
                        </span>

                        {/* Ícone */}
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
            })}
        </>
    );
}
