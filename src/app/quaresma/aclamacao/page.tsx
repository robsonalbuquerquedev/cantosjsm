import AclamacaoContent from "@/components/liturgia/AclamacaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Aclamação",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/aclamacao"
});

export default function QuaresmaAclamacaoPage() {
    return <AclamacaoContent liturgicalSeason="quaresma" />;
}
