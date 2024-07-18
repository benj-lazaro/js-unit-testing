import { it, expect, describe } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    // Strings
    // const result = "The requested file was not found.";
    // ---
    // Loose assertion (too general; it will ALWAYS pass)
    // expect(result).toBeDefined();
    // ---
    // Tight assertion (too specific; it can easily get wreck by a typo)
    // expect(result).toBe("The requested file was not found.");
    // ---
    // Better assertion (using a string or regular expression pattern)
    // expect(result).toMatch("not found");
    // expect(result).toMatch(/not found/i);

    // Arrays
    // const result = [1, 2, 3];
    // ---
    // Loose assertion
    // expect(result).toBeDefined();
    // ---
    // Tight assertion (can get wrecked due to its dependency on the exact order of an array's elements)
    // expect(result).toEqual([1, 2, 3]);
    // ---
    // Flexible assertion that is NOT dependent on array's order of elements
    // expect(result).toEqual(expect.arrayContaining([3, 1, 2]));
    // ---
    // Assertion for the length of an array (can get wrecked once the length changes)
    // expect(result).toHaveLength(3);
    // ---
    // Flexible assertion on the length of an array; adaptable to possible future changes on the length
    // expect(result.length).toBeGreaterThan(0);

    // Objects
    const result = { name: "Mosh", age: 100 };

    // Assertion can get wrecked if the object acquires additional properties at a later time
    // expect(result).toEqual({ name: "Mosh" });

    // Flexible assertion that can adapt to additional properties added later
    expect(result).toMatchObject({ name: "Mosh" });

    // Assertion that checks the presence of a specific property in an object
    expect(result).toHaveProperty("name");

    // Assertion that checks the value of a property to be of a specific data type
    expect(typeof result.name).toBe("string");
  });
});
