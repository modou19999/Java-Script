import { env } from '../../config/env.ts';
import debug from 'debug';
import type { FilmsRepo } from '../repos/films.repo.ts';
import type { NextFunction, Request, Response } from 'express';
import type { FilmCreateDTO, FilmUpdateDTO } from '../../zod/film.schemas.ts';
import { HttpError } from '../../errors/http-error.ts';
import { Prisma } from '@prisma/client';

const log = debug(`${env.PROJECT_NAME}:controller:films`);
log('Loading films controller...');

export class FilmsController {
    #repo: FilmsRepo;
    constructor(repo: FilmsRepo) {
        this.#repo = repo;
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            log('Getting all films...');
            const films = await this.#repo.getAll();
            return res.json(films);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to get films',
                    { cause: error },
                ),
            );
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            log('Getting film with id %d', id);
            const film = await this.#repo.getById(id);
            return res.json(film);
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                return next(
                    new HttpError(404, 'Not Found', 'Film not found', {
                        cause: error,
                    }),
                );
            }
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to get film',
                    { cause: error },
                ),
            );
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            log('Creating film...');
            const data: FilmCreateDTO = req.body;
            const film = await this.#repo.create(data);
            return res.status(201).json(film);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to create film',
                    { cause: error },
                ),
            );
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            log('Updating film with id %d', id);
            const data: FilmUpdateDTO = req.body;
            const film = await this.#repo.update(id, data);
            return res.json(film);
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                return next(
                    new HttpError(404, 'Not Found', 'Film not found', {
                        cause: error,
                    }),
                );
            }
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to update film',
                    { cause: error },
                ),
            );
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            log('Deleting film with id %d', id);
            await this.#repo.delete(id);
            return res.status(204).end();
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                return next(
                    new HttpError(404, 'Not Found', 'Film not found', {
                        cause: error,
                    }),
                );
            }
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to delete film',
                    { cause: error },
                ),
            );
        }
    }
}
