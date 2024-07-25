import { send } from "vite";
import { vi, it, expect, describe } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const sendText = vi.fn();

    // Returns the value of "ok" when called
    sendText.mockReturnValue("ok");

    // Call the mock function (and save returned value to a constant variable)
    const result = sendText("message");

    // Assert that the mock function is called
    expect(sendText).toHaveBeenCalledWith("message");

    // Assert that the result is "ok"
    expect(result).toBe("ok");
  });
});
