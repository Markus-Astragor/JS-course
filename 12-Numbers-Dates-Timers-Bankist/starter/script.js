'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-08-03T14:18:46.235Z',
    '2020-08-10T16:33:06.386Z',
    '2020-08-14T14:43:26.374Z',
    '2020-08-15T18:49:59.371Z',
    '2020-08-16T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(value)
}

// Display movements
const displayMovements = (acc, sort = false) => {

  const formatDays = (date) => {

    const daysBetween = (...dates) => {
      const [firstDate, secondDate] = dates;
      return Math.round(Math.abs(secondDate - firstDate) / (1000 * 60 * 60 * 24))
    }
    const daysPassed = daysBetween(new Date(), date);
    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed < 7) return `${daysPassed} days ago`;
    else {
      return new Intl.DateTimeFormat(acc.locale).format(date);
    }
  }

  containerMovements.innerHTML = '';

  const sortMovs = sort ? acc.movements.slice().sort((curValue, nextValue) => curValue - nextValue) : acc.movements
  sortMovs.forEach((mov, index) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const dateMov = new Date(acc.movementsDates[index]);
    console.log('dateMov', dateMov);
    const formattedDays = formatDays(dateMov);
    const formattedMove = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: acc.currency,
    }).format(mov);

    const html = `<div class="movements__row">
                      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                        <div class="movements__date">${formattedDays}</div>
                       <div class="movements__value">${formattedMove}</div>
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
const calcPrintBalance = (infoMovements) => infoMovements.reduce((acc, mov) => acc + mov, 0)




const calcDisplaySum = (infoUser) => {
  const incomeSum = infoUser.movements.filter(mov => mov > 0).reduce((acc, curValue) => acc + curValue, 0).toFixed(2);
  labelSumIn.textContent = formatCur(incomeSum, infoUser.locale, infoUser.currency);
  const sumOut = Math.abs(infoUser.movements.filter(mov => mov < 0).reduce((acc, curValue) => { return acc + curValue }, 0)).toFixed(2) || '0'
  labelSumOut.textContent = formatCur(sumOut, infoUser.locale, infoUser.currency);
  const interestSum = infoUser.movements.filter(mov => mov > 0).map(deposit => (deposit * infoUser.interestRate / 100)).reduce((acc, curValue) => acc + curValue).toFixed(2);
  labelSumInterest.textContent = formatCur(interestSum, infoUser.locale, infoUser.currency);
}


// user validation
const validateUser = (userName, password) => {
  if (userName.length < 2 || password.length !== 4) return

  const account = accounts.find(account => account.userName === userName);

  if (password === 'send') return account;

  if (account.pin === Number(password)) {
    return account
  } else return
}

//////

let currentUser, timer;


const startLogOutTimer = () => {
  let timeRemained = 300;
  const logoutTimer = setInterval(() => {
    const min = String(Math.trunc(timeRemained / 60)).padStart(2, 0)
    const seconds = String(timeRemained % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${seconds}`;



    if (timeRemained === 0) {
      clearInterval(logoutTimer);
      containerApp.style.opacity = '0';
      labelWelcome.textContent = 'Log in to get started';
      return
    }
    else timeRemained--

  }, 1000)

  return logoutTimer;
}


const contentUser = (infoUser) => {
  currentUser = infoUser;
  containerApp.style.opacity = '1';
  displayMovements(infoUser);
  calcDisplaySum(infoUser);
  const calcedBalance = calcPrintBalance(infoUser.movements);
  labelBalance.textContent = formatCur(calcedBalance, currentUser.locale, currentUser.currency);
  inputLoginUsername.value = inputLoginPin.value = '';
  labelWelcome.textContent = 'Welcome, ' + infoUser.owner;
  const now = new Date();
  labelDate.textContent = new Intl.DateTimeFormat(currentUser.locale).format(now);
  if (timer) clearInterval(timer)
  timer = startLogOutTimer();
}





btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const validationResult = validateUser(inputLoginUsername.value, inputLoginPin.value);
  if (validationResult) {
    contentUser(validationResult);
  }
})

// transfer money logic

// creating new Date function
const createCurrentDate = (user) => {
  const currentDate = new Date();
  user.movementsDates.push(currentDate.toISOString());

}

/////

const moneyTransferValidation = (sum, user) => {
  if (sum <= 0) {
    return console.log('You can`t send money below 0');
  }

  if (!user) {
    return
  } else {

    if (user === currentUser) return
    const balance = calcPrintBalance(currentUser.movements);

    if (balance <= 0) return

    currentUser.movements.push(-sum);
    createCurrentDate(currentUser);
    user.movements.push(sum);
    createCurrentDate(user);
    contentUser(currentUser);
  }


}

btnTransfer.addEventListener('click', (event) => {
  event.preventDefault();
  const foundUser = validateUser(inputTransferTo.value, 'send');
  moneyTransferValidation(Number(inputTransferAmount.value), foundUser);
})

// deleting account

const deleteAccount = (userObject) => {
  const index = accounts.findIndex(account => account === userObject);
  accounts.splice(index, 1);
  containerApp.style.opacity = '0';
}

btnClose.addEventListener('click', (event) => {
  event.preventDefault();
  const foundUserForDelete = validateUser(inputCloseUsername.value, inputClosePin.value);
  deleteAccount(foundUserForDelete);
})

// requesting loan

