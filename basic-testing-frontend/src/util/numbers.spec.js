import { describe, it, expect } from 'vitest';

import { transformToNumber } from './numbers';

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