"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const routes = [
        { label: "Entrada", href: "/entrada" },
        { label: "Ato Penitencial", href: "/ato-penitencial" },
        { label: "Glória", href: "/gloria" },
        { label: "Salmo", href: "/salmo" },
        { label: "Aclamação", href: "/aclamacao" },
        { label: "Ofertório", href: "/ofertorio" },
        { label: "Santo", href: "/santo" },
        { label: "Amém", href: "/amem" },
        { label: "Cordeiro", href: "/cordeiro" },
        { label: "Comunhão", href: "/comunhao" },
        { label: "Final", href: "/final" },
    ];

    const extras = [
        { label: "Sobre", href: "/sobre" },
        { label: "Contato", href: "/contato" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.aside
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white/95 backdrop-blur-md p-6 z-50 flex flex-col shadow-lg"
                >
                    {/* 🔹 Cabeçalho da sidebar */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Logo CantosJSM"
                                width={40}
                                height={40}
                                className="rounded-full shadow-sm"
                            />
                            <h2 className="text-lg font-semibold text-amber-700">CantosJSM</h2>
                        </div>
                        <button onClick={onClose} className="text-gray-800 cursor-pointer">
                            <X size={26} />
                        </button>
                    </div>

                    {/* 📖 Rotas da missa */}
                    <nav className="flex flex-col gap-4">
                        {routes.map((route, index) => (
                            <motion.div
                                key={route.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <Link
                                    href={route.href}
                                    onClick={onClose}
                                    className="block text-lg text-gray-700 hover:text-amber-700 transition"
                                >
                                    {route.label}
                                </Link>
                            </motion.div>
                        ))}

                        {/* 🔸 Separador visual */}
                        <div className="border-t border-gray-300 my-4"></div>

                        {/* 🔗 Extras */}
                        {extras.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (routes.length + index) * 0.04 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block text-lg text-gray-700 hover:text-amber-700 transition"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
