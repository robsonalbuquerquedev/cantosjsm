import CordeiroContent from "@/components/liturgia/CordeiroContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Cordeiro",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/cordeiro"
});

export default function TempoComumCordeiroPage() {
    return <CordeiroContent liturgicalSeason="tempo-comum" />;
}
