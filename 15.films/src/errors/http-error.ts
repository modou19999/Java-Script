import debug from 'debug';
import { env } from '../config/env.ts';

const log = debug(`${env.PROJECT_NAME}:http-error`);
log('Loading HTTP error class...');

export class HttpError extends Error {
    status: number;
    statusText: string;

    constructor(
        status: number,
        statusText: string,
        message: string,
        options?: ErrorOptions,
    ) {
        super(message, options);
        this.status = status;
        this.statusText = statusText;

        log('Creating HTTP error: %d %s %s', status, statusText, message);
    }
}
