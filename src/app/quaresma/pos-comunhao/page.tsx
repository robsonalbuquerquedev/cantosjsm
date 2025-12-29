import PoscomunhaoContent from "@/components/liturgia/PoscomunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Pós-Comunhão",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/pos-comunhao"
});

export default function QuaresmaPosComunhaoPage() {
    return <PoscomunhaoContent liturgicalSeason="quaresma" />;
}
