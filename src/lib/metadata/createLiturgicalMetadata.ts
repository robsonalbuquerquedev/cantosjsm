import type { Metadata } from "next";

type LiturgicalMetadataProps = {
    part: string;
    season: string;
    canonical: string;
};

export function createLiturgicalMetadata({
    part,
    season,
    canonical,
}: LiturgicalMetadataProps): Metadata {
    return {
        title: {
            absolute: `Cantos de ${part} | ${season} — Cantos Litúrgicos`
        },

        description: `Encontre cantos litúrgicos de ${part.toLowerCase()} para o tempo do ${season.toLowerCase()}, organizados conforme a liturgia da Missa. Conteúdo ideal para ministérios de música e celebrações.`,

        keywords: [
            `cantos de ${part.toLowerCase()}`,
            `músicas para ${part.toLowerCase()} da missa`,
            `cantos litúrgicos ${season.toLowerCase()}`,
            `ministério de música ${season.toLowerCase()}`,
            `${part.toLowerCase()} missa`
        ],

        alternates: {
            canonical
        }
    };
}
