import { env } from '../../config/env.ts';
import debug from 'debug';
import type { AppPrismaClient } from '../../config/db-config.ts';
import type {
    Genre,
    GenreCreateDTO,
    GenreUpdateDTO,
} from '../../zod/film.schemas.ts';

const log = debug(`${env.PROJECT_NAME}:repo:genres`);
log('Loading genres repo...');

export class GenresRepo {
    #prisma: AppPrismaClient;
    constructor(prisma: AppPrismaClient) {
        this.#prisma = prisma;
    }

    async getAll(): Promise<Genre[]> {
        log('Getting all genres');
        return this.#prisma.genre.findMany() as Promise<Genre[]>;
    }

    async getById(id: number): Promise<Genre> {
        log('Getting genre with id %d', id);
        return this.#prisma.genre.findUniqueOrThrow({
            where: { id },
        }) as Promise<Genre>;
    }

    async create(data: GenreCreateDTO): Promise<Genre> {
        log('Creating genre with name %s', data.name);
        return this.#prisma.genre.create({
            data,
        }) as Promise<Genre>;
    }

    async update(id: number, data: GenreUpdateDTO): Promise<Genre> {
        log('Updating genre with id %d', id);
        return this.#prisma.genre.update({
            where: { id },
            data,
        }) as Promise<Genre>;
    }

    async delete(id: number): Promise<Genre> {
        log('Deleting genre with id %d', id);
        return this.#prisma.genre.delete({
            where: { id },
        }) as Promise<Genre>;
    }
}
