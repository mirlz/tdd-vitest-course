import { describe, it, expect } from 'vitest';

import { validateNotEmpty } from './validation';

describe('validateNotEmpty function: ', () => {
    it('should not throw error if valid string is passed in', () => {
        const input = 'blah';

        const resultFn = () => {
            validateNotEmpty(input);
        };

        expect(resultFn).not.toThrow();
    });
    it('should throw error if empty string is passed in', () => {
        const input = '';

        const resultFn = () => {
            validateNotEmpty(input);
        };

        expect(resultFn).toThrow();
    });
    it('should throw an error with provided error message', () => {
        const input = '';
        const error = 'invalid input'

        const resultFn = () => {
            validateNotEmpty(input, error);
        };

        expect(resultFn).toThrow(/invalid input/);
    });
    it('should throw error if non string is passed in', () => {
        const input = {};

        const resultFn = () => {
            validateNotEmpty(input);
        };

        expect(resultFn).toThrow();
    });
});