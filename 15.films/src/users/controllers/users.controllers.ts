import { env } from '../../config/env.ts';
import debug from 'debug';
import type { UsersRepo } from '../repos/users.repo.ts';
import type { NextFunction, Request, Response } from 'express';
import type {
    LoginUserData,
    RegisterUserData,
    User,
    UserUpdateDTO,
} from '../../zod/user.schemas.ts';
import { HttpError } from '../../errors/http-error.ts';
import type { LoginResult } from '../../types/login.ts';

const log = debug(`${env.PROJECT_NAME}:controller:users`);
log('Loading users controller...');

export class UsersController {
    #repo: UsersRepo;
    constructor(repo: UsersRepo) {
        this.#repo = repo;
    }

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            log('Registering new user...');
            const userData: RegisterUserData = req.body;
            const user: User = await this.#repo.register(userData);
            return res.status(201).json(user);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to register user',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            log('Logging in user...');
            const loginData: LoginUserData = req.body;
            const loginResult: LoginResult = await this.#repo.login(loginData);
            return res.json(loginResult);
        } catch (error) {
            return next(
                new HttpError(
                    401,
                    'Unauthorized',
                    'Invalid email or password',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            log('Getting all users...');
            const users: User[] = await this.#repo.getAllUsers();
            return res.json(users);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to get users',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const user: User = await this.#repo.getUserById(id);
            return res.json(user);
        } catch (error) {
            return next(
                new HttpError(404, 'Not Found', 'User not found', {
                    cause: error,
                }),
            );
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            const userData: UserUpdateDTO = req.body;
            const user: User = await this.#repo.updateUser(id, userData);
            return res.json(user);
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to update user',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            await this.#repo.deleteUser(id);
            return res.status(204).end();
        } catch (error) {
            return next(
                new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to delete user',
                    {
                        cause: error,
                    },
                ),
            );
        }
    }
}
