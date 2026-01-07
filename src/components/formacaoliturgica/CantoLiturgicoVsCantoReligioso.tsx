"use client";

import { motion } from "framer-motion";
import { Church, Heart, Scale, } from "lucide-react";

export default function CantoLiturgicoVsCantoReligioso() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl w-full bg-white text-black rounded-2xl p-10 shadow-xl border-l-4 border-amber-400 space-y-6 relative fade-in-up-30d">

                {/* Faixa decorativa */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                <header className="text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-700">
                        Canto Litúrgico × Canto Religioso
                    </h1>

                    <p className="text-gray-600">
                        Entenda a diferença entre o canto que serve diretamente à ação litúrgica
                        da Igreja e o canto voltado à devoção religiosa.
                    </p>
                </header>

                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Church className="w-6 h-6 text-amber-800" />
                        <h2 className="text-2xl font-semibold text-amber-800">
                            O que é o Canto Litúrgico?
                        </h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        O canto litúrgico nasce para servir à própria liturgia. Ele não está
                        apenas presente na Missa — ele faz parte da celebração e do rito.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Seu texto, ritmo e forma acompanham os momentos litúrgicos e ajudam
                        toda a assembleia a rezar como Igreja.
                    </p>
                </section>

                <section className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Heart className="w-6 h-6 text-amber-800" />
                        <h2 className="text-2xl font-semibold text-amber-800">
                            O que é o Canto Religioso?
                        </h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        O canto religioso expressa a fé pessoal, a devoção e os sentimentos
                        individuais do cristão.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Ele é muito usado em encontros de oração, retiros, novenas e momentos
                        de evangelização, fora da ação litúrgica.
                    </p>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Scale className="w-6 h-6 text-amber-800" />
                        <h2 className="text-2xl font-semibold text-amber-800">
                            Principais Diferenças
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 rounded-lg text-left">
                            <thead className="bg-amber-100">
                                <tr>
                                    <th className="p-3 font-semibold text-amber-700">Canto Litúrgico</th>
                                    <th className="p-3 font-semibold text-amber-700">Canto Religioso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-3">Serve ao rito litúrgico</td>
                                    <td className="p-3">Serve à devoção pessoal</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">Integrado à Missa</td>
                                    <td className="p-3">Usado fora da liturgia</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">Caráter comunitário e objetivo</td>
                                    <td className="p-3">Caráter subjetivo e emocional</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-3">Segue textos e momentos do rito</td>
                                    <td className="p-3">Tema livre</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <footer>
                    <p className="text-gray-700 italic">
                        Ambos os cantos têm valor na vida da Igreja. Conhecer sua finalidade
                        ajuda a respeitar a liturgia e a escolher bem cada música.
                    </p>
                </footer>
            </motion.article>
        </section>
    );
}
