![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdmitrytarassov%2Fjust-chunk-array%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24.version&style=for-the-badge&label=just-chunk-array&link=%24.repository)

```typescript
chunkArray([🐮, 🐑, 🐈, 🐙,🐓], 2) // [[🐮, 🐑], [🐈, 🐙] ,[🐓]]
```

# chunkArray

A utility function that splits an array into subarrays (chunks) of a specified maximum length.

## Features

- **Efficient Chunking:** Pre-calculates the number of chunks to allocate the result array optimally.
- **Type-Safe:** Written in TypeScript for generic type support.
- **Error Handling:** Throws an error if the provided `maxLength` is not greater than zero.

## Installation

Simply include the `chunkArray` function in your project. If you're using ES modules:

```ts
import { chunkArray } from 'just-chunk-array';
```

## Usage

### Basic Example

```ts
const numbers = [1, 2, 3, 4, 5];
const maxLength = 2;
const result = chunkArray(numbers, maxLength);
// result: [[1, 2], [3, 4], [5]]
```

### Handling Invalid Input

```ts
try {
  chunkArray([1, 2, 3], 0);
} catch (error) {
  console.error(error.message); // "maxLength must be greater than 0"
}
```

## Parameters

- **`array`** (`T[]`): The array to be chunked.
- **`maxLength`** (`number`): The maximum size for each chunk (must be greater than 0).

## Return Value

- **`T[][]`**: An array of chunks, where each chunk is a subarray of the original array with a maximum length of `maxLength`.

## Performance Considerations

- **Preallocation:** Calculates the required number of chunks to allocate the result array in one step, minimizing memory reallocations.
- **Optimized Loop:** Iterates through the array in steps of `maxLength`, reducing loop overhead.

## Testing

A comprehensive test suite is provided, including dynamic tests with randomly generated arrays, ensuring:

- Correct chunking of arrays.
- Preservation of the original array's order after chunking.
- Proper error handling when `maxLength` is invalid.

## License

This project is licensed under the MIT License.
