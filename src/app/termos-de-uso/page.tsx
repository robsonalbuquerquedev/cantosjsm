import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Termos de Uso | CantosJSM"
    },
    description:
        "Leia os Termos de Uso do CantosJSM e entenda as regras, responsabilidades e condições de uso da plataforma criada por Robson Albuquerque em parceria com a Juventude de Santa Maria (JSM).",
    keywords: [
        "Termos de Uso",
        "Regras da Plataforma",
        "Condições de Uso",
        "Uso do CantosJSM",
        "Direitos e Responsabilidades",
        "Cantos Litúrgicos",
        "CantosJSM",
        "Robson Albuquerque",
        "Juventude de Santa Maria"
    ],
    alternates: {
        canonical: "https://cantosjsm.com.br/termos-de-uso"
    },
    openGraph: {
        title: "Termos de Uso | CantosJSM",
        description:
            "Confira as condições e diretrizes para utilização da plataforma CantosJSM, desenvolvida por Robson Albuquerque e pela Juventude de Santa Maria (JSM).",
        url: "https://cantosjsm.com.br/termos-de-uso",
        siteName: "CantosJSM",
        images: [
            {
                url: "https://cantosjsm.com.br/og-termos-uso.png",
                width: 1200,
                height: 630,
                alt: "Termos de Uso - CantosJSM"
            }
        ],
        locale: "pt_BR",
        type: "article"
    },
    twitter: {
        card: "summary_large_image",
        title: "Termos de Uso | CantosJSM",
        description:
            "Saiba todas as regras, diretrizes e condições para utilizar os recursos do CantosJSM com segurança e clareza.",
        images: ["https://cantosjsm.com.br/og-termos-uso.png"]
    }
};

export default function TermosDeUsoPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-20">
            <article className="max-w-4xl w-full bg-white text-black rounded-2xl p-8 md:p-10 shadow-xl border-l-4 border-amber-400 space-y-8">

                {/* Cabeçalho */}
                <header className="space-y-1 mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Termos de Uso — CantosJSM
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

                {/* 1. Aceitação */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">1. Aceitação dos Termos</h2>
                    <p className="leading-relaxed">
                        Ao acessar e utilizar o site <strong>CantosJSM</strong>, o usuário declara
                        estar de acordo com estes Termos de Uso. Caso não concorde com algum item,
                        recomenda-se interromper imediatamente o uso do site.
                    </p>
                </section>

                {/* 2. Finalidade do Projeto */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">2. Finalidade do Projeto</h2>
                    <p className="leading-relaxed">
                        O CantosJSM é um projeto desenvolvido pela{" "}
                        <strong>Juventude de Santa Maria (JSM)</strong>, com o objetivo de facilitar
                        o acesso a cantos litúrgicos para uso pastoral, ensaios, encontros,
                        celebrações e formações religiosas.
                    </p>
                    <p className="leading-relaxed">
                        O site é disponibilizado gratuitamente para a comunidade e para quem desejar
                        utilizar seu conteúdo de maneira pastoral e não comercial.
                    </p>
                </section>

                {/* 3. Uso Permitido */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">3. Uso Permitido</h2>
                    <p className="leading-relaxed">É permitido ao usuário:</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        <li>Acessar e visualizar cantos litúrgicos</li>
                        <li>Utilizar o site para apoio pastoral e musical</li>
                        <li>Compartilhar links do site com grupos religiosos</li>
                        <li>Enviar sugestões de músicas pelo formulário</li>
                    </ul>
                    <p className="leading-relaxed">
                        Todo uso deve respeitar os direitos autorais e as diretrizes descritas
                        nesta página e na Política de Privacidade.
                    </p>
                </section>

                {/* 4. Uso Proibido */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">4. Uso Proibido</h2>
                    <p className="leading-relaxed">É proibido ao usuário:</p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        <li>Reproduzir ou redistribuir letras protegidas por direitos autorais</li>
                        <li>
                            Copiar trechos completos de músicas para fins comerciais sem autorização
                        </li>
                        <li>Fazer download automatizado do conteúdo do site</li>
                        <li>Tentar modificar, invadir ou prejudicar o funcionamento do site</li>
                        <li>Utilizar o nome CantosJSM para fins comerciais sem permissão</li>
                    </ul>
                </section>

                {/* 5. Titularidade do Conteúdo */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">5. Titularidade do Conteúdo</h2>
                    <p className="leading-relaxed">
                        O conteúdo original do site (design, organização, textos, códigos e
                        ilustrações) pertence à JSM.
                    </p>
                    <p className="leading-relaxed">
                        Letras de músicas são exibidas de acordo com sua situação jurídica:
                    </p>
                    <ul className="list-disc list-inside space-y-1 leading-relaxed">
                        <li>
                            Trechos de obras protegidas são exibidos conforme permitido pela lei
                        </li>
                        <li>
                            Letras completas são exibidas apenas em músicas de domínio público ou
                            obras originais/autorais
                        </li>
                        <li>
                            Links externos são sempre informados para acesso à letra integral quando
                            necessário
                        </li>
                    </ul>
                </section>

                {/* 6. Direito de Imagem */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">6. Direito de Imagem</h2>
                    <p className="leading-relaxed">
                        As imagens utilizadas no site (background, logo, fotos institucionais)
                        são exibidas com autorização prévia dos membros participantes.
                    </p>
                    <p className="leading-relaxed">
                        Caso algum participante deseje remover sua imagem, poderá solicitar alteração
                        conforme seção 9 destes Termos.
                    </p>
                </section>

                {/* 7. Responsabilidade do Usuário */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">
                        7. Responsabilidade do Usuário
                    </h2>
                    <p className="leading-relaxed">
                        O usuário é responsável por garantir que seu uso do site esteja de acordo
                        com as leis aplicáveis e com estes Termos.
                    </p>
                </section>

                {/* 8. Limitação de Responsabilidade */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">
                        8. Limitação de Responsabilidade
                    </h2>
                    <p className="leading-relaxed">
                        O CantosJSM é um projeto comunitário, sem fins lucrativos. Embora buscamos
                        manter o site sempre atualizado e funcional, não podemos garantir ausência de
                        erros, indisponibilidade temporária ou informações desatualizadas.
                    </p>
                </section>

                {/* 9. Solicitações e Remoções */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">
                        9. Solicitações, Remoções e Contato
                    </h2>
                    <p className="leading-relaxed">
                        Para solicitações de dados, remoção de imagem, atualização de informações ou
                        dúvidas gerais, entre em contato através de:
                    </p>
                    <p className="font-semibold">📧 jsmribeiraope@gmail.com</p>
                </section>

                {/* 10. Alterações */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">
                        10. Alterações destes Termos
                    </h2>
                    <p className="leading-relaxed">
                        Estes Termos podem ser modificados a qualquer momento para adequações legais,
                        melhorias do projeto ou mudanças no funcionamento do site.
                    </p>
                </section>

                {/* 11. Aceitação */}
                <section className="space-y-3">
                    <h2 className="text-xl font-bold text-amber-700">
                        11. Aceitação dos Termos
                    </h2>
                    <p className="leading-relaxed">
                        Ao utilizar o CantosJSM, o usuário declara ter lido, compreendido e aceitado
                        integralmente estes Termos de Uso.
                    </p>
                </section>
            </article>
        </main>
    );
}
