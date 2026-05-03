import { env } from '../../config/env.ts';
import debug from 'debug';
import type { GenresController } from '../controllers/genres.controller.ts';
import { Router } from 'express';
import { validateBody, validateId } from '../../middleware/validations.ts';
import {
    GenreCreateDTOSchema,
    GenreUpdateDTOSchema,
} from '../../zod/film.schemas.ts';
import { AuthInterceptor } from '../../middleware/auth.interceptor.ts';

const log = debug(`${env.PROJECT_NAME}:router:genres`);
log('Loading genres router...');

export class GenresRouter {
    #controller: GenresController;
    #router: Router;
    #authInterceptor: AuthInterceptor;

    constructor(
        controller: GenresController,
        authInterceptor: AuthInterceptor,
    ) {
        log('Initializing genres router...');
        this.#controller = controller;
        this.#router = Router();
        this.#authInterceptor = authInterceptor;

        this.#router.get('/', this.#controller.getAll.bind(this.#controller));

        this.#router.get(
            '/:id',
            validateId(),
            this.#controller.getById.bind(this.#controller),
        );

        this.#router.post(
            '/',
            this.#authInterceptor.authenticate.bind(this.#authInterceptor),
            this.#authInterceptor.authorize(['EDITOR']),
            validateBody(GenreCreateDTOSchema),
            this.#controller.create.bind(this.#controller),
        );

        this.#router.patch(
            '/:id',
            validateId(),
            this.#authInterceptor.authenticate.bind(this.#authInterceptor),
            this.#authInterceptor.authorize(['EDITOR']),
            validateBody(GenreUpdateDTOSchema),
            this.#controller.update.bind(this.#controller),
        );

        this.#router.delete(
            '/:id',
            validateId(),
            this.#authInterceptor.authenticate.bind(this.#authInterceptor),
            this.#authInterceptor.authorize(['EDITOR']),
            this.#controller.delete.bind(this.#controller),
        );
    }

    get router() {
        return this.#router;
    }
}
