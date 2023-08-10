'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const displayMovements = (movements) => {
  containerMovements.innerHTML = ''

  movements.forEach((mov, index, array) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
                      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                       <div class="movements__value">${mov}</div>
                    </div>`

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })

}

displayMovements(account1.movements)

/////////////////////////////////////////////////

// Simple Array Methods

// const arr = ['a', 'b', 'c', 'd', 'e'];

// // console.log(arr.slice(0, 3)); // ---> ['a', 'b', 'c']
// console.log(arr.slice(1, -2)); // ---> [ 'b', 'c' ]
// console.log(arr.slice()); // shallow copy

// // Method splice

// const splicedArr = arr.splice(1);
// console.log('splicedArr', splicedArr);
// console.log(splicedArr.splice(1, 2)); // [b, e]

// // Reverse

// const irregularArr = ['e', 'd', 'c', 'b', 'a'];
// const correctOrder = irregularArr.reverse();
// console.log('correctOrder', correctOrder);

// // Concat 

// const letters = arr.concat(correctOrder);
// console.log('letters', letters);

// // join method 

// console.log(irregularArr.join('-'));

// Es 2022 method 

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // forEach loop

// movements.forEach((movement, index, arr) => {
//   if (movement > 0) {
//     console.log(`Movement ${index} You deposited your money ${movement}`);
//   } else {
//     console.log(`Movement ${index} You withdrew your money :( ${Math.abs(movement)}`);
//   }
// })

// // forEach With Maps and Sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((currency, i, map) => {
//   console.log(`${i}: ${currency}`);
// })

// const uniqueValues = new Set([1, 3, 3, 3, 5, 6, 9, 2]);

// uniqueValues.forEach((value, index, arr) => {
//   console.log(`${index}: ${value}`);
// })


// coding challenge 1

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(-2);
  dogsJuliaCopy.shift();
  const juliasKatesDogs = dogsJuliaCopy.concat(dogsKate);
  juliasKatesDogs.forEach((dogAge, index, arr) => {
    console.log(`Dog number ${index + 1} ${dogAge >= 3 ? `is an adult and is ${dogAge} years old` : 'is still a puppy'}`);
  })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// The map Method

const euroToUSD = 1.1;

const euros = movements.map((mov) => {
  return mov * euroToUSD
});

console.log('euros', euros);

