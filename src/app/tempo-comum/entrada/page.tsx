import EntradaContent from "@/components/liturgia/EntradaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Entrada",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/entrada"
});

export default function TempoComumEntradaPage() {
    return <EntradaContent liturgicalSeason="tempo-comum" />;
}
