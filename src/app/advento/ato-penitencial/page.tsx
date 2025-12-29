import AtoPenitencialContent from "@/components/liturgia/AtoPenitencialContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ato Penitencial",
  season: "Advento",
  canonical: "https://cantosjsm.com.br/advento/ato-penitencial"
});

export default function AdventoAtoPenitencialPage() {
    return <AtoPenitencialContent liturgicalSeason="advento" />;
}
