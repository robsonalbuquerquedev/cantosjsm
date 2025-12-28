import Link from "next/link";

interface LiturgicalTime {
    key: string;
    label: string;
    icon: React.ElementType;
}

interface DevotionalSection {
    label: string;
    path: string;
    icon: React.ElementType;
}

interface Props {
    liturgicalTimes: LiturgicalTime[];
    devotionalSections: DevotionalSection[];
}

export default function LiturgicalDevotionalSplit({
    liturgicalTimes,
    devotionalSections,
}: Props) {
    return (
        <section className="w-full mt-20 space-y-10">
            {/* Container visual unificado */}
            <article className="relative bg-white rounded-2xl shadow-xl p-10 space-y-12 border-l-4 border-amber-400">
                {/* Barra decorativa superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* 🟨 Liturgia */}
                    <section className="space-y-5 fade-in-left">
                        <h2 className="text-2xl font-extrabold text-amber-700">
                            Liturgia da Missa
                        </h2>

                        <p className="text-gray-600 max-w-md">
                            Cantos organizados conforme o tempo litúrgico e o ritmo da Igreja.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                            {liturgicalTimes.map(({ key, label, icon: Icon }) => (
                                <Link
                                    key={key}
                                    href={`/${key}`}
                                    className="
                                        bg-white
                                        text-black
                                        p-5
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        shadow-md
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                        transition-all
                                        flex
                                        flex-col
                                        items-center
                                        gap-3
                                    "
                                >
                                    <Icon size={28} className="text-amber-600" />
                                    <span className="font-semibold text-center">
                                        {label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* 🟦 Devocionais */}
                    <section className="space-y-5 fade-in-right">
                        <h2 className="text-2xl font-extrabold text-amber-700">
                            Cantos Devocionais
                        </h2>

                        <p className="text-gray-600 max-w-md">
                            Cantos para momentos de oração, devoção e espiritualidade popular.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                            {devotionalSections.map(({ label, path, icon: Icon }) => (
                                <Link
                                    key={path}
                                    href={path}
                                    className="
                                        bg-white
                                        text-black
                                        p-5
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        shadow-md
                                        hover:shadow-xl
                                        hover:-translate-y-1
                                        transition-all
                                        flex
                                        flex-col
                                        items-center
                                        gap-3
                                    "
                                >
                                    <Icon size={28} className="text-amber-600" />
                                    <span className="font-semibold text-center">
                                        {label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </article>
        </section>
    );
}
