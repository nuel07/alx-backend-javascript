export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const combinedList = studentList
    .filter((student) => student.location === city)
    .map((stdnts) => {
      const newList = { ...stdnts };
      const newStdnt = newGrades.find((student) => student.studentId === stdnts.id);
      if (newStdnt) newList.grade = newStdnt.grade;
      else newList.grade = 'N/A';
      return newList;
    });
  return combinedList;
}
