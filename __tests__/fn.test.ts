import { expect, test } from "@jest/globals";
import { fn } from "../src/index";

test("It returns a callable calls the named method", () => {
  type Obj = {
    add(a: number, b: number): number;
  };
  const obj: Obj = {
    add: (a: number, b: number) => a + b,
  };
  const callable = fn<Obj>('add', 1, 2);
  expect(callable(obj)).toBe(3);
});

test("It binds the callable to its class", () => {
  const callable = fn<number>('toString');
  expect(callable(1)).toBe('1');
});
