import AtoPenitencialContent from "@/components/liturgia/AtoPenitencialContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ato Penitencial",
  season: "Quaresma",
  canonical: "https://cantosjsm.com.br/quaresma/ato-penitencial"
});

export default function QuaresmaAtoPenitencialPage() {
    return <AtoPenitencialContent liturgicalSeason="quaresma" />;
}
