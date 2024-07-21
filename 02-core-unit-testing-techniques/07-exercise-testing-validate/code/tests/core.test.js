import { it, expect, describe } from "vitest";
import { validateUserInput } from "../src/core";

describe("validateUserInput", () => {
  // Positive testing
  it("should return success if given a valid user input", () => {
    expect(validateUserInput("Mosh", 30)).toMatch(/success/i);
  });

  // Negative testing
  it("should return an error if username is NOT a string", () => {
    expect(validateUserInput(20, 30)).toMatch(/invalid/i);
  });

  it("should return an error if username is less than 3 characters", () => {
    expect(validateUserInput("Mo", 30)).toMatch(/invalid/i);
  });

  it("should return an error if username is longer than 255 characters", () => {
    expect(validateUserInput("A".repeat(256), 30)).toMatch(/invalid/i);
  });

  it("should return an error if age is NOT a number", () => {
    expect(validateUserInput("Mosh", "30")).toMatch(/invalid/i);
  });

  it("should return an error if age is less than 18", () => {
    expect(validateUserInput("Mosh", 17)).toMatch(/invalid/i);
  });

  it("should return an error if age is greater than 100", () => {
    expect(validateUserInput("Mosh", 101)).toMatch(/invalid/i);
  });

  it("should return an error if both username and age are invalid", () => {
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});
