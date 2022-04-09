/**
 * function that divides two numbers
 * @param{int} numerator
 * @param{int} denominator
 * @return{int} result
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / denominator;
}
