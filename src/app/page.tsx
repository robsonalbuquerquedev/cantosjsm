"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Music,
  Mic2,
  Sparkles,
  Star,
  HeartHandshake,
  Library,
  Crown,
  Flame,
  HandHeart,
  Church
} from "lucide-react";

export default function Home() {
  const sections = [
    { label: "Entrada", path: "/entrada", icon: Music },
    { label: "Ato Penitencial", path: "/ato-penitencial", icon: Star },
    { label: "Glória", path: "/gloria", icon: Sparkles },
    { label: "Salmo", path: "/salmo", icon: BookOpen },
    { label: "Aclamação", path: "/aclamacao", icon: Mic2 },
    { label: "Ofertório", path: "/ofertorio", icon: HeartHandshake },
    { label: "Santo", path: "/santo", icon: Star },
    { label: "Amém", path: "/amem", icon: Music },
    { label: "Cordeiro", path: "/cordeiro", icon: Mic2 },
    { label: "Comunhão", path: "/comunhao", icon: BookOpen },
    { label: "Final", path: "/final", icon: Sparkles },

    // NOVAS CATEGORIAS
    { label: "Hinos", path: "/hinos", icon: Library },
    { label: "Marianas", path: "/marianas", icon: Crown },
    { label: "Espírito Santo", path: "/espirito-santo", icon: Flame },
    { label: "Adoração", path: "/adoracao", icon: HandHeart },
    { label: "Padroeiro da Cidade", path: "/padroeiro-da-cidade", icon: Church },
  ];

  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-10">

      {/* 🟨 Lado Esquerdo — Apresentação Detalhada */}
      <motion.article
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-amber-700 drop-shadow-sm">
            Bem-vindo ao
            <br />
            <span className="bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">
              CantosJSM
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-700 max-w-md">
            Um espaço criado com carinho para ajudar ministérios de música a
            encontrarem cantos litúrgicos e devocionais com facilidade — organizados por
            momento da missa e por categorias espirituais, com trechos permitidos,
            tom e cifras opcionais.
          </p>
        </div>
      </motion.article>

      {/* 🟦 Lado Direito — Cards litúrgicos elegantes */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-5"
      >
        {sections.map(({ label, path, icon: Icon }) => (
          <Link
            key={path}
            href={path}
            className="
              bg-white 
              text-black 
              p-5 
              rounded-2xl 
              border border-gray-200 
              shadow-md 
              hover:shadow-xl 
              hover:-translate-y-1 
              transition-all 
              flex flex-col 
              items-center 
              gap-3
            "
          >
            <Icon className="text-amber-600" size={28} />
            <span className="font-semibold text-center">{label}</span>
          </Link>
        ))}
      </motion.div>
    </main>
  );
}
