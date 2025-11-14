"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Info, Mail, HeartHandshake } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 w-full z-50 
                    transition-all duration-300 
                    bg-white ${isScrolled ? "shadow-md" : "shadow-sm"} 
                    border-b border-gray-200
                `}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">

                    {/* 🌿 Logo + Nome */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Logo CantosJSM"
                            width={42}
                            height={42}
                            className="rounded-full shadow"
                        />
                        <span className="font-semibold text-gray-900 text-lg tracking-wide">
                            CantosJSM
                        </span>
                    </Link>

                    {/* 🧭 Navegação Desktop */}
                    <nav className="hidden md:flex items-center gap-6">

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

                        {/* CTA */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="
                                cursor-pointer bg-amber-600 hover:bg-amber-500 
                                text-white text-sm font-semibold 
                                px-4 py-2 rounded-lg shadow transition
                            "
                        >
                            Partes da Missa
                        </button>
                    </nav>

                    {/* 📱 Botão Mobile */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-800 md:hidden cursor-pointer"
                    >
                        <Menu size={28} />
                    </button>

                </div>
            </header>

            {/* 📱 Sidebar */}
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
