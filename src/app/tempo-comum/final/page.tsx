import FinalContent from "@/components/liturgia/FinalContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Final",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/final"
});

export default function TempoComumfinalPage() {
    return <FinalContent liturgicalSeason="tempo-comum" />;
}
