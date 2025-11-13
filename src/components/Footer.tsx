"use client";

import Link from "next/link";
import { Music, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-16 w-full bg-white/30 backdrop-blur-md border-t border-white/20 text-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* 🌿 Identidade CantosJSM */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-lg text-amber-700">CantosJSM</h3>
                    <p className="text-sm">Juventude de Santa Maria — Servindo em Canção</p>
                </div>

                {/* 🎵 CTA para Aprender Violão */}
                <div className="text-center">
                    <p className="text-sm mb-1">Conheça também:</p>
                    <Link
                        href="https://aprenderviolaoonline.com.br/"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-xl shadow-lg transition"
                    >
                        <Music size={18} />
                        Aprender Violão Online
                    </Link>
                </div>

                {/* ❤️ Créditos */}
                <div className="text-center md:text-right text-sm text-gray-800 flex flex-col">
                    <span className="flex items-center justify-center md:justify-end gap-1">
                        Feito com <Heart size={14} className="text-red-500" /> pela JSM
                    </span>
                    <span>© {new Date().getFullYear()} CantosJSM</span>
                </div>
            </div>
        </footer>
    );
}
