import AmemContent from "@/components/liturgia/AmemContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Amém",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/amem"
});

export default function PascoaAmemPage() {
    return <AmemContent liturgicalSeason="pascoa" />;
}
