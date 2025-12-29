import OfertorioContent from "@/components/liturgia/OfertorioContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ofertório",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/ofertorio"
});

export default function PascoaOfertorioPage() {
    return <OfertorioContent liturgicalSeason="pascoa" />;
}
