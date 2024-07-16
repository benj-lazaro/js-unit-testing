import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

// Test suite for max()
describe("max", () => {
  it("should return the 1st argument if it is greater", () => {
    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(2);
  });

  it("should return the 2nd argument if it is greater", () => {
    // Compressed AAA pattern
    expect(max(1, 2)).toBe(2);
  });

  it("should return the 1st argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

// Test suite for fizzbuzz()
describe("fizzbuzz", () => {
  it("should return 'FizzBuzz' if argument value is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return 'Fizz' if argument value is only divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return 'Buzz' if argument value is only divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return argument value as a string if it is not divisible by 3 and/or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
