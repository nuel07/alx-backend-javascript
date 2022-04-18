/**
 * function that returns sum of ids
 * @param{list} studentList
 */
export default function (studentList) {
  const idSum = studentList.reduce((theSum, student) => theSum + student.id, 0);
  return idSum;
}
