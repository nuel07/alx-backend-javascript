/**
 * function that uses const for variable declaration
 * @return {string} The variable value
 */
export function taskFirst() {
  const task = 'I prefer const when I can';
  return task;
}
/**
 * functions with no varible
 * @return {string}
 */
export function getLast() {
  return 'is okay';
}
/**
 * function that uses let for variable declaration
 * @return {string} The variable value
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
