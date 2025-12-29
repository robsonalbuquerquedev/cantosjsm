import SantoContent from "@/components/liturgia/SantoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Santo",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/santo"
});

export default function TempoComumSantoPage() {
    return <SantoContent liturgicalSeason="tempo-comum" />;
}
