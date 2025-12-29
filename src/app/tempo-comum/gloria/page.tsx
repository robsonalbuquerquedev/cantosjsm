import GloriaContent from "@/components/liturgia/GloriaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Glória",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/gloria"
});

export default function TempoComumGloriaPage() {
    return <GloriaContent liturgicalSeason="tempo-comum" />;
}
