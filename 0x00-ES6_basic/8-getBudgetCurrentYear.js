/**
 * function that get current date
 * @return{date}
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * function that gets current year budget
 * @param{int} income
 * @param{int} gdp
 * @param{int} capita
 * @return{object} budget
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
