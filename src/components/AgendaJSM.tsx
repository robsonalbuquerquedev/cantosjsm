"use client";

import Link from "next/link";
import { CalendarDays, Clock, MapPin, FolderOpen } from "lucide-react";
import { agendaData } from "@/data/agenda";

export default function AgendaJSM() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-amber-300 mb-2">
                Agenda JSM
            </h1>

            <p className="text-sm text-white mb-6">
                Quadro de avisos com as datas em que a Juventude de Santa Maria
                estará servindo. Os materiais ficam em pastas privadas no Drive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agendaData.map((item, index) => (
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

                        {item.status === "active" && item.href ? (
                            <Link
                                href={item.href}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:underline"
                            >
                                <FolderOpen size={18} />
                                Acessar pasta no Drive
                            </Link>
                        ) : (
                            <span className="text-sm text-gray-500 italic">
                                Materiais em preparação
                            </span>
                        )}

                        <p className="text-xs text-gray-500 mt-3">
                            ⚠️ A pasta é privada. Apenas membros com acesso autorizado
                            poderão visualizar os arquivos.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
