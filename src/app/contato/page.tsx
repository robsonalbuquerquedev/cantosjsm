"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Loader2 } from "lucide-react";
import Image from "next/image";

export default function ContatoPage() {
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const response = await fetch(
            "https://formsubmit.co/ajax/00e62b2eb50670b440cf470c86da243f",
            {
                method: "POST",
                body: formData,
            }
        );

        setIsSending(false);
        setSent(response.ok);
        form.reset();
    }

    return (
        <main className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10">

            {/* 🎨 Lado esquerdo – Mensagem + Ícones litúrgicos */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex flex-col space-y-6 text-white"
            >
                <h1 className="text-4xl font-bold text-amber-300">
                    Entre em contato com a JSM
                </h1>

                <p className="text-lg leading-relaxed">
                    Este espaço foi criado especialmente para receber suas{" "}
                    <span className="text-amber-200 font-semibold">sugestões de músicas</span>,
                    letras que ainda não foram adicionadas e também{" "}
                    <span className="text-amber-200 font-semibold">feedbacks</span> sobre o
                    projeto CantosJSM.
                </p>

                <p className="text-lg leading-relaxed">
                    A JSM faz parte do carisma das Irmãs de Santa Maria — uma congregação
                    presente no mundo todo — e este site nasceu da nossa vivência real:
                    sentimos diariamente a dificuldade de buscar cantos para ensaios e
                    missas. Se nos ajuda, certamente pode ajudar muitos outros ministérios.
                </p>

                {/* 🕊️ Ilustração litúrgica */}
                <div className="flex items-center justify-center mt-6">
                    <Image
                        src="/liturgia.png"
                        alt="Ilustração litúrgica"
                        width={250}
                        height={250}
                        className="opacity-90 drop-shadow-xl"
                    />
                </div>

                {/* 🌐 Redes sociais */}
                <div className="mt-4 space-y-2">
                    <h2 className="text-xl font-semibold text-amber-300">
                        Nossos Instagrams
                    </h2>

                    <a
                        href="https://www.instagram.com/juventudesantamaria/"
                        target="_blank"
                        className="flex items-center gap-2 text-gray-200 hover:text-amber-300 transition"
                    >
                        <Instagram /> juventudesantamaria
                    </a>

                    <a
                        href="https://www.instagram.com/ismnbrasil/"
                        target="_blank"
                        className="flex items-center gap-2 text-gray-200 hover:text-amber-300 transition"
                    >
                        <Instagram /> ismbrasil
                    </a>
                </div>
            </motion.div>

            {/* 📝 Lado direito – Formulário estilizado no padrão sólido */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 w-full bg-white text-black rounded-2xl p-8 md:p-10 shadow-xl border-l-4 border-amber-400"
            >
                <h2 className="text-2xl font-bold mb-4 text-amber-700">
                    Envie sua mensagem
                </h2>

                {/* Feedback de sucesso */}
                {sent && (
                    <div className="mb-4 text-green-600 font-semibold">
                        Sua mensagem foi enviada com sucesso! Obrigado! 🌟
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="nome"
                        required
                        placeholder="Seu nome"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                    />

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Seu e-mail"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                    />

                    <textarea
                        name="mensagem"
                        rows={6}
                        required
                        placeholder="Sugestões de músicas, letras novas, mensagens..."
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-amber-600 hover:bg-amber-500 transition px-4 py-3 rounded-xl font-semibold text-black shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {isSending ? (
                            <>
                                <Loader2 className="animate-spin" size={18} />
                                Enviando...
                            </>
                        ) : (
                            "Enviar mensagem"
                        )}
                    </button>
                </form>
            </motion.div>
        </main>
    );
}
