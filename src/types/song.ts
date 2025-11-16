export type SongCategory =
    | "entrada"
    | "ato-penitencial"
    | "gloria"
    | "salmo"
    | "aclamacao"
    | "ofertorio"
    | "santo"
    | "amem"
    | "cordeiro"
    | "comunhao"
    | "pos-comunhao"
    | "final"
    | "hinos"
    | "marianas"
    | "espirito-santo"
    | "adoracao"
    | "padroeiro-da-cidade";

export interface Song {
    id: number;
    name: string;
    description?: string;
    lyrics: string;
    key?: string;
    copyright?: string;
    fullLyricsUrl?: string;
    isPublicDomain?: boolean;
    categories: SongCategory[];
}
