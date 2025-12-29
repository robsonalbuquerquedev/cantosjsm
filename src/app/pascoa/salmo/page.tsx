import SalmoContent from "@/components/liturgia/SalmoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Salmo",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/salmo"
});

export default function PascoaSalmoPage() {
    return <SalmoContent liturgicalSeason="pascoa" />;
}
