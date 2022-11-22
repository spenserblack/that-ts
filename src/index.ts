export const prop =
  <T>(prop: keyof T) =>
  (item: T) =>
    item[prop];

// TODO: Enforce more at compile-time, less at runtime
export const fn = <T, P extends keyof T=keyof T, V extends T[P]=T[P]>(
  fnName: P,
  ...args: V extends (...args: any[]) => any ? Parameters<V> : never
) => {
  return (item: T) => {
    const fn = item[fnName];
    if (!(typeof fn === "function")) {
      throw new TypeError(`'${String(fnName)}' must be a callable`);
    }
    return fn.call(item, ...args);
  };
};
