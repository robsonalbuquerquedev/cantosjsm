import ComunhaoContent from "@/components/liturgia/ComunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Comunhão",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/comunhao"
});

export default function PascoaComunhaoPage() {
    return <ComunhaoContent liturgicalSeason="pascoa" />;
}
