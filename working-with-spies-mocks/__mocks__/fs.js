import { vi } from 'vitest';

export const promises = { 
    // named export, so dun need the default keyword
    writeFile: vi.fn((path, data) => {
        return new Promise((resolve, reject) => {
            resolve();
        });
    })
};