/**
 * function that gets budget of state
 * @param{int} income
 * @param{int} gdp
 * @param{int} capita
 * @return{object} budget
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
