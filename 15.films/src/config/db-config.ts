import { PrismaClient } from '@prisma/client';
import debug from 'debug';
import { env } from './env.ts';

const log = debug(`${env.PROJECT_NAME}:configDB`);
log('Loaded database connection...');

export type AppPrismaClient = PrismaClient;

export const createPrisma = (): AppPrismaClient => {
    const prisma = new PrismaClient();

    prisma
        .$connect()
        .then(() => {
            log('Database connection established successfully.');
            log('Connected to database: %s', env.PGDATABASE);
        })
        .catch((error) => {
            log('Database connection failed: %O', error);
        });

    return prisma;
};
