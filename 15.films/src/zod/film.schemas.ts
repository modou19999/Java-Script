import { z } from 'zod';

export const GenreModelSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const GenreCreateDTOSchema = z.object({
  name: z.string().trim().min(1).max(60),
});

export const GenreUpdateDTOSchema = GenreCreateDTOSchema.partial();

export const FilmCreateDTOSchema = z.object({
  title: z.string().trim().min(1).max(255),
  year: z.coerce.number().int(),
  director: z.string().trim().min(1).max(255),
  duration: z.coerce.number().int().positive(),
  poster: z.string().trim().min(1).nullish(),
  rate: z.coerce.number().min(0).max(9.9),
  genres: z.array(z.string().trim().min(1)).min(1),
});

export const FilmUpdateDTOSchema = FilmCreateDTOSchema.partial();

export type Genre = z.infer<typeof GenreModelSchema>;
export type GenreCreateDTO = z.infer<typeof GenreCreateDTOSchema>;
export type GenreUpdateDTO = z.infer<typeof GenreUpdateDTOSchema>;
export type FilmCreateDTO = z.infer<typeof FilmCreateDTOSchema>;
export type FilmUpdateDTO = z.infer<typeof FilmUpdateDTOSchema>;
