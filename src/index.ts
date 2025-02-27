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
