export interface Song {
    id: string;
    name: string;
    description?: string;
    lyrics: string;
    key?: string;
    copyright?: string;
    fullLyricsUrl?: string;
    isPublicDomain?: boolean;
    category:
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
    | "final"
    | "hinos"
    | "marianas"
    | "espirito-santo"
    | "adoracao"
    | "padroeiro-da-cidade";
}
