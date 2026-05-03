import { env } from '../../config/env.ts';
import debug from 'debug';
import type { FilmsController } from '../controllers/films.controller.ts';
import { Router } from 'express';
import { validateBody, validateId } from '../../middleware/validations.ts';
import {
    FilmCreateDTOSchema,
    FilmUpdateDTOSchema,
} from '../../zod/film.schemas.ts';
import { AuthInterceptor } from '../../middleware/auth.interceptor.ts';

const log = debug(`${env.PROJECT_NAME}:router:films`);
log('Loading films router...');

export class FilmsRouter {
    #controller: FilmsController;
    #router: Router;
    #authInterceptor: AuthInterceptor;

    constructor(controller: FilmsController, authInterceptor: AuthInterceptor) {
        log('Initializing films router...');
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
            validateBody(FilmCreateDTOSchema),
            this.#controller.create.bind(this.#controller),
        );

        this.#router.patch(
            '/:id',
            validateId(),
            this.#authInterceptor.authenticate.bind(this.#authInterceptor),
            this.#authInterceptor.authorize(['EDITOR']),
            validateBody(FilmUpdateDTOSchema),
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
