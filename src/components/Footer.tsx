export default function Footer() {
    return (
        <footer className="bg-gray-100 py-4 mt-10">
            <div className="container mx-auto px-4 text-center text-gray-600">
                © {new Date().getFullYear()} JSM - Todos os direitos reservados
            </div>
        </footer>
    );
}
