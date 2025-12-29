import GloriaContent from "@/components/liturgia/GloriaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Glória",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/gloria"
});

export default function AdventoGloriaPage() {
    return <GloriaContent liturgicalSeason="advento" />;
}
