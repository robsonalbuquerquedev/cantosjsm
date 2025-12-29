import PoscomunhaoContent from "@/components/liturgia/PoscomunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Pós-Comunhão",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/pos-comunhao"
});

export default function NatalPosComunhaoPage() {
    return <PoscomunhaoContent liturgicalSeason="natal" />;
}
