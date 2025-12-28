import { ReactNode } from "react";

interface LayoutCardProps {
    children: ReactNode;
}

export default function LayoutCard({ children }: LayoutCardProps) {
    return (
        <section className="
    relative
    max-w-5xl mx-auto mt-10
    shadow-xl
    rounded-2xl
    overflow-hidden
    border-l-4 border-amber-400
">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-t-2xl" />

            <div className="bg-white p-8">
                {children}
            </div>
        </section>
    );
}
