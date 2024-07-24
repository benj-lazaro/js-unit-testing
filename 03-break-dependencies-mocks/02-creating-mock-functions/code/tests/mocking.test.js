import { vi, it, expect, describe } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    // Create a mock function
    const greet = vi.fn();

    // Program to return a value
    // greet.mockReturnValue("Hello");
    // const result = greet();
    // console.log(result);

    // Program to return a promise
    // greet.mockResolvedValue("Hello");
    // greet().then((result) => console.log(result));

    // Program to have logic
    greet.mockImplementation((name) => "Hello " + name);

    // Test unit
    const result = greet("Mosh");

    // Assertion
    // expect(greet).toHaveBeenCalled();
    // expect(greet).toHaveBeenCalledWith("Mosh");
    expect(greet).toHaveBeenCalledOnce();
  });
});
