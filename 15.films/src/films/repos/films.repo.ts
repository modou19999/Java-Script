import { env } from '../../config/env.ts';
import debug from 'debug';
import type { AppPrismaClient } from '../../config/db-config.ts';
import type { FilmCreateDTO, FilmUpdateDTO } from '../../zod/film.schemas.ts';

const log = debug(`${env.PROJECT_NAME}:repo:films`);
log('Loading films repo...');

export class FilmsRepo {
    #prisma: AppPrismaClient;
    constructor(prisma: AppPrismaClient) {
        this.#prisma = prisma;
    }

    async getAll() {
        log('Getting all films');
        return this.#prisma.film.findMany({
            include: { genres: true },
        });
    }

    async getById(id: number) {
        log('Getting film with id %d', id);
        return this.#prisma.film.findUniqueOrThrow({
            where: { id },
            include: { genres: true },
        });
    }

    async create(data: FilmCreateDTO) {
        log('Creating film %s', data.title);
        const { genres, ...filmData } = data;
        return this.#prisma.film.create({
            data: {
                ...filmData,
                genres: {
                    connectOrCreate: genres.map((name) => ({
                        where: { name },
                        create: { name },
                    })),
                },
            },
            include: { genres: true },
        });
    }

    async update(id: number, data: FilmUpdateDTO) {
        log('Updating film with id %d', id);
        const { genres, ...filmData } = data;
        return this.#prisma.film.update({
            where: { id },
            data: {
                ...filmData,
                ...(genres && {
                    genres: {
                        set: [],
                        connectOrCreate: genres.map((name) => ({
                            where: { name },
                            create: { name },
                        })),
                    },
                }),
            },
            include: { genres: true },
        });
    }

    async delete(id: number) {
        log('Deleting film with id %d', id);
        return this.#prisma.film.delete({
            where: { id },
        });
    }
}
