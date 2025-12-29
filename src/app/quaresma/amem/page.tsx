import AmemContent from "@/components/liturgia/AmemContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Amém",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/amem"
});

export default function QuaresmaAmemPage() {
    return <AmemContent liturgicalSeason="quaresma" />;
}
