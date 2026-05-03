import { env } from '../../config/env.ts';
import debug from 'debug';
import type { GenresRepo } from '../repos/genres.repo.ts';
import type { NextFunction, Request, Response } from 'express';
import type {
    Genre,
    GenreCreateDTO,
    GenreUpdateDTO,
} from '../../zod/film.schemas.ts';
import { HttpError } from '../../errors/http-error.ts';
import { Prisma } from '@prisma/client';

const log = debug(`${env.PROJECT_NAME}:controller:genres`);
log('Loading genres controller...');

export class GenresController {
    #repo: GenresRepo;
    constructor(repo: GenresRepo) {
        this.#repo = repo;
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            log('Getting all genres...');
            const genres: Genre[] = await this.#repo.getAll();
            return res.json(genres);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to get genres',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            log('Getting genre with id %d', id);
            const genre: Genre = await this.#repo.getById(id);
            return res.json(genre);
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                return next(
                    new HttpError(404, 'Not Found', 'Genre not found', {
                        cause: error,
                    }),
                );
            }
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to get genre',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            log('Creating genre...');
            const data: GenreCreateDTO = req.body;
            const genre: Genre = await this.#repo.create(data);
            return res.status(201).json(genre);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to create genre',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            log('Updating genre with id %d', id);
            const data: GenreUpdateDTO = req.body;
            const genre: Genre = await this.#repo.update(id, data);
            return res.json(genre);
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                return next(
                    new HttpError(404, 'Not Found', 'Genre not found', {
                        cause: error,
                    }),
                );
            }
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to update genre',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            log('Deleting genre with id %d', id);
            await this.#repo.delete(id);
            return res.status(204).end();
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                return next(
                    new HttpError(404, 'Not Found', 'Genre not found', {
                        cause: error,
                    }),
                );
            }
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to delete genre',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }
}
