import OfertorioContent from "@/components/liturgia/OfertorioContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ofertório",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/ofertorio"
});

export default function AdventoOfertorioPage() {
    return <OfertorioContent liturgicalSeason="advento" />;
}
