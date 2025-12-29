import AtoPenitencialContent from "@/components/liturgia/AtoPenitencialContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ato Penitencial",
  season: "Tempo Comum",
  canonical: "https://cantosjsm.com.br/tempo-comum/ato-penitencial"
});

export default function TempoComumAtoPenitencialPage() {
    return <AtoPenitencialContent liturgicalSeason="tempo-comum" />;
}
