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
import VerseBox from "@/components/VerseBox";

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
    { label: "Pós-Comunhão", path: "/pos-comunhao", icon: BookOpen },
    { label: "Final", path: "/final", icon: Sparkles },

    // NOVAS CATEGORIAS
    { label: "Hinos", path: "/hinos", icon: Library },
    { label: "Marianas", path: "/marianas", icon: Crown },
    { label: "Espírito Santo", path: "/espirito-santo", icon: Flame },
    { label: "Adoração", path: "/adoracao", icon: HandHeart },
    { label: "Padroeiro da Cidade", path: "/padroeiro-da-cidade", icon: Church },
  ];

  return (
    <>
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
          <VerseBox />
          <a
            href="#recursos"
            className="
    mt-4 inline-block bg-amber-600 hover:bg-amber-500 
    text-black font-semibold px-5 py-3 rounded-xl 
    shadow transition-all
  "
          >
            Explorar Conteúdos Especiais
          </a>
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

      {/* CTA – Recursos adicionais */}
      <section id="recursos" className="px-6 py-20 max-w-4xl mx-auto text-center space-y-10">

        {/* Guia do Rosário */}
        <Link
          href="/guia-do-rosario"
          className="block bg-white border-l-4 border-amber-500 shadow-lg rounded-2xl p-6 
                hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center gap-2"
        >
          <h2 className="text-xl font-bold text-amber-700">📿 Guia Completo do Rosário</h2>
          <p className="text-gray-700">
            Aprenda a rezar cada mistério, todas as orações e o passo a passo completo.
          </p>
        </Link>

        {/* Guia Litúrgico */}
        <Link
          href="/guia-liturgico"
          className="block bg-white border-l-4 border-amber-500 shadow-lg rounded-2xl p-6 
                hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center gap-2"
        >
          <h2 className="text-xl font-bold text-amber-700">📘 Guia Litúrgico</h2>
          <p className="text-gray-700">
            Entenda cada parte da Missa de forma simples e profunda.
          </p>
        </Link>

        {/* Curso de Violão */}
        <a
          href="https://aprenderviolaoonline.com.br/"
          target="_blank"
          className="block bg-amber-600 text-black font-semibold shadow-lg rounded-2xl p-6
                hover:bg-amber-500 transition flex flex-col items-center gap-2"
        >
          <h2 className="text-xl font-bold">🎸 Aprender Violão Online</h2>
          <p className="text-black/90">
            Um guia completo com teoria e fundamentos do violão, ideal para quem está começando ou deseja relembrar conteúdos importantes.
          </p>
        </a>
      </section>
    </>
  );
}
