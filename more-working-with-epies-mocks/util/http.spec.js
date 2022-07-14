import { describe, it, expect, vi } from 'vitest';

import { sendDataRequest } from './http';
import { HttpError } from './errors';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'something' }),
  })
);

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if(typeof options.body !== 'string') {
            return reject('Not a string.');
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                })
            } 
        }
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

describe('sendDataRequest function: ', () => {
    it('should call fetch and return response.json', async() => {
        const data = { key: 'something' };

        await sendDataRequest(data);

        return expect(sendDataRequest(data)).resolves.toEqual(testResponseData);
    });

    it('should convert the provided data to JSON before sending the request', async () => {
        const data = { key: 'test' };
        let errorMessage;

        try {
            await sendDataRequest(data);
        } catch (err) {
            errorMessage = err;
        }

        expect(errorMessage).not.toBe('Not a string.');
    });

    it('should thrown an HttpError in case of non-ok response', () => {
        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((resolve, reject) => {
                const testResponse = {
                    ok: false,
                    json() {
                        return new Promise((resolve, reject) => {
                            resolve(testResponseData);
                        })
                    } 
                }
                resolve(testResponse);
            });
        })
        const data = { key: 'test' };

        return expect(sendDataRequest(data)).rejects.toBeInstanceOf(HttpError);
    });
});