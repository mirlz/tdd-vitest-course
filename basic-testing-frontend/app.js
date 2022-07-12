import { extractValuesFromForm } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const values = extractValuesFromForm(form);
  const result = calculateResult(values);
  const resultText = generateResultText(result);
  
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
