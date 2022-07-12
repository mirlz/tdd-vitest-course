import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText } from './src/output.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  const result = calculateResult(numberValues);
  const resultText = generateResultText(result);
  
  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
