import { it, expect, describe } from "vitest";
import { isPriceInRange } from "../src/core";

describe("isPriceInRange", () => {
  // Negative boundary testing
  it("should return false if price is outside the range", () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(200, 0, 100)).toBe(false);
  });

  // Positive boundary testing
  it("should return true if price equal to the min or max range", () => {
    expect(isPriceInRange(0, 0, 100)).toBe(true);
    expect(isPriceInRange(100, 0, 100)).toBe(true);
  });

  it("should return true if price within the range", () => {
    expect(isPriceInRange(50, 0, 100)).toBe(true);
  });
});
