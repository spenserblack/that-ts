import { test, expect } from "@jest/globals";
import add2 from "../src/index";

test("It works", () => {
  expect(add2(1)).toBe(3);
});
