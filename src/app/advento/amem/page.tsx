import AmemContent from "@/components/liturgia/AmemContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Amém",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/amem"
});

export default function AdventoAmemPage() {
    return <AmemContent liturgicalSeason="advento" />;
}
