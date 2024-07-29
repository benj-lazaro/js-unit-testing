import { vi, it, expect, describe } from "vitest";
import { signUp, submitOrder } from "../src/mocking";
import { charge } from "../src/libs/payment";
import { isValidEmail, sendEmail } from "../src/libs/email";

// Partial mocking of email.js
vi.mock("../src/libs/email", async (importOriginal) => {
  const originalModule = await importOriginal();

  // Return the all functions of the original module except for the targeted one
  return {
    ...originalModule,
    sendEmail: vi.fn(),
  };
});

// Test case
describe("signUp", () => {
  const email = "name@domainname.net";

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

    expect(sendEmail).toHaveBeenCalled();

    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});