const requestLoan = (amount) => {
  console.log(currentUser.movements.some((mov) => mov * 0.1 >= amount));
  if (amount <= 0 || !(currentUser.movements.some((mov) => mov * 0.1 >= amount))) {
    return
  } else {
    setTimeout(() => {
      currentUser.movements.push(amount);
      createCurrentDate(currentUser);
      contentUser(currentUser);
    }, 3000)
  }
}

btnLoan.addEventListener('click', (event) => {
  event.preventDefault();

  requestLoan(Number(inputLoanAmount.value))
})

let stateSort = true
btnSort.addEventListener('click', (event) => {
  event.preventDefault();
  displayMovements(currentUser, stateSort);
  stateSort = !stateSort
})


// every third row in green
labelBalance.addEventListener('click', () => {
  [...document.querySelectorAll('.movements__row')].forEach((row, index) => {
    if (index % 3 === 0) row.style.backgroundColor = 'green';
  })
})


// date



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and Checking Numbers
console.log(parseInt('23edfsfs'));
console.log(parseFloat('23.5rem'));
console.log(isNaN(23));
console.log(isNaN(+'23X'));
console.log('isFinite(23)', isFinite(23)); // true


// Math and Rounding
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 3));


// Math max method and min
console.log(Math.max(1, 10, 17, 23));
console.log(Math.max(1, 10, 17, '23'));

console.log(Math.min(1, 10, 17, '23'));

// Math.PI

console.log('math pi', Math.trunc(Math.PI * Number.parseFloat('10px') ** 2));
console.log(Math.trunc(Math.random() * 6) + 1);
console.log('trunc', Math.trunc(23.3333)); // removes decimal part

// Math.ceil

console.log('264', Math.ceil(23.9)); // 24

//Math.floor()

console.log(Math.floor(24.5)); // 24

//toFixed()

console.log(+(20.345).toFixed(1)); // 20.3

//Numeric Separators 
// f.e these underScores _ 100_000_000

const diameterSolarSystem = 287_460_000_000;

// it doesn't work with strings

console.log(Number('23_000')); // NaN


// Working with BigInt
console.log(2 ** 53 - 1); // the biggest number which js can represent safely
console.log(Number.MAX_SAFE_INTEGER); // the biggest number which js can represent safely

//
console.log(21368126873617283128637816286636128637612731286386127368126738154326128343912n);
console.log(BigInt(21368126873617283128637816286636128637612731286386127368126738154326128343912));

// Operations
// it can't mix with usual numbers

const myBigInt = 1000000000000000000000000000000000000000000000000n
const regNum = 23;
//console.log(myBigInt * regNum); // Uncaught TypeError: can't convert BigInt to number

// we can't do math operations on bigInts
//console.log(Math.sqrt(myBigInt)); // Uncaught TypeError: can't convert BigInt to number

// in divisions it cuts off decimal part
console.log(11n / 3n); // 3n


// Creating Dates

const currentTime = new Date();
console.log('currentTime', currentTime);

console.log('needed date', new Date('Aug 02 2021 18:05:27'));

console.log(new Date('February 24, 2022'));

console.log(new Date(2004, 10, 15, 14, 21, 20)); //  Mon Nov 15 2004 14:21:20 GMT+0200  month is zero-based that's why here is not October

console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300
console.log(new Date(7 * 24 * 60 * 60 * 1000));

// working with dates

const futureEndWar = new Date(2024, 10, 16, 15, 22, 21);

console.log('futureEndWar', futureEndWar);

console.log(futureEndWar.getFullYear()); // 2024
console.log(futureEndWar.getMonth()); // zero-based 11 actual but output 10
console.log(futureEndWar.getDate()); // 16 returns a day in date 
console.log(futureEndWar.getDay());// returns a day from a week
console.log(futureEndWar.getMinutes()); // 22
console.log(futureEndWar.getHours()); // as expected 15
console.log(futureEndWar.getSeconds());// as expected 21
console.log(futureEndWar.toISOString()); // 2024-11-16T13:22:21.000Z
console.log(futureEndWar.getTime()); // miliseconds to create date 1731763341000
console.log(new Date(1731763341000)); // Sat Nov 16 2024 15:22:21 GMT+0200
console.log(Date.now());

console.log(futureEndWar.setFullYear(2024));

// Operations With Dates



// const currentDateToday = new Date();


// console.log('my', daysBetween(futureEndWar, currentDateToday));

// Internationalizing Numbers (Intl)

const options = {
  style: 'currency',
  currency: 'EUR'
}

const testNumber = 200_000;

console.log('Ukraine', new Intl.NumberFormat(navigator.language, options).format(testNumber));
console.log('US', new Intl.NumberFormat('en-US', options).format(testNumber));
console.log('Germany', new Intl.NumberFormat('de-DE', options).format(testNumber));

// Timers: setTimeout and setInterval
const ingredients = ['olives', 'cheese'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`It will be called after two seconds ${ing1} and ${ing2}`), 2000, ...ingredients);

if (ingredients.includes('cheese')) clearTimeout(pizzaTimer); // it just cancels timer and don't execute this line of code

// setInterval(() => {
//   const currentDate = new Date();
//   const currentHour = currentDate.getHours();
//   const currentMinutes = currentDate.getMinutes();
//   const currentSeconds = currentDate.getSeconds();
//   console.log(`${currentHour}:${currentMinutes}:${currentSeconds}`);
// }, 1000);