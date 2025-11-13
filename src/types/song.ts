export interface Song {
    id: string;
    name: string;
    description?: string;
    lyrics: string;
    key?: string;
    chords?: string;
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
    | "final";
}
