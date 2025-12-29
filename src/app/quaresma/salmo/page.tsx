import SalmoContent from "@/components/liturgia/SalmoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Salmo",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/salmo"
});

export default function QuaresmaSalmoPage() {
    return <SalmoContent liturgicalSeason="quaresma" />;
}
