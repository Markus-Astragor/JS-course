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
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
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

// Display movements
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const sortMovs = sort ? movements.slice().sort((curValue, nextValue) => curValue - nextValue) : movements
  sortMovs.forEach((mov, index) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
                      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
                       <div class="movements__value">${mov.toFixed(2) + '€'}</div>
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




const calcDisplaySum = (infoUser) => {
  labelSumIn.textContent = infoUser.movements.filter(mov => mov > 0).reduce((acc, curValue) => { return acc + curValue }, 0).toFixed(2) + '€';
  labelSumOut.textContent = Math.abs(infoUser.movements.filter(mov => mov < 0).reduce((acc, curValue) => { return acc + curValue }, 0)).toFixed(2) + '€' || '0'
  labelSumInterest.textContent = infoUser.movements.filter(mov => mov > 0).map(deposit => (deposit * infoUser.interestRate / 100)).reduce((acc, curValue) => acc + curValue).toFixed(2) + '€';
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

let currentUser;

const contentUser = (infoUser) => {
  currentUser = infoUser;
  containerApp.style.opacity = '1';
  displayMovements(infoUser.movements);
  calcDisplaySum(infoUser);
  labelBalance.textContent = calcPrintBalance(infoUser.movements) + '€';
  inputLoginUsername.value = inputLoginPin.value = '';
  labelWelcome.textContent = 'Welcome, ' + infoUser.owner;
}

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const validationResult = validateUser(inputLoginUsername.value, inputLoginPin.value);
  if (validationResult) {
    contentUser(validationResult);
  }
})

// transfer money logic

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
    user.movements.push(sum);
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
    currentUser.movements.push(amount);
    contentUser(currentUser);
  }
}

btnLoan.addEventListener('click', (event) => {
  event.preventDefault();

  requestLoan(Number(inputLoanAmount.value))
})

let stateSort = true
btnSort.addEventListener('click', (event) => {
  event.preventDefault();
  displayMovements(currentUser.movements, stateSort);
  stateSort = !stateSort
})

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

console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
console.log(Math.trunc(23.3333)); // removes decimal part

// Math.ceil

console.log(Math.ceil(23.9));

//Math.floor()

console.log(Math.floor(24.5)); // 24

//toFixed()

console.log(+(20.345).toFixed(2));