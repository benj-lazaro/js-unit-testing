import { vi, it, expect, describe, beforeEach } from "vitest";
import { signUp, submitOrder } from "../src/mocking";
import { charge } from "../src/libs/payment";
import { isValidEmail, sendEmail } from "../src/libs/email";

// Partial mock email.js
vi.mock("../src/libs/email", async (importOriginal) => {
  const originalModule = await importOriginal();

  // Return the all functions of the original email.js module except for sendEmail
  return {
    ...originalModule,
    sendEmail: vi.fn(),
  };
});

// Test suite
describe("signUp", () => {
  const email = "name@domainname.net";

  // Clears the state of a Mocked function before each test case
  // beforeEach(() => {
  //   vi.clearAllMocks();
  // });

  // Test case(s)
  it("should return false if email is not valid", async () => {
    const result = await signUp("a");
    expect(result).toBe(false);
  });

  it("should return true if email is valid", async () => {
    const result = await signUp(email);
    expect(result).toBe(true);
  });

  it("should send welcome email if email is valid", async () => {
    const result = await signUp(email);

    expect(sendEmail).toHaveBeenCalledOnce();

    // The global ".mock" property stores/accumulates how many times a Mocked function is called
    // It is best practice to reset the property for each test case in a suite
    const args = vi.mocked(sendEmail).mock.calls[0];

    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});
