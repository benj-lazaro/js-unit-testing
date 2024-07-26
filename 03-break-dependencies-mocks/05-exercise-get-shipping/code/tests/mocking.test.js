import { vi, it, expect, describe } from "vitest";
import { getShippingInfo } from "../src/mocking";
import { getShippingQuote } from "../src/libs/shipping";

vi.mock("../src/libs/shipping");

describe("getShippingInfo", () => {
  it("should return unavailable if quote can not be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    const result = getShippingInfo("LA");
    expect(result).toMatch(/unavailable/i);
  });

  it("should return shipping info if quote can be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 50, estimatedDays: 2 });
    const result = getShippingInfo("LA");
    expect(result).toMatch("$50");
    expect(result).toMatch(/2 days/i);
    // Combined assertion in a single line
    expect(result).toMatch(/shipping cost: \$50 \(2 Days\)/i);
  });
});
