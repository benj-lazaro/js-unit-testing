import { vi, it, expect, describe } from "vitest";
import { renderPage } from "../src/mocking";
import { trackPageView } from "../src/libs/analytics";

vi.mock("../src/libs/analytics");

describe("renderPage", () => {
  it("should return correct content", async () => {
    const result = await renderPage();
    expect(result).toMatch(/content/i);
  });

  it("should call analytics", async () => {
    await renderPage();
    expect(trackPageView).toHaveBeenCalledWith("/home");
  });
});
