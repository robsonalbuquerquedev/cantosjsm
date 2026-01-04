"use client";

import { useState } from "react";
import Link from "next/link";
import {
    CalendarDays,
    Clock,
    MapPin,
    FolderOpen,
    CheckCircle,
} from "lucide-react";
import { agendaData } from "@/data/agenda";

const ITEMS_PER_PAGE = 4;

export default function AgendaJSM() {
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedAgenda = agendaData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(agendaData.length / ITEMS_PER_PAGE);

    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-amber-300 mb-2">
                Agenda do Ministério de Música JSM
            </h1>

            <p className="text-sm text-white mb-6">
                Agenda com as datas em que a Juventude de Santa Maria exerce seu serviço
                musical, principalmente cantando nas celebrações litúrgicas e, quando
                necessário, em outras missões pastorais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedAgenda.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm"
                    >
                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                            <CalendarDays size={16} />
                            {item.date}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                            <Clock size={16} />
                            {item.time}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                            <MapPin size={16} />
                            {item.place}
                        </div>

                        <p className="font-semibold text-sm mb-3">
                            {item.group}
                        </p>

                        {item.status === "active" && item.href && (
                            <div className="flex flex-col gap-1">
                                <Link
                                    href={item.href}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:underline"
                                >
                                    <FolderOpen size={18} />
                                    Acessar o material de música em PDF
                                </Link>

                                <span className="text-xs text-gray-500 italic">
                                    Letras completas dos cantos • Disponível apenas no dia da celebração
                                </span>
                            </div>
                        )}

                        {item.status === "completed" && (
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                                <CheckCircle size={18} />
                                Serviço concluído
                            </span>
                        )}

                        {item.status === "coming-soon" && (
                            <span className="text-sm text-gray-500 italic">
                                Materiais em preparação
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 0}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-200 disabled:opacity-50 cursor-pointer"
                >
                    Anterior
                </button>

                <span className="text-sm text-white">
                    Página {currentPage + 1} de {totalPages}
                </span>

                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage + 1 >= totalPages}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-200 disabled:opacity-50 cursor-pointer"
                >
                    Próximo
                </button>
            </div>
        </section>
    );
}
