/**
 * function that appends a string to each array element
 * @param{array}
 * @param{string} appendString
 * @return{array} array
 */
export default function appendToEachArrayValue(array, appendString) {
  const myArr = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    myArr[idx] = appendString + value;
  }

  return myArr;
}
