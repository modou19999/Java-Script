import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import debug from 'debug';
import { env } from './env.ts';

const log = debug(`${env.PROJECT_NAME}:configDB`);
log('Loaded database connection...');

export type AppPrismaClient = PrismaClient;

export const createPrisma = (): AppPrismaClient => {
    const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL,
    });

    const prisma = new PrismaClient({ adapter });

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
