interface DirectorInterface {
	  workFromHome(): string;
	  getCoffeeBreak(): string;
	  workDirectorTasks(): string;
}

interface TeacherInterface {
	  workFromHome(): string;
	  getCoffeeBreak(): string;
	  workTeacherTasks(): string;
	  
}

class Director implements DirectorInterface {
      workFromHome() {
      		     return "Working from home";
      }
      getToWork() {
      		       return "Getting a coffee break";
      }
      workDirectorTasks() {
      			  return "Getting to director tasks";
      }

}

class Teacher implements TeacherInterface() {
      workFromHome() {
      		     return "Cannot work from home";
      }
      getCoffeeBreak() {
      		       return "Cannot have a break";
      }
      workTeacherTasks() {
      			 return "Getting to work";
      }
}

function createEmployee(salary: number | string) {
	 if(typeof salary === "number" && salary < 500) {
	 	  const tr = new Teacher();
	 	  return tr;
	 }
	 const director = new Director();
	 return director;
}

function isDirector(employee: string) {
}

function executeWork(employee: string) {
	 if(employee === 'Director') {
	      workDirectorTasks();
	 }
	 workTeacherTasks();
}

const Subjects = "Math" | "History";

function teachClass(todayClass: string) {
	 if(todayClass === "Math") {
	 	       return "Teaching Math";
	 }
	 if(todayClass === "History") {
	 	       return "Teaching History";
	}
}