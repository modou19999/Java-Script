import { API_URL } from '../../main.ts';
import type { Film } from '../entities/Film.ts';

export class FilmsRepository {
    static async getAll(): Promise<Film[]> {
        const response = await fetch(`${API_URL}/films`);
        if (!response.ok) {
            throw new Error(`Error fetching films: ${response.statusText}`);
        }
        const films: Film[] = await response.json();
        return films;
    }
}
