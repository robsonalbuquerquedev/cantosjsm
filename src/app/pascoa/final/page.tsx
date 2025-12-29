import FinalContent from "@/components/liturgia/FinalContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Final",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/final"
});

export default function PascoafinalPage() {
    return <FinalContent liturgicalSeason="pascoa" />;
}
