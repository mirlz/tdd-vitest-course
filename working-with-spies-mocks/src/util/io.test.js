import { describe, it, expect, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
    return {
        // path is a default export
        default: {
            // join() {}
            join: (...args) => {
                return args[args.length - 1];
            }
        }
    };
});

describe('writeData function: ', () => {
    it('should execute the writeFile method', () => {
        const testData = 'Test';
        const testFilename = 'test.txt';

        // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
        writeData(testData, testFilename);
        // expect(fs.writeFile).toBeCalled();
        expect(fs.writeFile).toBeCalledWith(testFilename, testData);
    })

    it('should should return a promise that resolves to no value if called correctly', () => {
        const testData = 'Test';
        const testFilename = 'test.txt';

        writeData(testData, testFilename);
        return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

        // expect(fs.writeFile).toBeCalled();
        //expect(fs.writeFile).toBeCalledWith(testFilename, testData);
    })
})