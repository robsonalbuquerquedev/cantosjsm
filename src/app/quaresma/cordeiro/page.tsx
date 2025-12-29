import CordeiroContent from "@/components/liturgia/CordeiroContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Cordeiro",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/cordeiro"
});

export default function QuaresmaCordeiroPage() {
    return <CordeiroContent liturgicalSeason="quaresma" />;
}
