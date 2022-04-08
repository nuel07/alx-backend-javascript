/**
 * function with default parameters
 * @param{initialNumber} initialNumber
 * @param{expansion1989} expansion1989
 * @param{expansion2019} expansion2019
 */
export default function getSumofHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
