/**
 * function that returns formatted employee names
 * @param{object} reportWithIterator
 * @return{string} employee names
 */
export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
