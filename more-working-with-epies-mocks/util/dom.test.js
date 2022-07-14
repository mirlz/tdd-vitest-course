// @vitest-environment happy-dom

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Window } from 'happy-dom';
import fs from 'fs';
import path from 'path';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

// emulate virtual dom
const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

describe('showError function: ', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        document.write(htmlDocumentContent);
    })

    it('should add an error paragraph to the error container element, id="errors', () => {
        const testMessage = 'test';
        showError(testMessage);

        const errorsElement = document.getElementById('errors');
        const errorParagraph = errorsElement.firstElementChild;

        expect(errorParagraph).not.toBeNull();
        expect(errorParagraph.getInnerHTML()).toBe(testMessage);
    });

    it('should not contain an error paragraph initially', () => {
        const errorsElement = document.getElementById('errors');
        const errorParagraph = errorsElement.firstElementChild;

        expect(errorParagraph).toBeNull();
    });
});