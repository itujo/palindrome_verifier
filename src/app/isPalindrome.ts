export function isPalindrome(input: string): boolean {
  const sanitizedInput = input.replace(/\W/g, '').toLowerCase();
  const length = sanitizedInput.length;

  for (let i = 0; i < length; i++) {
    if (sanitizedInput[i] !== sanitizedInput[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
