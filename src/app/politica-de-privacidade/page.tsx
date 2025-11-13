export default function PoliticaDePrivacidadePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20">
            <article className="max-w-4xl w-full bg-white text-black rounded-2xl p-8 md:p-10 shadow-xl border-l-4 border-amber-400 space-y-8">

                {/* Cabeçalho */}
                <header className="space-y-1 mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Política de Privacidade — CantosJSM
                    </h1>

                    <p className="text-sm text-gray-600">
                        Última atualização:{" "}
                        <span className="font-semibold">
                            {new Date().toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </p>
                </header>

                {/* 1. Introdução */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">1. Introdução</h2>
                    <p className="leading-relaxed">
                        O <strong>CantosJSM</strong> é um projeto desenvolvido pela{" "}
                        <strong>Juventude de Santa Maria (JSM)</strong> com o objetivo de
                        facilitar o acesso a cantos litúrgicos para uso comunitário e pastoral.
                    </p>
                    <p className="leading-relaxed">
                        Ao acessar nosso site, você declara estar ciente e de acordo com esta Política.
                    </p>
                </section>

                {/* 2. Coleta */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">2. Coleta de Informações</h2>

                    <h3 className="text-lg font-semibold text-amber-600">
                        2.1. Dados fornecidos voluntariamente
                    </h3>
                    <p className="leading-relaxed">
                        Coletamos dados enviados através de formulários, como:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        <li>Nome</li>
                        <li>E-mail</li>
                        <li>Conteúdo da mensagem</li>
                        <li>Sugestões enviadas ao projeto</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-amber-600">
                        2.2. Dados coletados automaticamente
                    </h3>
                    <p className="leading-relaxed">
                        Durante sua navegação, podem ser coletadas informações técnicas como:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        <li>Endereço IP</li>
                        <li>Tipo de navegador</li>
                        <li>Sistema operacional</li>
                        <li>Páginas visitadas</li>
                        <li>Uso de cookies essenciais</li>
                    </ul>
                </section>

                {/* 3. Cookies */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">3. Uso de Cookies</h2>
                    <p className="leading-relaxed">
                        Utilizamos cookies para melhorar a experiência, lembrar preferências e
                        gerar estatísticas de acesso.
                    </p>
                </section>

                {/* 4. Uso de dados */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">4. Uso dos Dados</h2>
                    <p className="leading-relaxed">
                        Os dados coletados são utilizados exclusivamente para:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        <li>Respondemos mensagens</li>
                        <li>Aprimoramos o site</li>
                        <li>Garantimos segurança</li>
                        <li>Geramos estatísticas internas</li>
                    </ul>
                </section>

                {/* 5. Direito de imagem */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">5. Direito de Imagem</h2>
                    <p className="leading-relaxed">
                        As imagens utilizadas (background, logo e fotos institucionais) são
                        exibidas sempre com autorização dos participantes.
                    </p>
                </section>

                {/* 6. Direito Autoral */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">6. Direito Autoral</h2>
                    <p className="leading-relaxed">
                        Exibimos apenas trechos permitidos de obras protegidas e letras completas
                        somente quando se trata de músicas de domínio público, obras originais da JSM
                        ou músicas com autorização expressa.
                    </p>
                </section>

                {/* 7. Segurança */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">7. Armazenamento e Segurança</h2>
                    <p className="leading-relaxed">
                        Tratamos dados de acordo com a LGPD, adotando medidas técnicas de proteção
                        contra acesso indevido, uso indevido ou destruição.
                    </p>
                </section>

                {/* 8. Direitos do usuário */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">8. Direitos do Usuário</h2>
                    <p className="leading-relaxed">
                        O usuário pode solicitar acesso, correção ou exclusão de seus dados pessoais.
                    </p>
                </section>

                {/* 9. Menores */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">9. Dados de Menores</h2>
                    <p className="leading-relaxed">
                        Não coletamos dados pessoais de menores sem autorização dos responsáveis.
                    </p>
                </section>

                {/* 10. Contato */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">10. Contato</h2>
                    <p className="leading-relaxed">
                        Para solicitações relacionadas à privacidade:
                    </p>
                    <p className="font-semibold">📧 contato.cantosjsm@gmail.com</p>
                </section>

                {/* 11. Alterações */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">11. Alterações desta Política</h2>
                    <p className="leading-relaxed">
                        Esta Política pode ser atualizada a qualquer momento para adequações
                        legais ou melhorias do projeto.
                    </p>
                </section>

                {/* 12. Aceite */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">12. Aceitação dos Termos</h2>
                    <p className="leading-relaxed">
                        Ao usar o CantosJSM, você concorda com esta Política de Privacidade.
                    </p>
                </section>
            </article>
        </main>
    );
}
