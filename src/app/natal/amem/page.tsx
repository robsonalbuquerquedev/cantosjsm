import AmemContent from "@/components/liturgia/AmemContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Amém",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/amem"
});

export default function NatalAmemPage() {
    return <AmemContent liturgicalSeason="natal" />;
}
