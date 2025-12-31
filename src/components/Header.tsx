"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Info, Mail, HeartHandshake, BookOpen, Home, CircleDot, GraduationCap } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isGuidesOpen, setIsGuidesOpen] = useState(false);

    return (
        <>
            <header className="relative w-full z-20 bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

                    {/* 🌿 Logo + Nome */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Logo CantosJSM"
                            width={42}
                            height={42}
                            className="rounded-full shadow border border-gray-300"
                        />
                        <span className="text-xl font-bold text-amber-700 tracking-wide">
                            CantosJSM
                        </span>
                    </Link>

                    {/* 🧭 Navegação Desktop */}
                    <nav className="hidden md:flex items-center gap-8">

                        {/* 🔹 Início */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            <Home size={18} className="text-amber-700" />
                            Início
                        </Link>

                        <Link
                            href="/sobre"
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            <Info size={18} className="text-amber-700" />
                            Sobre
                        </Link>

                        <Link
                            href="/contato"
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            <Mail size={18} className="text-amber-700" />
                            Contato
                        </Link>

                        <Link
                            href="/agradecimentos"
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            <HeartHandshake size={18} className="text-amber-700" />
                            Agradecimentos
                        </Link>

                        <div className="relative">
                            <button
                                onClick={() => setIsGuidesOpen((prev) => !prev)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-amber-700 transition cursor-pointer"
                            >
                                <BookOpen size={18} className="text-amber-700" />
                                Guias
                            </button>

                            {isGuidesOpen && (
                                <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border">
                                    <Link
                                        href="/guia-liturgico"
                                        className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-amber-50"
                                        onClick={() => setIsGuidesOpen(false)}
                                    >
                                        <BookOpen size={16} className="text-amber-700" />
                                        Guia Litúrgico
                                    </Link>

                                    <Link
                                        href="/guia-do-rosario"
                                        className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-amber-50"
                                        onClick={() => setIsGuidesOpen(false)}
                                    >
                                        <CircleDot size={16} className="text-amber-700" />
                                        Guia do Rosário
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/formacao-liturgica"
                            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            <GraduationCap size={18} className="text-amber-700" />
                            Formação Litúrgica
                        </Link>

                        {/* CTA */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="
        cursor-pointer bg-amber-600 hover:bg-amber-500 
        text-white text-sm font-semibold 
        px-4 py-2 rounded-lg shadow-md transition
    "
                        >
                            Partes da Missa
                        </button>
                    </nav>

                    {/* 📱 Botão Mobile */}
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-800 md:hidden cursor-pointer"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* 📱 Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </>
    );
}
