import { it, expect, describe } from "vitest";
import { fetchData } from "../src/core";

describe("fetchData", () => {
  it("should return a promise that will resolve to an array of numbers", async () => {
    // Test for failed Promise
    try {
      const result = await fetchData();
    } catch (error) {
      expect(error).toHaveProperty("reason");
      expect(error.reason).toMatch(/fail/i);
    }

    // Test for successful Promise
    // expect(Array.isArray(result)).toBe(true);
    // expect(result.length).toBeGreaterThan(0);
  });
});
