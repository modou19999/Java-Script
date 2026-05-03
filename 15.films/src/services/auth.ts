import debug from 'debug';
import { env } from '../config/env.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { TokenPayload } from '../types/login.ts';

const log = debug(`${env.PROJECT_NAME}:service:auth`);
log('Loading auth service...');

export class AuthService {
    static async hash(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    static async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    static generateToken(payload: TokenPayload): string {
        return jwt.sign(payload, env.JWT_SECRET, { expiresIn: 'id' });
    }

    static verifyToken(token: string): TokenPayload {
        return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
    }
}
