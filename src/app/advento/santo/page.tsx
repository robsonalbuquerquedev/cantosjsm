import SantoContent from "@/components/liturgia/SantoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Santo",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/santo"
});

export default function AdventoSantoPage() {
    return <SantoContent liturgicalSeason="advento" />;
}
