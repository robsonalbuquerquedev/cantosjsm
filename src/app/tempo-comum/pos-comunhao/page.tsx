import PoscomunhaoContent from "@/components/liturgia/PoscomunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Pós-Comunhão",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/pos-comunhao"
});

export default function TempoComumPosComunhaoPage() {
    return <PoscomunhaoContent liturgicalSeason="tempo-comum" />;
}
