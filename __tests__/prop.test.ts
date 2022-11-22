import { expect, test } from "@jest/globals";
import { prop } from "../src/index";

test("It returns a callable that returns the named property", () => {
  const callable = prop<{ foo: string }>("foo");
  expect(callable({ foo: "bar" })).toBe("bar");
});

test("It returns a callable that gets the indexed value from an array", () => {
  const callable = prop<string[]>(0);
  expect(callable(["foo"])).toBe("foo");
});
