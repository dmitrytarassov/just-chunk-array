/**
 * Splits an array into chunks of a specified maximum length.
 *
 * @template T - The type of elements in the input array.
 * @param {T[]} array - The array to be split.
 * @param {number} maxLength - The maximum number of elements per chunk (must be greater than 0).
 * @returns {T[][]} An array of chunks, where each chunk is a subarray of the original array.
 * @throws {Error} Throws an error if maxLength is less than or equal to 0.
 *
 * @example
 * // Example usage:
 * const numbers = [1, 2, 3, 4, 5];
 * const chunked = chunkArray(numbers, 2);
 * console.log(chunked); // Output: [[1, 2], [3, 4], [5]]
 */
export const chunkArray = <T>(array: T[], maxLength: number): T[][] => {
  if (maxLength <= 0) {
    throw new Error("maxLength must be greater than 0");
  }

  const length = array.length;
  if (length === 0) return [];

  const chunks = Math.ceil(length / maxLength);
  const result: T[][] = new Array(chunks);

  for (let i = 0, j = 0; i < length; i += maxLength, j++) {
    result[j] = array.slice(i, i + maxLength);
  }

  return result;
};
