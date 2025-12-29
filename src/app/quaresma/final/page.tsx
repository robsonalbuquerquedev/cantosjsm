import FinalContent from "@/components/liturgia/FinalContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Final",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/final"
});

export default function QuaresmafinalPage() {
    return <FinalContent liturgicalSeason="quaresma" />;
}
