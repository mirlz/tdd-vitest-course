import { describe, it, expect } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber function: ', () => {
    it('should take in number and still return number', () => {
        const number = 2;

        const result = transformToNumber(number);

        expect(result).toBeTypeOf('number');
    })

    it('should take in string literals and convert to number', () => {
        const numberStr = '1';

        const result = transformToNumber(numberStr);

        expect(result).toBeTypeOf('number');
        expect(result).toBe(1);
    });

    it('should return Nan if passed in value is invalid / unable to convert to number', () => {
        const rando = 'some shit';

        const result = transformToNumber(rando)

        expect(result).toBeNaN();
    });

    it('should return Nan if nothing is passed in', () => {
        const result = transformToNumber();

        expect(result).toBeNaN();
    });
});

describe('cleanNumbers function: ', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];

        const cleanedNumbers = cleanNumbers(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if if an array with at least one empty string is provided', () => {
        const numberValues = ['', 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow(/must not be empty/);
    });

    it('should throw an error if if an array with at least one invalid string is provided', () => {
        const numberValues = ['invalid', 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow(/Invalid number input/);
    });
});