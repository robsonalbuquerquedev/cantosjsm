import EntradaContent from "@/components/liturgia/EntradaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Entrada",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/entrada"
});

export default function QuaresmaEntradaPage() {
    return <EntradaContent liturgicalSeason="quaresma" />;
}
