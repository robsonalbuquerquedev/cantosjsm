import AclamacaoContent from "@/components/liturgia/AclamacaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Aclamação",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/aclamacao"
});

export default function TempoComumAclamacaoPage() {
    return <AclamacaoContent liturgicalSeason="tempo-comum" />;
}
