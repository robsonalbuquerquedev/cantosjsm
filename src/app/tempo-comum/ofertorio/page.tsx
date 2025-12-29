import OfertorioContent from "@/components/liturgia/OfertorioContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ofertório",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/ofertorio"
});

export default function TempoComumOfertorioPage() {
    return <OfertorioContent liturgicalSeason="tempo-comum" />;
}
