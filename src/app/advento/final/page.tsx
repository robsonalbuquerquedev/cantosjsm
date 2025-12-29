import FinalContent from "@/components/liturgia/FinalContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Final",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/final"
});

export default function AdventofinalPage() {
    return <FinalContent liturgicalSeason="advento" />;
}
