export default function getListStudentIds(studentsArray) {
  if (Array.isArray(studentsArray)) {
    const idsArray = studentsArray.map((student) => student.id);
    return idsArray;
  }
  return [];
}
