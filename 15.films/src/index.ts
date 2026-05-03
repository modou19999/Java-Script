import { env } from './config/env.ts';
import debug from 'debug';
import { createPrisma } from './config/db-config.ts';
import { createApp } from './app.ts';

const log = debug(`${env.PROJECT_NAME}:index`);
log('Starting API server...');

const prisma = createPrisma();
const app = createApp(prisma);

const PORT = Number(env.PORT) || 3000;

const server = app.listen(PORT, () => {
    log('Server created');
    log('Servidor escuchando en http://localhost:%d', PORT);
});

export default server;
