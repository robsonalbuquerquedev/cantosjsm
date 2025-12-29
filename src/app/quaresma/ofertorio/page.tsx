import OfertorioContent from "@/components/liturgia/OfertorioContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ofertório",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/ofertorio"
});

export default function QuaresmaOfertorioPage() {
    return <OfertorioContent liturgicalSeason="quaresma" />;
}
