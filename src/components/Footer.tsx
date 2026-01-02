"use client";

import Link from "next/link";
import {
    Music,
    Heart,
    Compass,
    BookOpen,
    ShieldCheck,
    Mic2,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 w-full bg-white text-black border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-10">

                {/* 🌿 Identidade */}
                <div>
                    <h3 className="font-bold text-xl text-amber-700 mb-2">
                        CantosJSM
                    </h3>
                    <span className="text-sm text-gray-700">
                        Juventude de Santa Maria
                    </span>
                </div>

                {/* 🧭 Navegação */}
                <div className="flex flex-col space-y-2">
                    <h4 className="flex items-center gap-2 font-semibold text-lg text-amber-700 mb-2">
                        <Compass size={18} /> Navegação
                    </h4>

                    <Link href="/">Página Inicial</Link>
                    <Link href="/sobre">Sobre</Link>
                    <Link href="/contato">Contato</Link>
                    <Link href="/agradecimentos">Agradecimentos</Link>
                    <Link href="/agenda-jsm">Agenda JSM</Link>
                </div>

                {/* 📘 Guias */}
                <div className="flex flex-col space-y-2">
                    <h4 className="flex items-center gap-2 font-semibold text-lg text-amber-700 mb-2">
                        <BookOpen size={18} /> Guias
                    </h4>

                    <Link href="/guia-liturgico">Guia Litúrgico</Link>
                    <Link href="/guia-do-rosario">Guia do Rosário</Link>
                </div>

                {/* 🔎 Transparência */}
                <div className="flex flex-col space-y-2">
                    <h4 className="flex items-center gap-2 font-semibold text-lg text-amber-700 mb-2">
                        <ShieldCheck size={18} /> Transparência
                    </h4>

                    <Link href="/politica-de-privacidade">Política de Privacidade</Link>
                    <Link href="/termos-de-uso">Termos de Uso</Link>
                </div>

                {/* 🎵 Cantos */}
                <div className="flex flex-col space-y-2">
                    <h4 className="flex items-center gap-2 font-semibold text-lg text-amber-700 mb-2">
                        <Mic2 size={18} /> Cantos
                    </h4>

                    <Link href="/tempo-comum">Partes da Missa</Link>
                    <Link href="/hinos">Hinos Litúrgicos</Link>
                    <Link href="/marianas">Cantos Marianos</Link>
                    <Link href="/espirito-santo">Espírito Santo</Link>
                    <Link href="/adoracao">Adoração</Link>
                    <Link href="/padroeiro-da-cidade">Padroeiro da Cidade</Link>
                </div>
            </div>

            {/* ⚡ Rodapé final */}
            <div className="border-t border-gray-200 py-4 text-sm flex flex-col md:flex-row items-center justify-center gap-3">
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
