import OfertorioContent from "@/components/liturgia/OfertorioContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ofertório",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/ofertorio"
});

export default function NatalOfertorioPage() {
    return <OfertorioContent liturgicalSeason="natal" />;
}
