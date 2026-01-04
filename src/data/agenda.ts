// src/data/agenda.ts

export interface AgendaItem {
    date: string;
    time: string;
    group: string;
    place: string;
    href?: string;
    status: "active" | "coming-soon" | "completed";
}

export const agendaData: AgendaItem[] = [
    {
        date: "02/01/2026",
        time: "19h",
        group: "Juventude de Santa Maria (JSM)",
        place: "Paróquia de Sant'Ana – Ribeirão",
        href: "https://drive.google.com/file/d/1U_2gMIF7Vui9MakX9yXHkSXax3ScHH2y/view?usp=sharing",
        status: "completed",
    },
    {
        date: "03/01/2026",
        time: "19h",
        group: "Juventude de Santa Maria (JSM)",
        place: "Capela de São Pedro e São Paulo – Ribeirão",
        href: "https://drive.google.com/drive/folders/1piiDYM-09UgReFzNS8ATcW_cZFPqXdRD?usp=sharing",
        status: "completed",
    },
    {
        date: "11/01/2026",
        time: "19h",
        group: "Juventude de Santa Maria (JSM)",
        place: "Paróquia de Sant'Ana – Ribeirão",
        href: "https://drive.google.com/file/d/1U_2gMIF7Vui9MakX9yXHkSXax3ScHH2y/view?usp=sharing",
        status: "coming-soon",
    },
];
