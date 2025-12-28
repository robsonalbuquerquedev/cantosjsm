"use client";

import Link from "next/link";
import {
    DoorOpen,
    HandHeart,
    Wine,
    Flag,
    HandHelping,
    Sun,
    BookOpenCheck,
    Megaphone,
    Sparkles,
    CheckCircle2,
    BadgeCheck,
} from "lucide-react";

interface CardContentLiturgicalProps {
    basePath: string; // ex: "advento", "natal", "tempo-comum"
}

const variableParts = [
    { key: "entrada", label: "Entrada", icon: DoorOpen },
    { key: "ofertorio", label: "Ofertório", icon: HandHeart },
    { key: "comunhao", label: "Comunhão", icon: Wine },
    { key: "pos-comunhao", label: "Pós-Comunhão", icon: Wine },
    { key: "final", label: "Final", icon: Flag },
];

const fixedParts = [
    { key: "ato-penitencial", label: "Ato Penitencial", icon: HandHelping },
    { key: "gloria", label: "Glória", icon: Sun },
    { key: "salmo", label: "Salmo", icon: BookOpenCheck },
    { key: "aclamacao", label: "Aclamação", icon: Megaphone },
    { key: "santo", label: "Santo", icon: Sparkles },
    { key: "amem", label: "Amém", icon: CheckCircle2 },
    { key: "cordeiro", label: "Cordeiro", icon: BadgeCheck },
];

export default function CardContentLiturgical({
    basePath,
}: CardContentLiturgicalProps) {
    const parts = [...variableParts, ...fixedParts];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parts.map((part) => {
                const Icon = part.icon;

                return (
                    <Link
                        key={part.key}
                        href={`/${basePath}/${part.key}`}
                        className="
        group
        bg-white
        rounded-xl
        border
        border-gray-100
        p-6
        transition
        hover:shadow-lg
        hover:-translate-y-1
        flex
        items-center
        gap-4
    "
                    >

                        <div className="
    p-3 
    rounded-full 
    bg-amber-50 
    text-amber-600 
    group-hover:bg-amber-100 
    transition
">
                            <Icon size={24} />
                        </div>


                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {part.label}
                            </h3>
                            <p className="text-sm text-gray-500">
                                Ver cantos desta parte da missa
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
