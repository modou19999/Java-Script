import debug from 'debug';
import { env } from '../config/env.ts';
import type { Request, Response, NextFunction } from 'express';

const log = debug(`${env.PROJECT_NAME}:middleware:headers`);
log('Loading middleware...');

export const customHeaders = (projectName: string) => {
    return (_req: Request, res: Response, next: NextFunction) => {
        res.setHeader('X-Powered-By', projectName);
        next();
    };
};
