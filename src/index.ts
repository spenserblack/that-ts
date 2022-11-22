export const prop =
  <T>(prop: keyof T) =>
  (item: T) =>
    item[prop];

export type CallableProperty<P extends string | number | symbol, Args extends any[]> = {
  [property in P]: (...args: Args) => unknown;
};

export const fn = <
  T extends CallableProperty<P, Args>,
  P extends keyof T,
  Args extends any[],
>(
  fn: P,
  ...args: Parameters<T[P]>
) => {
  return (item: T) => {
    return item[fn].call(item, ...args);
  };
};
