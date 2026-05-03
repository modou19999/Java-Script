import type { Request, Response, NextFunction } from 'express';
import { env } from '../config/env.ts';
import debug from 'debug';
import { HttpError } from '../errors/http-error.ts';
import { AuthService } from '../services/auth.ts';

const log = debug(`${env.PROJECT_NAME}:middleware:auth`);
log('Loading middleware (AuthInterceptor)...');

const unauthrizedError = new HttpError(
    401,
    'Unauthorized',
    'Authentication failed. Please provide valid credentials.',
);

const forbiddenError = new HttpError(
    403,
    'Forbidden',
    'You do not have permission to access this resource.',
);

export class AuthInterceptor {
    authenticate(req: Request, res: Response, next: NextFunction) {
        log('Authenticating request...');
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return next(unauthorizedError);
        }
        const [type, token] = authHeader.split(' ');
        if (!token || type !== 'Bearer') {
            return next(unauthorizedError);
        }
        try {
            const payload = AuthService.verifyToken(token);
            req.user = payload;
            return next();
        } catch (error) {
            unauthorizedError.cause = error;
            return next(unauthorizedError);
        }
    }

    authorize(roles: string[] = []) {
        return (req: Request, res: Response, next: NextFunction) => {
            log('Authorizing request for roles:', roles);
            if (!req.user) {
                return next(unauthorizedError);
            }
            if (req.user.role !== 'ADMIN' && !roles.includes(req.user.role)) {
                return next(forbiddenError);
            }
            return next();
        };
    }

    isOwnerOrAdmin(req: Request, res: Response, next: NextFunction) {
        log('Checking if user is owner or admin...');
        if (!req.user) {
            return next(unauthorizedError);
        }
        const resourceOwnerId = Number(req.params.id);
        if (req.user.role !== 'ADMIN' && req.user.id !== resourceOwnerId) {
            return next(forbiddenError);
        }
        return next();
    }
}
