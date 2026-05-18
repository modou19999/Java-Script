export interface Film {
    id: number;
    title: string;
    description?: string;
    releaseYear?: number;
    genres?: string[];
}