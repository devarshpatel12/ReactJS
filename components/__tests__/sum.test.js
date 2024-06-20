import { sum } from "../sum";

test("Sum function should add two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
