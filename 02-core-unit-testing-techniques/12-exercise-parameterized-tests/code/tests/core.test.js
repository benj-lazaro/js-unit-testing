import { it, expect, describe } from "vitest";
import { isPriceInRange } from "../src/core";

describe("isPriceInRange", () => {
  const min = 0;
  const max = 100;

  it.each([
    {
      scenario: "price < min",
      price: -10,
      result: false,
    },
    {
      scenario: "price = min",
      price: 0,
      result: true,
    },
    {
      scenario: "price between min and max",
      price: 50,
      result: true,
    },
    {
      scenario: "price = max",
      price: 100,
      result: true,
    },
    {
      scenario: "price > max",
      price: 200,
      result: false,
    },
  ])("should return $result when $scenario", ({ price, result }) => {
    expect(isPriceInRange(price, min, max)).toBe(result);
  });
});
