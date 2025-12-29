import ComunhaoContent from "@/components/liturgia/ComunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Comunhão",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/comunhao"
});

export default function TempoComumComunhaoPage() {
    return <ComunhaoContent liturgicalSeason="tempo-comum" />;
}
