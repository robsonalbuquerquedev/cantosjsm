import PoscomunhaoContent from "@/components/liturgia/PoscomunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Pós-Comunhão",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/pos-comunhao"
});

export default function PascoaPosComunhaoPage() {
    return <PoscomunhaoContent liturgicalSeason="pascoa" />;
}
