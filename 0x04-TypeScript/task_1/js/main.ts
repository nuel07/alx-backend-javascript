interface Teacher {
	  readonly firstName: string;
	  readonly lastName: string;
	  fullTimeEmployee: boolean = false;
	  yearsOfExperiencee?: number;
	  location: string = "London";
	  [key: string]: any;
}

interface Directors extends Teacher {
	  numberOfReports: number;
}
function printTeacher(firstName, lastName) {
	 return firstName.charAt(0).toUpperCase() + '.' + lastName;
}

interface PrintName {
	  firstName: string;
	  lastName: string;
}
function printTeacherFunction(teacher: PrintName) {
}

class StudentClass {
      firstName: string;
      lastName: string;

      constructor(firstName: string, lastName: string) {
      			     this._firstName = firstName;
			     this._lastName = lastName;
      }
      workOnHomeWork() {
      		       return "Currently working";
      }
      displayName() {
      		    return this._firstName;
      }
}