import { describe, it, expect, vi, beforeEach } from 'vitest';

import { extractPostData } from './posts';

const testTitle = 'test title';
const testContent = 'test content';
let testFormData;

describe('extractPostData fucntion: ', () => {
    beforeEach(() => {
        testFormData = { 
            title: testTitle,
            content: testContent,
            get(identifier) {
                return this[identifier];
            }
        };
    })
    it('should extract the title and the content from the provided form data', () => {
        const data = extractPostData(testFormData);

        expect(data).toHaveProperty('title');
        expect(data).toHaveProperty('content');
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
});