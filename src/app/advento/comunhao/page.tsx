import ComunhaoContent from "@/components/liturgia/ComunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Comunhão",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/comunhao"
});

export default function AdventoComunhaoPage() {
    return <ComunhaoContent liturgicalSeason="advento" />;
}
