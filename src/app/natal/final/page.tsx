import FinalContent from "@/components/liturgia/FinalContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Final",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/final"
});

export default function NatalfinalPage() {
    return <FinalContent liturgicalSeason="natal" />;
}
