import CordeiroContent from "@/components/liturgia/CordeiroContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Cordeiro",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/cordeiro"
});

export default function AdventoCordeiroPage() {
    return <CordeiroContent liturgicalSeason="advento" />;
}
