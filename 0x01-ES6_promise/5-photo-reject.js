/**
 * function that returns rejected promise
 * @param{string} filename
 * @return{string}
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
