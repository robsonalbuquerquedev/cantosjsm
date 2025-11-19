// src/components/BreadcrumbInjector.tsx
"use client";

import { usePathname } from "next/navigation";
import { generateBreadcrumbList } from "@/lib/generateBreadcrumb";

export default function BreadcrumbInjector() {
    const pathname = usePathname();
    const breadcrumbJson = generateBreadcrumbList(pathname);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJson),
            }}
        />
    );
}
