import { describe, expect, test } from "@jest/globals";
import { prop as p, fn } from "../src/index";

describe("prop", () => {
  test("it gets the named property", () => {
    const arr = [{ foo: "bar" }, { foo: "baz" }];
    expect(arr.map(p("foo"))).toEqual(["bar", "baz"]);
  });
});

describe("fn", () => {
  test("it calls the named method", () => {
    expect([1, 2, 3].map(fn("toString"))).toEqual(["1", "2", "3"]);
  });

  test("it calls the named method and provided arguments", () => {
    expect([8, 10, 12].map(fn("toString", 16))).toEqual(["8", "a", "c"]);
  });
});
