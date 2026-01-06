export interface FormacaoItem {
    title: string;
    description: string;
    status: "coming-soon" | "active";
    href?: string;
}

export const formacaoData: FormacaoItem[] = [
    {
        title: "Canto Litúrgico × Canto Religioso",
        description:
            "Entenda as diferenças entre o canto que serve à ação litúrgica da Igreja e o canto de devoção religiosa.",
        status: "coming-soon",
    },
    {
        title: "Solenidades",
        description:
            "Conheça as maiores celebrações do calendário litúrgico e o seu significado para a Igreja.",
        status: "coming-soon",
    },
    {
        title: "Dia de Reis (Epifania do Senhor)",
        description:
            "Entenda o significado litúrgico da Epifania, os símbolos dos Reis Magos, a estrela, os dons e os cantos próprios desta celebração.",
        status: "coming-soon",
    },
    {
        title: "Histórias dos Santos",
        description:
            "A vida, o testemunho e a espiritualidade dos santos que marcaram a história da Igreja.",
        status: "coming-soon",
    },
    {
        title: "Símbolos da Liturgia",
        description:
            "Descubra o significado dos objetos, cores e sinais usados nas celebrações litúrgicas.",
        status: "coming-soon",
    },
    {
        title: "Gestos da Missa",
        description:
            "Entenda os gestos, posturas e atitudes corporais que expressam a fé durante a Missa.",
        status: "coming-soon",
    },
];
