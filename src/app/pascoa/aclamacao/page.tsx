import AclamacaoContent from "@/components/liturgia/AclamacaoContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Aclamação",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/aclamacao"
});

export default function PascoaAclamacaoPage() {
    return <AclamacaoContent liturgicalSeason="pascoa" />;
}
