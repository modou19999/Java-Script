import debug from 'debug';
import { env } from '../config/env.ts';
import type { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/http-error.ts';

const log = debug(`${env.PROJECT_NAME}:error-handler`);
log('Loading error handler...');

export const errorHandler = (
    error: HttpError,
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    log('Handling error: %O', error);
    const status = error.status || 500;
    const statusText = error.statusText || 'Internal Server Error';
    const message = error.message || 'An undexpected error ocurred';

    res.status(status).json({
        error: statusText,
        message,
    });
};
