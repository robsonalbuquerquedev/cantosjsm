import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CantosJSM",
  description: "Banco de cantos litúrgicos colaborativo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen relative">
        {/* Background fixo e responsivo */}
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/background.jpg")' }}
        ></div>

        {/* Overlay sutil para melhorar a legibilidade */}
        <div className="fixed inset-0 -z-10 bg-black opacity-30"></div>

        <Header />
        <main className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-6 relative text-white">
          {/* Aplica sombra aos textos */}
          <div className="prose prose-invert drop-shadow-lg w-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
