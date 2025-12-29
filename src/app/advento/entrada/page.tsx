import EntradaContent from "@/components/liturgia/EntradaContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Entrada",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/entrada"
});

export default function AdventoEntradaPage() {
    return <EntradaContent liturgicalSeason="advento" />;
}
