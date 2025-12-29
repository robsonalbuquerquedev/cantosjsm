import SalmoContent from "@/components/liturgia/SalmoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Salmo",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/salmo"
});

export default function TempoComumSalmoPage() {
    return <SalmoContent liturgicalSeason="tempo-comum" />;
}
