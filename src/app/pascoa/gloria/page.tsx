import GloriaContent from "@/components/liturgia/GloriaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Glória",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/gloria"
});

export default function PascoaGloriaPage() {
    return <GloriaContent liturgicalSeason="pascoa" />;
}
