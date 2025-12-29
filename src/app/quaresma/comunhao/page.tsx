import ComunhaoContent from "@/components/liturgia/ComunhaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Comunhão",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/comunhao"
});

export default function QuaresmaComunhaoPage() {
    return <ComunhaoContent liturgicalSeason="quaresma" />;
}
