import { it, expect, describe } from "vitest";
import { isValidUsername } from "../src/core";

describe("isValidUsername", () => {
  const minLength = 5;
  const maxLength = 15;

  // Negative boundary testing
  it("should return false if username is less than minLength", () => {
    expect(isValidUsername("a".repeat(minLength - 1))).toBe(false);
  });

  it("should return false if username is greater than maxLength", () => {
    expect(isValidUsername("a".repeat(maxLength + 1))).toBe(false);
  });

  // Positive boundary testing
  it("should return true if username is at minLength and maxLength", () => {
    expect(isValidUsername("a".repeat(minLength))).toBe(true);
    expect(isValidUsername("a".repeat(maxLength))).toBe(true);
  });

  it("should return true if username is within minLength and maxLength", () => {
    expect(isValidUsername("a".repeat(minLength + 1))).toBe(true);
    expect(isValidUsername("a".repeat(maxLength - 1))).toBe(true);
  });

  it("should return false for invalid input types", () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(1)).toBe(false);
  });
});
