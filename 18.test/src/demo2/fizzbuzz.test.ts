import { fizzBuzz } from './fizzbuzz.ts';

describe('Given fizzBuzz function', () => {
    describe('When it receives 3', () => {
        it('Then it should return Fizz', () => {
            // Arrange
            const input = 3;
            const expectedOutput = 'Fizz';
            // Act
            const result = fizzBuzz(input);
            //Assert
            expect(result).toBe(expectedOutput);
        });
    });
});
