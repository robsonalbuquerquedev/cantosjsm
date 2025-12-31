import { ReactNode } from "react";

interface FormacaoLiturgicaLayoutProps {
    children: ReactNode;
}

export default function FormacaoLiturgicaLayout({
    children,
}: FormacaoLiturgicaLayoutProps) {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div
                className="
                    grid
                    gap-8
                    sm:grid-cols-2
                    lg:grid-cols-3
                "
            >
                {children}
            </div>
        </section>
    );
}
