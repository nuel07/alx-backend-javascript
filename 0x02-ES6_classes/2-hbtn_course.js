/** A class that represents a Holberton Course */
export default class HolbertonCourse {
  /**
     * create a HolbertonCourse
     * @param{string} name - The course name
     * @param{number} length - The course duration
     * @param{array} students - The student names
     */
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('students must be an array');
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('The student name must be a string');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /** getter method for name */
  get name() {
    return this._name;
  }

  /** setter method for name */
  set name(theName) {
    if (typeof theName !== 'string') throw TypeError('Name must be a string');
    this._name = theName;
  }

  /** getter method for length */
  get length() {
    return this._length;
  }

  /** setter method for length */
  set length(theLength) {
    if (typeof theLength !== 'number') throw TypeError('Length must be a number');
    this._length = theLength;
  }

  /** getter method for students */
  get students() {
    return this._students;
  }

  /** setter method for students */
  set students(theStudents) {
    if (!Array.isArray(theStudents)) throw TypeError('students must be an array');
    theStudents.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('The student must be a string');
    });
    this._students = theStudents;
  }
}
