import ComunhaoContent from "@/components/liturgia/ComunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Comunhão",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/comunhao"
});

export default function NatalComunhaoPage() {
    return <ComunhaoContent liturgicalSeason="natal" />;
}
