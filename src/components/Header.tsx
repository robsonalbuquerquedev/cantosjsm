"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/60 shadow-md backdrop-blur-md border-b border-white/30"
                        : "bg-white/40 backdrop-blur-lg border-b border-white/10"
                    }`}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
                    {/* 🪶 Logo e nome (volta à página raiz) */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Logo CantosJSM"
                            width={40}
                            height={40}
                            className="rounded-full shadow-md"
                        />
                        <span className="font-semibold text-gray-900 text-lg">
                            CantosJSM
                        </span>
                    </Link>

                    {/* 🔗 Links principais */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link
                            href="/sobre"
                            className="text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            Sobre
                        </Link>
                        <Link
                            href="/contato"
                            className="text-sm font-medium text-gray-800 hover:text-amber-700 transition"
                        >
                            Contato
                        </Link>

                        {/* CTA do Sidebar */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow transition cursor-pointer"
                        >
                            Partes da Missa
                        </button>
                    </nav>

                    {/* 🍔 Botão mobile */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-800 md:hidden"
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </header>

            {/* 📱 Sidebar */}
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
