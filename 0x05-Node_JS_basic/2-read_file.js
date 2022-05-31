const fs = require('fs');

function countStudents(path) {
  let content;
  try {
      content = fs.readFileSync(path, "utf8").toString();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  content = content.split('\n');
  let students = content.filter((colmn) => colmn);
  students = students.map((colmn) => colmn.split(','));
  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
  const fields = {};
  for (const s in students) {
    if (s !== 0) {
      if (!fields[students[s][3]]) {
        fields[students[s][3]] = [];
        fields[students[s][3]].push(students[s][0]);
      }
    }
  }
  delete fields.field;

  for (const k of Object.keys(fields)) {
    console.log(`Number of students in ${k}: ${fields[k].length}, List: ${fields[k].join(', ')}`);
  }
}

module.exports = countStudents;
