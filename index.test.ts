import { expect, test, describe } from "bun:test";
import { Solution } from ".";

describe("merge", () => {
  const solution = new Solution();
  test("should work properly", () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    expect(solution.merge(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should work when length not equal", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];
    expect(solution.merge(arr1, arr2)).toEqual([1, 4, 2, 5, 3]);
  });

  test("should work when one arr is null", () => {
    const arr1 = [] as number[];
    const arr2 = [1, 2, 3];
    expect(solution.merge(arr1, arr2)).toEqual([1, 2, 3]);
  });

  test("should work when sencond is null", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [] as number[];
    expect(solution.merge(arr1, arr2)).toEqual([1, 2, 3]);
  });
});
