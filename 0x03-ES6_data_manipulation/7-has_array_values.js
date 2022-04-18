/**
 * function that returns boolean asserting array values' presence in set
 * @param{Set} theSet
 * @param{Array} theArray
 */
const hasValuesFromArray = (theSet, theArray) => theArray.every((value) => theSet.has(value));
export default hasValuesFromArray;
