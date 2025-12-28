import Link from "next/link";

export default function ResourcesCTA() {
    return (
        <section
            id="recursos"
            className="px-6 py-20 max-w-4xl mx-auto text-center space-y-10"
        >
            {/* Guia do Rosário */}
            <Link
                href="/guia-do-rosario"
                className="
                    block
                    bg-white
                    border-l-4 border-amber-500
                    shadow-lg
                    rounded-2xl
                    p-6
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition
                    flex
                    flex-col
                    items-center
                    gap-2
                "
            >
                <h2 className="text-xl font-bold text-amber-700">
                    📿 Guia Completo do Rosário
                </h2>
                <p className="text-gray-700">
                    Aprenda a rezar cada mistério, todas as orações e o passo a passo completo.
                </p>
            </Link>

            {/* Guia Litúrgico */}
            <Link
                href="/guia-liturgico"
                className="
                    block
                    bg-white
                    border-l-4 border-amber-500
                    shadow-lg
                    rounded-2xl
                    p-6
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition
                    flex
                    flex-col
                    items-center
                    gap-2
                "
            >
                <h2 className="text-xl font-bold text-amber-700">
                    📘 Guia Litúrgico
                </h2>
                <p className="text-gray-700">
                    Entenda cada parte da Missa de forma simples e profunda.
                </p>
            </Link>

            {/* Curso de Violão */}
            <a
                href="https://aprenderviolaoonline.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                    block
                    bg-amber-600
                    text-black
                    font-semibold
                    shadow-lg
                    rounded-2xl
                    p-6
                    hover:bg-amber-500
                    transition
                    flex
                    flex-col
                    items-center
                    gap-2
                "
            >
                <h2 className="text-xl font-bold">
                    🎸 Aprender Violão Online
                </h2>
                <p className="text-black/90">
                    Um guia completo com teoria e fundamentos do violão, ideal para quem está começando ou deseja relembrar conteúdos importantes.
                </p>
            </a>
        </section>
    );
}
