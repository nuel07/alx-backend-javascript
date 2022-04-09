/**
 * function that returns employee data
 * @param{string} departmentName
 * @param{array} employees
 * @return{object}
 */
export default function createEmployeesObject(departmentName, employees) {
/* eslint-disable no-unused-vars */
  const employeesObj = {
    departmentName,
    employees,
  };
    /* eslint-disable no-unused-vars */

  return { [`${departmentName}`]: employees };
}
