import debug from 'debug';
import { env } from '../config/env.ts';
import type { Request, Response, NextFunction } from 'express';
import { type ZodSchema } from 'zod';
import { HttpError } from '../errors/http-error.ts';

const log = debug(`${env.PROJECT_NAME}:middleware:validations`);
log('Loading validation middleware...');

export const validateBody = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            const error = new HttpError(
                400,
                'Bad Request',
                result.error.issues
                    .map((e: { message: string }) => e.message)
                    .join(', '),
            );
            return next(error);
        }
        req.body = result.data;
        return next();
    };
};

export const validateId = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id <= 0) {
            const error = new HttpError(400, 'Bad Request', 'Invalid ID');
            return next(error);
        }
        return next();
    };
};
