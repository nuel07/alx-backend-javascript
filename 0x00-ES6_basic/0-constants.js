/**
 * function that uses const for variable declaration
 * @return{string} task
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * function that has no variable
 * @return{string} is okay
 */
export function getLast() {
  return ' is okay';
}

/**
 * function that uses let for variable declaration
 * @return{string} combination
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
