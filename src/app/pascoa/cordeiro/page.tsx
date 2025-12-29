import CordeiroContent from "@/components/liturgia/CordeiroContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Cordeiro",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/cordeiro"
});

export default function PascoaCordeiroPage() {
    return <CordeiroContent liturgicalSeason="pascoa" />;
}
