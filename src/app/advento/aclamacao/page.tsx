import AclamacaoContent from "@/components/liturgia/AclamacaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Aclamação",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/aclamacao"
});

export default function AdventoAclamacaoPage() {
    return <AclamacaoContent liturgicalSeason="advento" />;
}
