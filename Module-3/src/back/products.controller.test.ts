import { describe, expect, it, beforeEach, vi } from 'vitest';
import { ProductsController } from './products.controller';
import type { Request, Response, NextFunction } from 'express';

// Mock de debug para evitar errores en el entorno de test
vi.mock('debug', () => ({ default: () => () => {} }));

const mockRepo = {
    read: vi.fn(),
    readById: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
};

const controller = new ProductsController(mockRepo as any);

const mockRes = () => {
    const res: Partial<Response> = {
        json: vi.fn(),
        status: vi.fn().mockReturnThis(),
    };
    return res as Response;
};

const next = vi.fn() as unknown as NextFunction;

beforeEach(() => {
    vi.clearAllMocks();
});

describe('ProductsController', () => {
    // ───────────────────────────────────────────────
    // getAllProducts
    // ───────────────────────────────────────────────
    describe('getAll', () => {
        it('debería devolver todos los productos con json', async () => {
            const req = {} as Request;
            const res = mockRes();
            const fakeProducts = [{ id: '1', name: 'Test Product' }];
            mockRepo.read.mockResolvedValueOnce(fakeProducts);

            await controller.getAll(req, res, next);

            expect(mockRepo.read).toHaveBeenCalledTimes(1);
            expect(res.json).toHaveBeenCalledWith({
                results: fakeProducts,
                error: '',
            });
        });

        it('debería llamar a next si hay un error', async () => {
            const req = {} as Request;
            const res = mockRes();
            mockRepo.read.mockRejectedValueOnce(new Error('DB Error'));

            await controller.getAll(req, res, next);

            expect(next).toHaveBeenCalledWith(expect.any(Error));
        });
    });

    // ───────────────────────────────────────────────
    // getProductById
    // ───────────────────────────────────────────────
    describe('getById', () => {
        it('debería devolver un producto por id', async () => {
            const req = { params: { id: '1' } } as unknown as Request;
            const res = mockRes();
            const product = { id: '1', name: 'Product 1' };
            mockRepo.readById.mockResolvedValueOnce(product);

            await controller.getById(req, res, next);

            expect(mockRepo.readById).toHaveBeenCalledWith('1');
            expect(res.json).toHaveBeenCalledWith({
                results: [product],
                error: '',
            });
        });

        it('debería llamar a next si el producto no existe', async () => {
            const req = { params: { id: '999' } } as unknown as Request;
            const res = mockRes();
            mockRepo.readById.mockRejectedValueOnce(new Error('Not found'));

            await controller.getById(req, res, next);

            expect(next).toHaveBeenCalledWith(expect.any(Error));
        });
    });

    // ───────────────────────────────────────────────
    // createProduct
    // ───────────────────────────────────────────────
    describe('create', () => {
        it('debería crear un producto y responder con status 201', async () => {
            const req = { body: { name: 'New Product' } } as Request;
            const res = mockRes();
            const product = { id: '2', name: 'New Product' };
            mockRepo.create.mockResolvedValueOnce(product);

            await controller.create(req, res, next);

            expect(mockRepo.create).toHaveBeenCalledWith({
                name: 'New Product',
            });
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                results: [product],
                error: '',
            });
        });

        it('debería llamar a next si hay un error al crear', async () => {
            const req = { body: { name: 'Bad Product' } } as Request;
            const res = mockRes();
            mockRepo.create.mockRejectedValueOnce(new Error('Create failed'));

            await controller.create(req, res, next);

            expect(next).toHaveBeenCalledWith(expect.any(Error));
        });
    });

    // ───────────────────────────────────────────────
    // updateProduct
    // ───────────────────────────────────────────────
    describe('update', () => {
        it('debería actualizar un producto y devolverlo', async () => {
            const req = {
                params: { id: '1' },
                body: { name: 'Updated Product' },
            } as unknown as Request;
            const res = mockRes();
            const updatedProduct = { id: '1', name: 'Updated Product' };
            mockRepo.update.mockResolvedValueOnce(updatedProduct);

            await controller.update(req, res, next);

            expect(mockRepo.update).toHaveBeenCalledWith('1', {
                name: 'Updated Product',
            });
            expect(res.json).toHaveBeenCalledWith({
                results: [updatedProduct],
                error: '',
            });
        });

        it('debería llamar a next si hay un error al actualizar', async () => {
            const req = {
                params: { id: '1' },
                body: { name: 'Fail Update' },
            } as unknown as Request;
            const res = mockRes();
            mockRepo.update.mockRejectedValueOnce(new Error('Update failed'));

            await controller.update(req, res, next);

            expect(next).toHaveBeenCalledWith(expect.any(Error));
        });
    });

    // ───────────────────────────────────────────────
    // deleteProduct
    // ───────────────────────────────────────────────
    describe('delete', () => {
        it('debería eliminar un producto y devolverlo', async () => {
            const req = { params: { id: '1' } } as unknown as Request;
            const res = mockRes();
            const deletedProduct = { id: '1', name: 'Deleted Product' };
            mockRepo.delete.mockResolvedValueOnce(deletedProduct);

            await controller.delete(req, res, next);

            expect(mockRepo.delete).toHaveBeenCalledWith('1');
            expect(res.json).toHaveBeenCalledWith({
                results: [deletedProduct],
                error: '',
            });
        });

        it('debería llamar a next si hay un error al eliminar', async () => {
            const req = { params: { id: '1' } } as unknown as Request;
            const res = mockRes();
            mockRepo.delete.mockRejectedValueOnce(new Error('Delete failed'));

            await controller.delete(req, res, next);

            expect(next).toHaveBeenCalledWith(expect.any(Error));
        });
    });
});
