import PoscomunhaoContent from "@/components/liturgia/PoscomunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Pós-Comunhão",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/pos-comunhao"
});

export default function AdventoPosComunhaoPage() {
    return <PoscomunhaoContent liturgicalSeason="advento" />;
}
