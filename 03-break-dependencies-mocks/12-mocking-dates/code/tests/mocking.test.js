import { vi, it, expect, describe, beforeEach } from "vitest";
import { isOnline } from "../src/mocking";

describe("isOnline", () => {
  it("should return false if current hour is outside opening hours", () => {
    // Mock system date/time a minute before availble hours
    vi.setSystemTime("2024-01-01 07:59");
    expect(isOnline()).toBe(false);

    vi.setSystemTime("2024-01-01 20:01");
    expect(isOnline()).toBe(false);
  });

  it("should return true if current hour is inside opening hours", () => {
    vi.setSystemTime("2024-01-01 08:00");
    expect(isOnline()).toBe(true);

    vi.setSystemTime("2024-01-01 19:59");
    expect(isOnline()).toBe(true);
  });
});
