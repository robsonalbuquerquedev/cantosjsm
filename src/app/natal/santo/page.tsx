import SantoContent from "@/components/liturgia/SantoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Santo",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/santo"
});

export default function NatalSantoPage() {
    return <SantoContent liturgicalSeason="natal" />;
}
