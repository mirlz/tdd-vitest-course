import { describe, it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty function: ', () => {
    describe('should throw error', () => {
        it('cannot read properties of undefined error should be thrown if nothing is passed in', () => {
            const resultFn = () => {
                validateStringNotEmpty();
            };

            expect(resultFn).toThrow(/Cannot read properties of undefined/);
        });

        it('invalid input should be thrown if empty string is passed in', () => {
            const emptyStr = ''; 

            const resultFn = () => {
                validateStringNotEmpty(emptyStr)
            };

            expect(resultFn).toThrow(/Invalid input/);
        });

        it('is not a function error should be thrown if empty object is passed in', () => {
            const emptyObj = {};

            const resultFn = () => {
                validateStringNotEmpty(emptyObj);
            };

            expect(resultFn).toThrow(/is not a function/);
        });
    });

    describe('should not throw error', () => {
        it('if valid string is being passed in', () => {
            const rando = 'venom'; 

            const resultFn = () => {
                validateStringNotEmpty(rando)
            };

            expect(resultFn).not.toThrowError();
        });
    });
});

describe('validateNumber function: ', () => {
    describe('should throw error', () => {
        it('invalid number input error should be thrown if string of char is passed in', () => {
            const rando = 'invalid';
            const resultFn = () => {
                validateNumber(rando);
            };

            expect(resultFn).toThrow(/Invalid number input/);
        });
        it('invalid number input error should be thrown if empty object is passed in', () => {
            const emptyObj = {};

            const resultFn = () => {
                validateNumber(emptyObj);
            };

            expect(resultFn).toThrow(/Invalid number input/);
        });
        it('invalid number input error should be thrown if empty array is passed in', () => {
            const emptyArr = [];

            const resultFn = () => {
                validateNumber(emptyArr);
            };

            expect(resultFn).toThrow(/Invalid number input/);
        });
        it('invalid number input error should be thrown if empty string is passed in', () => {
            const emptyStr = '';

            const resultFn = () => {
                validateNumber(emptyStr);
            };

            expect(resultFn).toThrow(/Invalid number input/);
        });
        it('invalid number input error should be thrown if string of number is passed in', () => {
            const rando = '1';

            const resultFn = () => {
                validateNumber(rando);
            };

            expect(resultFn).toThrow(/Invalid number input/);
        });
    });

    describe('should not throw error', () => {
        it('if valid number is being passed in', () => {
            const number = 1; 

            const resultFn = () => {
                validateNumber(number)
            };

            expect(resultFn).not.toThrowError();
        });
    });
});