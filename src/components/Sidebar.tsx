"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    X,
    DoorOpen,
    HandHelping,
    Sun,
    BookOpenCheck,
    Megaphone,
    HandHeart,
    Sparkles,
    CheckCircle2,
    BadgeCheck,
    Wine,
    Flag,
    Info,
    Mail
} from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {

    const routes = [
        { label: "Entrada", href: "/entrada", icon: DoorOpen },
        { label: "Ato Penitencial", href: "/ato-penitencial", icon: HandHelping },
        { label: "Glória", href: "/gloria", icon: Sun },
        { label: "Salmo", href: "/salmo", icon: BookOpenCheck },
        { label: "Aclamação", href: "/aclamacao", icon: Megaphone },
        { label: "Ofertório", href: "/ofertorio", icon: HandHeart },
        { label: "Santo", href: "/santo", icon: Sparkles },
        { label: "Amém", href: "/amem", icon: CheckCircle2 },
        { label: "Cordeiro", href: "/cordeiro", icon: BadgeCheck },
        { label: "Comunhão", href: "/comunhao", icon: Wine },
        { label: "Final", href: "/final", icon: Flag },
    ];

    const extras = [
        { label: "Sobre", href: "/sobre", icon: Info },
        { label: "Contato", href: "/contato", icon: Mail },
        { label: "Política de Privacidade", href: "/politica-de-privacidade", icon: BookOpenCheck },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.aside
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.35 }}
                    className="
                        fixed top-0 right-0 
                        w-4/5 sm:w-2/5 md:w-1/3 
                        h-full bg-white text-black 
                        p-6 z-50 flex flex-col shadow-2xl
                        border-l-4 border-amber-400
                    "
                >
                    {/* 🔹 Header da Sidebar */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="Logo CantosJSM"
                                width={42}
                                height={42}
                                className="rounded-full shadow"
                            />
                            <h2 className="text-xl font-bold text-amber-700 tracking-wide">
                                CantosJSM
                            </h2>
                        </div>

                        <button
                            onClick={onClose}
                            className="text-gray-800 hover:text-red-600 transition cursor-pointer"
                        >
                            <X size={30} />
                        </button>
                    </div>

                    {/* 🎶 Seção: Partes da Missa */}
                    <h3 className="font-semibold text-lg text-amber-700 mb-4">
                        Partes da Missa
                    </h3>

                    <nav className="flex flex-col gap-3 mb-8">
                        {routes.map((route, index) => {
                            const Icon = route.icon;
                            return (
                                <motion.div
                                    key={route.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.04 }}
                                >
                                    <Link
                                        href={route.href}
                                        onClick={onClose}
                                        className="
                                            flex items-center gap-3 
                                            text-base font-medium 
                                            text-gray-700 hover:text-amber-700 
                                            transition
                                        "
                                    >
                                        <Icon size={20} className="text-amber-700" />
                                        {route.label}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* 📄 Seção Institucional */}
                    <h3 className="font-semibold text-lg text-amber-700 mb-4">
                        Institucional
                    </h3>

                    <nav className="flex flex-col gap-3">
                        {extras.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (routes.length + index) * 0.03 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className="
                                            flex items-center gap-3
                                            text-base font-medium 
                                            text-gray-700 hover:text-amber-700
                                            transition
                                        "
                                    >
                                        <Icon size={20} className="text-amber-700" />
                                        {item.label}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
