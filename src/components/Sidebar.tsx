"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronUp, DoorOpen, HandHelping, Sun, BookOpenCheck, Megaphone, HandHeart, Sparkles, CheckCircle2, BadgeCheck, Wine, Flag, Library, Crown, Flame, Church, Info, Mail, ShieldCheck, BookOpen, CircleDot, Calendar, } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface SidebarRoute {
    label: string;
    href: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {

    const [openSection, setOpenSection] = useState<string | null>(null); // nível 1
    const [openLiturgicalTime, setOpenLiturgicalTime] = useState<string | null>(null); // nível 2

    const toggleSection = (key: string) => {
        setOpenSection(openSection === key ? null : key);
    };

    const toggleLiturgicalTime = (key: string) => {
        setOpenLiturgicalTime(openLiturgicalTime === key ? null : key);
    };

    const liturgicalTimes = [
        { key: "advento", label: "Advento", icon: Calendar },
        { key: "natal", label: "Natal", icon: Calendar },
        { key: "quaresma", label: "Quaresma", icon: Calendar },
        { key: "pascoa", label: "Páscoa", icon: Calendar },
        { key: "tempo-comum", label: "Tempo Comum", icon: Calendar },
    ];

    const variableParts = [
        { key: "entrada", label: "Entrada", icon: DoorOpen },
        { key: "ofertorio", label: "Ofertório", icon: HandHeart },
        { key: "comunhao", label: "Comunhão", icon: Wine },
        { key: "pos-comunhao", label: "Pós-Comunhão", icon: Wine },
        { key: "final", label: "Final", icon: Flag },
    ];

    const fixedParts = [
        { key: "ato-penitencial", label: "Ato Penitencial", icon: HandHelping },
        { key: "gloria", label: "Glória", icon: Sun },
        { key: "salmo", label: "Salmo", icon: BookOpenCheck },
        { key: "aclamacao", label: "Aclamação", icon: Megaphone },
        { key: "santo", label: "Santo", icon: Sparkles },
        { key: "amem", label: "Amém", icon: CheckCircle2 },
        { key: "cordeiro", label: "Cordeiro", icon: BadgeCheck },
    ];

    const devocionais = [
        { label: "Hinos", href: "/hinos", icon: Library },
        { label: "Marianas", href: "/marianas", icon: Crown },
        { label: "Espírito Santo", href: "/espirito-santo", icon: Flame },
        { label: "Adoração", href: "/adoracao", icon: HandHeart },
        { label: "Padroeiro da Cidade", href: "/padroeiro-da-cidade", icon: Church },
    ];

    const institucionais = [
        { label: "Sobre", href: "/sobre", icon: Info },
        { label: "Contato", href: "/contato", icon: Mail },
        { label: "Política de Privacidade", href: "/politica-de-privacidade", icon: ShieldCheck },
        { label: "Termos de Uso", href: "/termos-de-uso", icon: BookOpenCheck },
        { label: "Agradecimentos", href: "/agradecimentos", icon: Sparkles },
        { label: "Guia Litúrgico", href: "/guia-liturgico", icon: BookOpen },
        { label: "Guia do Rosário", href: "/guia-do-rosario", icon: CircleDot },
    ];

    const renderSection = (
        title: string,
        key: string,
        routes: SidebarRoute[]
    ) => (
        <div className="mb-6">
            <button
                onClick={() => toggleSection(key)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-amber-700 cursor-pointer"
            >
                {title}
                {openSection === key ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            <AnimatePresence>
                {openSection === key && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-3 flex flex-col gap-2"
                    >
                        {routes.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={onClose}
                                className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition"
                            >
                                <Icon size={20} className="text-amber-700" />
                                {label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    const renderLiturgia = () => (
        <div className="mb-6">
            <button
                onClick={() => toggleSection("liturgia")}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-amber-700 cursor-pointer"
            >
                Liturgia
                {openSection === "liturgia" ? (
                    <ChevronUp size={20} />
                ) : (
                    <ChevronDown size={20} />
                )}
            </button>

            <AnimatePresence>
                {openSection === "liturgia" && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-3 flex flex-col gap-4"
                    >
                        {liturgicalTimes.map((time) => (
                            <div key={time.key} className="ml-2">
                                {/* Tempo Litúrgico */}
                                <button
                                    onClick={() => toggleLiturgicalTime(time.key)}
                                    className="flex justify-between items-center w-full text-gray-700 hover:text-amber-700 transition cursor-pointer"
                                >
                                    <span className="flex items-center gap-2">
                                        <time.icon size={18} className="text-amber-700" />
                                        {time.label}
                                    </span>

                                    {openLiturgicalTime === time.key ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}
                                </button>

                                {/* Partes da Missa */}
                                <AnimatePresence>
                                    {openLiturgicalTime === time.key && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-2 ml-6 flex flex-col gap-2"
                                        >
                                            {[...variableParts, ...fixedParts].map((part) => (
                                                <li key={part.key}>
                                                    <Link
                                                        href={`/${time.key}/${part.key}`}
                                                        onClick={onClose}
                                                        className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition"
                                                    >
                                                        <part.icon size={18} className="text-amber-700" />
                                                        {part.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.aside
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.35 }}
                    className="fixed top-0 right-0 w-4/5 sm:w-2/5 md:w-1/3 h-full bg-white text-black p-6 z-[99999] flex flex-col shadow-2xl border-l-4 border-amber-400 overflow-y-auto"
                >
                    {/* Header */}
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

                        <button onClick={onClose} className="text-gray-800 hover:text-red-600 transition cursor-pointer">
                            <X size={30} />
                        </button>
                    </div>

                    {/* Seções */}
                    {renderLiturgia()}
                    {renderSection("Cantos Devocionais", "devocionais", devocionais)}
                    {renderSection("Institucional", "institucional", institucionais)}
                </motion.aside>
            )}
        </AnimatePresence>
    );
}
