/**
 * function that returns employee data
 * @param{string} departmentName
 * @param{array} employees
 * @return{object}
 */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObj = {
    departmentName,
    employees,
  };

  return { [`${departmentName}`]: employees };
}
