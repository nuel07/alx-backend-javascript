/**
 * function that concatenates arrays and a string
 * @param{array1} array1 is the first array
 * @param{array2} array2 is the second array
 * @param{string} string is the string
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
