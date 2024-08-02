export function max(a, b) {
  return a > b ? a : b;
}

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  if (numbers.length === 1) return numbers[0];

  const sum = numbers.reduce((sum, current) => sum + current, 0);
  return sum / numbers.length;
}

// Exercise Test Suite for factorial()
export function factorial(number) {
  if (number < 0) return undefined;
  if (number === 0 || number === 1) return 1;

  return number * factorial(number - 1);
}
