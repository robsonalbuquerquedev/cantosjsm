import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://cantosjsm.com.br";

    // Rotas institucionais
    const institucionais = [
        "",
        "sobre",
        "contato",
        "agradecimentos",
        "politica-de-privacidade",
        "termos-de-uso",
        "guia-liturgico",
    ];

    // Rotas de cantos (Partes da Missa + especiais)
    const cantos = [
        "entrada",
        "ato-penitencial",
        "salmo",
        "gloria",
        "aclamacao",
        "ofertorio",
        "santo",
        "amen",
        "cordeiro",
        "comunhao",
        "final",
        "hinos",
        "marianas",
        "espirito-santo",
        "adoracao",
        "padroeiro-da-cidade",
    ];

    return [
        // Institucionais
        ...institucionais.map((rota) => ({
            url: `${baseUrl}/${rota}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: rota === "" ? 1.0 : 0.8,
        })),

        // Cantos
        ...cantos.map((rota) => ({
            url: `${baseUrl}/${rota}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        })),
    ];
}
