import { vi, it, expect, describe } from "vitest";
import { getPriceInCurrency } from "../src/mocking";
import { getExchangeRate } from "../src/libs/currency";

// Define Mock function for the getExchangeRate() within getPriceInCurrency()
// This line is implicitly hoisted
vi.mock("../src/libs/currency");

describe("getPriceInCurrency", () => {
  it("should return target price in target currency", () => {
    // Program mocked getExchangeRate() to return a non-random exchange rate
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    // Call getPriceInCurrency() pass the price and exchange rate of specified country code
    const price = getPriceInCurrency(10, "AUD");
    expect(price).toBe(15);
  });
});
