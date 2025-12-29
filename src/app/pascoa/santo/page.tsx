import SantoContent from "@/components/liturgia/SantoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Santo",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/santo"
});

export default function PascoaSantoPage() {
    return <SantoContent liturgicalSeason="pascoa" />;
}
