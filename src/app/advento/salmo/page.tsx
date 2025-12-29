import SalmoContent from "@/components/liturgia/SalmoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Salmo",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/salmo"
});

export default function AdventoSalmoPage() {
    return <SalmoContent liturgicalSeason="advento" />;
}
