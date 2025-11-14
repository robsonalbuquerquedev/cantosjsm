"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
    X,
    ChevronDown,
    ChevronUp,
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
    Library,
    Crown,
    Flame,
    Church,
    Info,
    Mail,
    ShieldCheck,
    BookOpen
} from "lucide-react";

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

    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggle = (key: string) => {
        setOpenSection(openSection === key ? null : key);
    };

    const liturgia = [
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
    ];

    const renderSection = (
        title: string,
        key: string,
        routes: SidebarRoute[]
    ) => (
        <div className="mb-6">
            <button
                onClick={() => toggle(key)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-amber-700 cursor-pointer"
            >
                {title}
                {openSection === key ? (
                    <ChevronUp size={20} />
                ) : (
                    <ChevronDown size={20} />
                )}
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
                                className="flex items-center gap-3 text-gray-700 hover:text-amber-700 transition text-base px-1"
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
                    {renderSection("Partes da Missa", "liturgia", liturgia)}
                    {renderSection("Cantos Devocionais", "devocionais", devocionais)}
                    {renderSection("Institucional", "institucional", institucionais)}

                </motion.aside>
            )}
        </AnimatePresence>
    );
}
