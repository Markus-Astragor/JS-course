// 1. Changing var to let or const
// 2. change to meaningful names
// 3. refactor logic a bit
const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = (user) => spendingLimits?.[user] ?? 0;


const addExpenses = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  // bad variant
  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  // good one
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // better
  if (value <= getLimit(user)) budget.push({ value: -value, description, user });
};
addExpenses(10, 'Pizza 🍕');
addExpenses(100, 'Going to movies 🍿', 'Matilda');
addExpenses(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const el of budget) {
    if (el.value < -getLimit(el.user)) el.flag = 'limit';
  }
};
checkExpenses();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (const el of budget) {
    output += el.value <= -limit ? el.description.slice(-2) + ' / ' : ''  // Emojis are 2 chars
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

bigExpenses(1000);