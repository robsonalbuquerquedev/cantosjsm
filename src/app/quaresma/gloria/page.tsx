import GloriaContent from "@/components/liturgia/GloriaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Glória",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/gloria"
});

export default function QuaresmaGloriaPage() {
    return <GloriaContent liturgicalSeason="quaresma" />;
}
