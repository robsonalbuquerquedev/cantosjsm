"use client";

import Link from "next/link";
import { Music, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 w-full bg-white text-black border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* 🌿 Identidade */}
                <div>
                    <h3 className="font-bold text-xl text-amber-700 mb-2">CantosJSM</h3>
                    <p className="text-sm text-gray-700">
                        Juventude de Santa Maria — Servindo em Canção.
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                        Um projeto feito com carinho para ministérios de música de todo o Brasil.
                    </p>
                </div>

                {/* 🧭 Navegação institucional */}
                <div className="flex flex-col space-y-2">
                    <h4 className="font-semibold text-lg mb-2 text-amber-700">Navegação</h4>

                    <Link href="/" className="hover:text-amber-700 transition">Página Inicial</Link>
                    <Link href="/sobre" className="hover:text-amber-700 transition">Sobre</Link>
                    <Link href="/contato" className="hover:text-amber-700 transition">Contato</Link>
                    <Link href="/agradecimentos" className="hover:text-amber-700 transition">Agradecimentos</Link>
                    <Link href="/politica-de-privacidade" className="hover:text-amber-700 transition">Política de Privacidade</Link>
                    <Link href="/termos-de-uso" className="hover:text-amber-700 transition">Termos de Uso</Link>
                    <Link href="/guia-liturgico" className="hover:text-amber-700 transition"> Guia Litúrgico</Link>
                    <Link href="/guia-do-rosario" className="hover:text-amber-700 transition"> Guia do Rosário</Link>
                </div>

                {/* 🎵 Navegação simplificada de cantos */}
                <div className="flex flex-col space-y-2">
                    <h4 className="font-semibold text-lg mb-2 text-amber-700">Cantos</h4>

                    <Link href="/entrada" className="hover:text-amber-700 transition">
                        Partes da Missa
                    </Link>

                    <Link href="/hinos" className="hover:text-amber-700 transition">
                        Hinos Litúrgicos
                    </Link>

                    <Link href="/marianas" className="hover:text-amber-700 transition">
                        Cantos Marianos
                    </Link>

                    <Link href="/espirito-santo" className="hover:text-amber-700 transition">
                        Espírito Santo
                    </Link>

                    <Link href="/adoracao" className="hover:text-amber-700 transition">
                        Adoração
                    </Link>

                    <Link href="/padroeiro-da-cidade" className="hover:text-amber-700 transition">
                        Padroeiro da Cidade
                    </Link>
                </div>
            </div>

            {/* ⚡ Rodapé final */}
            <div className="border-t border-gray-200 py-4 text-center text-sm flex flex-col md:flex-row items-center justify-center gap-2">
                <span className="flex items-center gap-1">
                    Feito com <Heart size={14} className="text-red-500" /> pela JSM
                </span>
                <span>• © {new Date().getFullYear()} CantosJSM</span>

                <Link
                    href="https://aprenderviolaoonline.com.br/"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-amber-700 font-semibold hover:underline"
                >
                    <Music size={16} /> Aprender Violão Online
                </Link>
            </div>
        </footer>
    );
}
