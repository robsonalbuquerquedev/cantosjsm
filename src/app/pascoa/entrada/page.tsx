import EntradaContent from "@/components/liturgia/EntradaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Entrada",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/entrada"
});

export default function PascoaEntradaPage() {
    return <EntradaContent liturgicalSeason="pascoa" />;
}
