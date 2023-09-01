'use strict'
// 1. Changing var to let or const
// 2. change to meaningful names
// 3. refactor logic a bit
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpenses = function (state, limits, value, description, user = 'jonas') {
  user = user.toLowerCase();
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser) ? [...state, { value: -value, description, user: cleanUser }] : state;
};
const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpenses(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function (state, limits) {
  // for (const el of budget) {
  //   if (el.value < -getLimit(el.user)) el.flag = 'limit';
  // }
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry;
  })
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);

console.log(budget);

const logBigExpenses = function (state, limit) {
  const bigExpenses = state.filter(entry => entry.value <= -limit).map(entry => entry.description.slice(-2)).join('/');
  console.log('bigExpenses', bigExpenses);
};

logBigExpenses(finalBudget, 1000);