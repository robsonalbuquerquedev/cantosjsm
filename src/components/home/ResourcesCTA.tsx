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

            {/* Cantos da Missa – Ministério JSM */}
            {/* <Link
                href="/cantos-da-jsm"
                className="
        block
        bg-white
        border-l-4 border-rose-500
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
                <h2 className="text-xl font-bold text-rose-700">
                    🎶 Cantos da Missa – Ministério JSM
                </h2>
                <p className="text-gray-700">
                    Acesse os cantos que utilizamos na Missa: organizados por momento litúrgico,
                    prontos para inspirar outros ministérios, com PDF para download.
                </p>
            </Link> */}

            {/* Cantos da Missa – Ministério JSM (Em breve) */}
            <div
                className="
        block
        bg-white
        border-l-4 border-rose-300
        shadow-md
        rounded-2xl
        p-6
        opacity-80
        cursor-not-allowed
        flex
        flex-col
        items-center
        gap-3
    "
            >
                <span className="text-xs uppercase tracking-wide text-rose-500 font-semibold">
                    Em breve
                </span>

                <h2 className="text-xl font-bold text-rose-600">
                    🎶 Cantos da Missa – Ministério JSM
                </h2>

                <p className="text-gray-600 text-center">
                    Os cantos que utilizamos na Missa, organizados por momento litúrgico,
                    para inspirar outros ministérios. Conteúdo em preparação.
                </p>
            </div>
            
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
