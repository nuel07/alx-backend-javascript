/**
 * function that will take into argument a report object
 * @param{object} report
 * @return{list} employees
 */
export default function createIteratorObject(report) {
  let employeeList = [];
  for (const value of Object.values(report.allEmployees)) {
    employeeList = [...employeeList, ...value];
  }

  return employeeList;
}
