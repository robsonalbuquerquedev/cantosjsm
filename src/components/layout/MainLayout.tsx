import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* 🌄 Background fixo */}
            <div
                className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/background.jpg")' }}
            />

            {/* Overlay para contraste */}
            <div className="fixed inset-0 -z-10 bg-black/50" />

            {/* Header semântico */}
            <header className="relative z-20">
                <Header />
            </header>

            {/* Conteúdo principal */}
            <main className="relative z-10 flex-1 w-full px-5 sm:px-6 md:px-8 py-16">
                <div className="mx-auto max-w-6xl">
                    {children}
                </div>
            </main>

            {/* Footer semântico */}
            <footer className="relative z-20 mt-10">
                <Footer />
            </footer>
        </div>
    );
}
