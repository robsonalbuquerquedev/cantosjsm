import AtoPenitencialContent from "@/components/liturgia/AtoPenitencialContent";
import { createLiturgicalMetadata } from "@/lib/metadata/createLiturgicalMetadata";

export const metadata = createLiturgicalMetadata({
  part: "Ato Penitencial",
  season: "Natal",
  canonical: "https://cantosjsm.com.br/natal/ato-penitencial"
});

export default function NatalAtoPenitencialPage() {
    return <AtoPenitencialContent liturgicalSeason="natal" />;
}
