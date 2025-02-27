import { describe, expect, test } from "@jest/globals";

import { chunkArray } from "../src";

describe("chunkArray", () => {
  test("returns an empty array when given an empty input array", () => {
    expect(chunkArray([], 3)).toEqual([]);
  });

  test("throws an error if maxLength <= 0", () => {
    expect(() => chunkArray([1, 2, 3], 0)).toThrowError(
      "maxLength must be greater than 0",
    );
    expect(() => chunkArray([1, 2, 3], -5)).toThrowError(
      "maxLength must be greater than 0",
    );
  });

  test.each([
    { array: [1, 2, 3, 4, 5], maxLength: 2, expected: [[1, 2], [3, 4], [5]] },
    {
      array: [1, 2, 3, 4, 5, 6],
      maxLength: 3,
      expected: [
        [1, 2, 3],
        [4, 5, 6],
      ],
    },
    {
      array: [1, 2, 3, 4, 5, 6, 7],
      maxLength: 3,
      expected: [[1, 2, 3], [4, 5, 6], [7]],
    },
    {
      array: ["a", "b", "c", "d"],
      maxLength: 1,
      expected: [["a"], ["b"], ["c"], ["d"]],
    },
  ])(
    "splits the array %p into chunks of length %p correctly",
    ({ array, maxLength, expected }) => {
      expect(chunkArray<(typeof array)[0]>(array, maxLength)).toEqual(expected);
    },
  );

  test("dynamically generates arrays and verifies correct chunking", () => {
    for (let i = 0; i < 10; i++) {
      const length = Math.floor(Math.random() * 100);
      const array = Array.from({ length }, (_, j) => j);
      const maxLength = Math.floor(Math.random() * 10) + 1;
      const result = chunkArray(array, maxLength);
      // Check: the flattened result should equal the original array
      expect(result.flat()).toEqual(array);
      // Check: all chunks except the last have a length equal to maxLength
      result.slice(0, -1).forEach((chunk) => {
        expect(chunk.length).toBe(maxLength);
      });
      if (result.length > 0) {
        expect(result[result.length - 1].length).toBeLessThanOrEqual(maxLength);
      }
    }
  });
});
