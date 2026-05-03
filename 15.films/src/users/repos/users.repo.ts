import { env } from '../../config/env.ts';
import debug from 'debug';
import { AuthService } from '../../services/auth.ts';
import type { AppPrismaClient } from '../../config/db-config.ts';
import type {
    LoginUserData,
    RegisterUserData,
    User,
    UserUpdateDTO,
} from '../../zod/user.schemas.ts';
import type { LoginResult, TokenPayload } from '../../types/login.ts';

const log = debug(`${env.PROJECT_NAME}:repo:users`);
log('Loading users repo...');

export class UsersRepo {
    #prisma: AppPrismaClient;
    constructor(prisma: AppPrismaClient) {
        this.#prisma = prisma;
    }

    async register(userData: RegisterUserData): Promise<User> {
        log('Registering user with email %s', userData.email);
        const hashedPassword = await AuthService.hash(userData.password);
        const result = await this.#prisma.user.create({
            data: {
                email: userData.email,
                password: hashedPassword,
                profile: {
                    create: userData.profile,
                },
            },
            include: { profile: true },
        });
        return result as unknown as User;
    }

    async login(userData: LoginUserData): Promise<LoginResult> {
        log('Logging in user with email %s', userData.email);
        const result = await this.#prisma.user.findUniqueOrThrow({
            where: { email: userData.email },
        });
        const isValid = await AuthService.compare(
            userData.password,
            result.password,
        );
        if (!isValid) {
            throw new Error('Invalid user or password');
        }
        const payload: TokenPayload = {
            id: result.id,
            email: result.email,
            role: result.role as string,
        };
        const token = AuthService.generateToken(payload);
        return { payload, token };
    }

    async getAllUsers(): Promise<User[]> {
        log('Getting all users');
        return this.#prisma.user.findMany({
            include: { profile: true },
        }) as unknown as User[];
    }

    async getUserById(id: number): Promise<User> {
        log('Getting user with id %d', id);
        return this.#prisma.user.findUniqueOrThrow({
            where: { id },
            include: { profile: true },
        }) as unknown as User;
    }

    async updateUser(id: number, data: UserUpdateDTO): Promise<User> {
        log('Updating user with id %d', id);
        return this.#prisma.user.update({
            where: { id },
            data: {
                ...data,
                ...(data.password && {
                    password: await AuthService.hash(data.password),
                }),
            },
            include: { profile: true },
        }) as unknown as User;
    }

    async deleteUser(id: number): Promise<User> {
        log('Deleting user with id %d', id);
        return this.#prisma.user.delete({
            where: { id },
        }) as unknown as User;
    }
}
