import GloriaContent from "@/components/liturgia/GloriaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Glória",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/gloria"
});

export default function NatalGloriaPage() {
    return <GloriaContent liturgicalSeason="natal" />;
}
