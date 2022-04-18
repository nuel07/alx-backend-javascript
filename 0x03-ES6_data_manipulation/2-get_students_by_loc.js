/**
 * function that returns an array of objects for a specific city
 * @param{list} studentsArray
 * @param{string} city - the specific city
 */
export default function getStudentsByLocation(studentsArray, city) {
  const cityList = studentsArray.filter((student) => student.location === city);
  return cityList;
}
