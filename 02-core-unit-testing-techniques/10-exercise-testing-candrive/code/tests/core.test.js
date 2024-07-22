import { it, expect, describe } from "vitest";
import { canDrive } from "../src/core";

describe("canDrive", () => {
  it("should return an error for invalid country code", () => {
    expect(canDrive(16, "JP")).toMatch(/invalid/i);
  });

  // US boundary tests
  it("should return false for underage in the US", () => {
    expect(canDrive(15, "US")).toBe(false);
  });

  it("should return true for minimum age in the US", () => {
    expect(canDrive(16, "US")).toBe(true);
  });

  it("should return true if age is eligible in the US", () => {
    expect(canDrive(24, "US")).toBe(true);
  });

  // UK boundary tests
  it("should return false for underage in the UK", () => {
    expect(canDrive(15, "UK")).toBe(false);
  });

  it("should return true for minimum age in the UK", () => {
    expect(canDrive(17, "UK")).toBe(true);
  });

  it("should return true if age is eligible in the UK", () => {
    expect(canDrive(24, "UK")).toBe(true);
  });
});
