import SantoContent from "@/components/liturgia/SantoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Santo",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/santo"
});

export default function QuaresmaSantoPage() {
    return <SantoContent liturgicalSeason="quaresma" />;
}
