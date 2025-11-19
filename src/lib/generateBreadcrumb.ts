// src/lib/generateBreadcrumb.ts

import { breadcrumbMap } from "./breadcrumb-map";

export function generateBreadcrumbList(pathname: string) {
    const parts = pathname.split("/").filter(Boolean);

    const itemListElement = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://cantosjsm.com.br",
        },
    ];

    let currentPath = "";

    parts.forEach((part, index) => {
        currentPath += "/" + part;

        itemListElement.push({
            "@type": "ListItem",
            position: index + 2,
            name: breadcrumbMap[part] || part,
            item: `https://cantosjsm.com.br${currentPath}`,
        });
    });

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement,
    };
}
