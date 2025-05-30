import { addNumbers, addMultipleNumbers } from './lib5';

describe('lib5', () => {
  describe('addNumbers', () => {
    it('should add two positive numbers correctly', () => {
      expect(addNumbers(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      expect(addNumbers(-2, -3)).toBe(-5);
    });

    it('should add positive and negative numbers correctly', () => {
      expect(addNumbers(5, -3)).toBe(2);
    });

    it('should handle zero', () => {
      expect(addNumbers(0, 5)).toBe(5);
      expect(addNumbers(5, 0)).toBe(5);
      expect(addNumbers(0, 0)).toBe(0);
    });

    it('should handle decimals', () => {
      expect(addNumbers(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe('addMultipleNumbers', () => {
    it('should add multiple numbers correctly', () => {
      expect(addMultipleNumbers([1, 2, 3, 4])).toBe(10);
    });

    it('should handle empty array', () => {
      expect(addMultipleNumbers([])).toBe(0);
    });

    it('should handle single number', () => {
      expect(addMultipleNumbers([5])).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(addMultipleNumbers([1, -2, 3, -4])).toBe(-2);
    });
  });
});
