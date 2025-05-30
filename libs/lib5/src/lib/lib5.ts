/**
 * Adds two numbers together
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 */
export function addNumbers(a: number, b: number): number {
  return a + b;
}

/**
 * Adds an array of numbers together
 * @param numbers - Array of numbers to sum
 * @returns The sum of all numbers
 */
export function addMultipleNumbers(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
