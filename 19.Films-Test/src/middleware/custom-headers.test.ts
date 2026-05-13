import type { NextFunction } from 'express';
import { customHeaders } from './custom-headers.ts';

describe('Given', () => {
    describe('when', () => {
        test('then', () => {

            // Arrange
            const req: Request = {} as Request;
            const res: Response = {} as Response;
            const next: NextFunction = {} as NextFunction;

            const middleware = customHeaders('test')

            //Act
            middleware(req, res, next)

            //Assert
            expect(res.setHeader)
        });
    });
});
