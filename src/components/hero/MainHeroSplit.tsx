import VerseBox from "@/components/ui/VerseBox";

export default function MainHeroSplit() {
    return (
        <article
            className="
                w-full
                bg-white text-black
                rounded-2xl
                p-10
                shadow-xl
                border-l-4 border-amber-400
                space-y-6
                relative
                fade-in-left
            "
        >
            {/* Barra decorativa superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

            <div className="flex flex-col items-center md:items-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-amber-700 drop-shadow-sm">
                    Bem-vindo ao <span className="bg-gradient-to-r from-amber-700 to-yellow-600 bg-clip-text text-transparent">CantosJSM</span>
                </h1>

                <p className="text-lg leading-relaxed text-gray-700 max-w-2xl">
                    Um espaço criado com carinho para ajudar ministérios de música a
                    encontrarem cantos litúrgicos e devocionais com facilidade —
                    organizados por momento da missa e por categorias espirituais,
                    com trechos permitidos, tom e cifras opcionais.
                </p>
            </div>

            <VerseBox />

            <div className="flex justify-center mt-4">
                <a
                    href="#recursos"
                    className="bg-amber-600 hover:bg-amber-500 text-black font-semibold px-5 py-3 rounded-xl shadow transition-all"
                >
                    Explorar Conteúdos Especiais
                </a>
            </div>
        </article>
    );
}
