import AclamacaoContent from "@/components/liturgia/AclamacaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Aclamação",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/aclamacao"
});

export default function NatalAclamacaoPage() {
    return <AclamacaoContent liturgicalSeason="natal" />;
}
