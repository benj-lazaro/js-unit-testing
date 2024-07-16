import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

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

// TDD Demo
describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate the average of two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it("should calculate the average of three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
