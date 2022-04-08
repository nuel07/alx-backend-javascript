/**
 * import function
 */
/* eslint-disable */
import getBudgetObject from './7-getBudgetObject.js';
/* eslint-disable */

/**
 * function that gets full budget object
 * @param{int} income
 * @param{int} gdp
 * @param{int} capita
 * @return{object} fullBudget
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
	return `$${income}`;
    },
    getIncomeInEuros(income) {
	return `${income} euros`;
    },
  };

  return fullBudget;
}
