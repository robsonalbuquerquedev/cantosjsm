import EntradaContent from "@/components/liturgia/EntradaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Entrada",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/entrada"
});

export default function NatalEntradaPage() {
    return <EntradaContent liturgicalSeason="natal" />;
}
