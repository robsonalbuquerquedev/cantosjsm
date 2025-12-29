import AmemContent from "@/components/liturgia/AmemContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Amém",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/amem"
});

export default function TempoComumAmemPage() {
    return <AmemContent liturgicalSeason="tempo-comum" />;
}
