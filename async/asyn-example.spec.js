import { describe, it, expect } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken function: ', () => {
    it('should generate a token value', (done) => {
        const testUserEmail = 'test@example.com';

        generateToken(testUserEmail, (err, token) => {
            try {
                expect(token).toBeDefined();
                done();
            } catch (e) {
                done(e);
            }
        });
    });
});

describe('generateTokenPromise function: ', () => {
    it('should generate a token value', () => {
        const testUserEmail = 'test@example.com';

        return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
    });
});