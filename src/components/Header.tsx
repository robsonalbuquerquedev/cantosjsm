"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-blue-600 text-white px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Cantos JSM</h1>
            <Link
                href="/add"
                className="flex items-center bg-green-500 hover:bg-green-600 px-3 py-2 rounded transition-colors"
            >
                <FaPlus className="mr-2" />
                Adicionar Música
            </Link>
        </header>
    );
}
