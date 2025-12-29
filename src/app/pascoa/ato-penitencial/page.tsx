import AtoPenitencialContent from "@/components/liturgia/AtoPenitencialContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ato Penitencial",
  season: "Páscoa",
  canonical: "https://cantosjsm.com.br/pascoa/ato-penitencial"
});

export default function PascoaAtoPenitencialPage() {
    return <AtoPenitencialContent liturgicalSeason="pascoa" />;
}
