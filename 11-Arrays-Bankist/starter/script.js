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

// Display movements
const displayMovements = (movements) => {
  containerMovements.innerHTML = ''

  movements.forEach((mov, index) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
                      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                       <div class="movements__value">${mov + '€'}</div>
                    </div>`

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })

}



const receiveInitials = (string) => {
  const [name, surname] = string.split(' ');
  return name[0] + surname[0];
}


accounts.forEach((account) => {
  account.userName = receiveInitials(account.owner);
})

console.log(account1);

// Balance
const calcPrintBalance = (infoMovements) => infoMovements.reduce((acc, mov) => { return acc + mov }, 0)




const calcDisplaySum = (movements) => {
  labelSumIn.textContent = movements.filter(mov => mov > 0).reduce((acc, curValue) => { return acc + curValue }, 0) + '€';
  labelSumOut.textContent = Math.abs(movements.filter(mov => mov < 0).reduce((acc, curValue) => { return acc + curValue }, 0)) + '€' || '0'
  labelSumInterest.textContent = movements.filter(mov => mov > 0).map(deposit => (deposit * 1.2 / 100)).reduce((acc, curValue) => acc + curValue) + '€';
}


// user validation
const validateUser = (userName, password) => {
  if (userName.length < 2 || password.length !== 4) return

  const account = accounts.find(account => account.userName === userName);

  if (account) {
    return account
  } else return
}

//////

const contentUser = (infoUser) => {
  containerApp.style.opacity = '1';
  displayMovements(infoUser.movements);
  calcDisplaySum(infoUser.movements);
  labelBalance.textContent = calcPrintBalance(infoUser.movements) + '€';
}

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const validationResult = validateUser(inputLoginUsername.value, inputLoginPin.value);
  if (validationResult) {
    contentUser(validationResult);
  }
})
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

// const checkDogs = (dogsJulia, dogsKate) => {
//   const dogsJuliaCopy = [...dogsJulia];
//   dogsJuliaCopy.splice(-2);
//   dogsJuliaCopy.shift();
//   const juliasKatesDogs = dogsJuliaCopy.concat(dogsKate);
//   juliasKatesDogs.forEach((dogAge, index, arr) => {
//     console.log(`Dog number ${index + 1} ${dogAge >= 3 ? `is an adult and is ${dogAge} years old` : 'is still a puppy'}`);
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const calcAverageHumanAge = (dogAges) => {
//   let humanAge, lengthArr;
//   const humanAges = dogAges.map((dogAge) => {
//     if (dogAge <= 2) {
//       humanAge = 2 * dogAge;
//     } else {
//       humanAge = 16 + (dogAge * 4);
//     }

//     if (humanAge < 18) {
//       return
//     } else {
//       return humanAge
//     }
//   }).filter((humanAge) => {
//     return humanAge !== undefined;
//   }).reduce((acc, curValue, index, arr) => { lengthArr = arr.length; return acc + curValue; });

//   const avg = humanAges / lengthArr;

//   return avg;
// }

// const avgHumanResult = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avgHumanResult2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log('avgHumanResult', avgHumanResult);
// // The map Method

// const euroToUSD = 1.1;

// const euros = movements.map((mov) => {
//   return mov * euroToUSD
// });

// console.log('euros', euros);

// Filter

// const deposits = movements.filter(movement => movement > 0)

// console.log('deposits', deposits);

// const withdrawalsArr = movements.filter(mov => mov < 0)
// console.log('withdrawalsArr', withdrawalsArr);

// const accountBalance = movements.reduce((accumulator, curValue, index, array) => { return accumulator + curValue }, 0);

// console.log(accountBalance);


// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov
// });

// console.log(max);

// let maxValue = movements[0];
// for (let i = 0; i < movements.length; i++) {
//   if (movements[i] > maxValue) maxValue = movements[i];
// }

// console.log('maxValue', maxValue);


// // find method

// console.log(movements.find(mov => mov < 0));

