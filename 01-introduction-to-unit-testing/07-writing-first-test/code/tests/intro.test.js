import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

// Create a test suite
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
