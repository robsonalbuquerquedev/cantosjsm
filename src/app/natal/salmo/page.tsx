import SalmoContent from "@/components/liturgia/SalmoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Salmo",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/salmo"
});

export default function NatalSalmoPage() {
    return <SalmoContent liturgicalSeason="natal" />;
}
