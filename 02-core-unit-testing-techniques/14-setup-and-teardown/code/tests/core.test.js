import {
  it,
  expect,
  describe,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";

describe("test suite", () => {
  beforeAll(() => {
    // Executes this piece of code before all test cases
    console.log("beforeAll() called...");
  });

  beforeEach(() => {
    // Executes this piece of code before each test case
    console.log("beforeEach() called...");
  });

  afterEach(() => {
    // Executes this piece of code after each test case
    console.log("afterEach() called...");
  });

  afterAll(() => {
    // Executes this piece of code after all test cases
    console.log("afterAll() called...");
  });

  it("test case 1", () => {});

  it("test case 2", () => {});
});
