import { it, expect, describe } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const result = { name: "Mosh" };
    expect(result).toEqual({ name: "Mosh" });
  });
});
