import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('should return true for "   @#AmOR  a  ROma!"', () => {
    expect(isPalindrome('   @#AmOR  a  ROma!')).toBe(true);
  });

  it('should return true for "Amor a Roma"', () => {
    expect(isPalindrome('Amor a Roma')).toBe(true);
  });

  it('should return false for "Hello, world!"', () => {
    expect(isPalindrome('Hello, world!')).toBe(false);
  });

  it('should return true for "Racecar"', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  it('should return false for "Isso não é um palíndromo"', () => {
    expect(isPalindrome('Isso não é um palíndromo')).toBe(false);
  });

  it('should return true for "A dama admirou o rim da amada."', () => {
    expect(isPalindrome('A dama admirou o rim da amada.')).toBe(true);
  });

  it('should return true for "Socorram-me, subi no ônibus em Marrocos."', () => {
    expect(isPalindrome('Socorram-me, subi no ônibus em Marrocos.')).toBe(true);
  });
});
