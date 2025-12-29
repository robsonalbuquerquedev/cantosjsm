import CordeiroContent from "@/components/liturgia/CordeiroContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Cordeiro",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/cordeiro"
});

export default function NatalCordeiroPage() {
    return <CordeiroContent liturgicalSeason="natal" />;
}
