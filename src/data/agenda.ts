// src/data/agenda.ts

export interface AgendaItem {
    date: string;
    time: string;
    group: string;
    place: string;
    href?: string;
    status: "active" | "coming-soon";
}

export const agendaData: AgendaItem[] = [
    {
        date: "02/01/2026",
        time: "19h",
        group: "Juventude de Santa Maria (JSM)",
        place: "Paróquia de Sant'Ana – Ribeirão",
        href: "https://drive.google.com/drive/folders/1piiDYM-09UgReFzNS8ATcW_cZFPqXdRD?usp=sharing",
        status: "active",
    },
    {
        date: "03/01/2026",
        time: "19h",
        group: "Juventude de Santa Maria (JSM)",
        place: "Capela de São Pedro e São Paulo – Ribeirão",
        href: "https://drive.google.com/SEU-LINK-AQUI",
        status: "coming-soon",
    },
    {
        date: "11/01/2026",
        time: "19h",
        group: "Juventude de Santa Maria (JSM)",
        place: "Paróquia de Sant'Ana – Ribeirão",
        status: "coming-soon",
    },
];
