import debug from 'debug';
import { env } from '../config/env.ts';

const log = debug(`${env.PROJECT_NAME}:home-view`);
log('Loading home view class...');

export class HomeView {
    static render(): string {
        return `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>Inicio | ${env.PROJECT_NAME}</title>
        </head>
        <body>
            <header>
                <h1>${env.PROJECT_NAME}</h1>
            </header>
            <main>
                <h1>Films API</h1>
                <p>API de películas, géneros, reviews y usuarios</p>
                <h2>EndPoints</h2>
                <ul>
                    <li>GET /api/genres</li>
                    <li>POST /api/genres</li>
                    <li>GET /api/genres/:id</li>
                    <li>PATCH /api/genres/:id</li>
                    <li>DELETE /api/genres/:id</li>
                    <li>POST /api/users/register</li>
                    <li>POST /api/users/login</li>
                </ul>
            </main>
        </body>
        </html>
        `;
    }
}
