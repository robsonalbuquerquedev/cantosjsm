"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Music, BookOpen, Mic2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 text-white relative">
      {/* 🎵 Lado esquerdo: Mensagem e logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left space-y-6"
      >
        <Image
          src="/logo.png"
          alt="Logo CantosJSM"
          width={100}
          height={100}
          className="rounded-full border-4 border-white/30 shadow-md"
        />

        <h1 className="text-4xl md:text-5xl font-bold">
          Bem-vindo ao <span className="text-yellow-300">CantosJSM</span>
        </h1>
        <p className="text-lg text-gray-200 max-w-md">
          Encontre facilmente todos os cantos litúrgicos da missa —
          organizados por momento, com letra, tom e cifras. Uma ferramenta feita
          para ajudar seu ministério de música a louvar com mais harmonia.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/entrada"
            className="bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition"
          >
            Começar Agora
          </Link>
        </div>
      </motion.div>

      {/* 🎶 Lado direito: Hero Cards com seções */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:w-1/2 mt-10 md:mt-0"
      >
        {[
          { label: "Entrada", path: "/entrada" },
          { label: "Ato Penitencial", path: "/ato-penitencial" },
          { label: "Glória", path: "/gloria" },
          { label: "Salmo", path: "/salmo" },
          { label: "Aclamação", path: "/aclamacao" },
          { label: "Ofertório", path: "/ofertorio" },
          { label: "Santo", path: "/santo" },
          { label: "Amém", path: "/amem" },
          { label: "Cordeiro", path: "/cordeiro" },
          { label: "Comunhão", path: "/comunhao" },
          { label: "Final", path: "/final" },
        ].map((item, index) => (
          <Link
            key={item.path}
            href={item.path}
            className="bg-white/10 hover:bg-white/20 transition p-4 rounded-xl text-center backdrop-blur-md border border-white/10 hover:-translate-y-1 duration-300"
          >
            <p className="font-semibold">{item.label}</p>
          </Link>
        ))}
      </motion.div>
    </main>
  );
}
