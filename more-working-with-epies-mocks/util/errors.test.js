import { describe, it, expect } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('HttpError function: ', () => {
    it('should contain the provided status code, message and data', () => {
        const testState = 1;
        const testMessage = 'Test';
        const testData = { key: 'test' };

        const testError = new HttpError(testState, testMessage, testData);

        expect(testError.statusCode).toBe(testState);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).toBe(testData);
    });

    it('should contain undefined as data if no data is provided', () => {
        const testState = 1;
        const testMessage = 'Test';

        const testError = new HttpError(testState, testMessage);

        expect(testError.statusCode).toBe(testState);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).not.toBeDefined();    
    });
});

describe('ValidationError function: ', () => {
    it('should contain the provided message', () => {
        const testMessage = 'test';

        const testError = new ValidationError(testMessage);

        expect(testError.message).toBe(testMessage);
    });

    it('should contain undefined as message if no message is provided', () => {
        const testError = new ValidationError();

        expect(testError.message).toBeUndefined(); 
    });
});