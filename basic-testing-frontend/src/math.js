import { cleanNumbers } from './util/numbers.js';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

export function calculateResult(inputValues) {
  let result = '';

  try {
    const numbers = cleanNumbers(inputValues);

    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}