export const prop =
  <T>(prop: keyof T) =>
  (item: T) =>
    item[prop];
