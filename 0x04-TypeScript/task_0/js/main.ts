interface Student {
	  firstName: string;
	  lastName: string;
	  age: number;
	  location: string;
}
const student1: Student = {firstName: 'Promise',
      			  lastName: 'Yehangane',
			  age: 24,
			  location: 'Kampala'
			  };
const student2: Student = {firstName: 'Nuel',
      			  lastName: 'Sezerano',
			  age: 26,
			  location: 'Toronto'
			  };
const studentsList = [student1, student2];
let table = document.createElement('table');
document.getElementById("studentsList").appendChild(table);