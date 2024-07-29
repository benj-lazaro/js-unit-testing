import { vi, it, expect, describe } from "vitest";
import { login } from "../src/mocking";
import { sendEmail } from "../src/libs/email";
import security from "../src/libs/security";

vi.mock("../src/libs/email", async (importOriginal) => {
  const originalModule = await importOriginal();

  return {
    ...originalModule,
    sendEmail: vi.fn(),
  };
});

// Spying on functions
describe("login", () => {
  const email = "user@domainname.net";

  it("should email the one-time login code", async () => {
    const spy = vi.spyOn(security, "generateCode");

    await login(email);

    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});
