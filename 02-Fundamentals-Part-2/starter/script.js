'use strict'
// ------------------------------------------------------functions--------------------------------------------------------------

function washDishes(dishes, spoons, forks) {
  const resultWashing = `We washed ${dishes ? dishes + ' dishes' : ''} ${spoons ? spoons + ' spoons' : ''} ${forks ? forks + ' forks' : ''}`; // evrything is ok
  // const resultWashing = `We washed ${dishes} dishes ${spoons} spoons ${forks} forks`; //ordinary using function
  return resultWashing;
}


const result = washDishes(1, 3)



// Function declaration

const dishesResult2 = dishesCount(10, 2);


function dishesCount(dishes, coountPeople) {
  return dishes * coountPeople
}

console.log('dishesResult2', dishesResult2);

// Function expression
const dishesCount2 = function (dishes, countPeople) {
  return dishes * countPeople;
}

const dishesResult = dishesCount2(20, 2);

console.log('dishesResult', dishesResult);


//Arrow function

const yearsUntilRetirement = (birthYear, yearsofStartRetirement) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentAge = currentYear - birthYear;
  return yearsofStartRetirement - currentAge;
}


const yearsNeeded = yearsUntilRetirement(2004, 65);

console.log('yearsNeeded', yearsNeeded);

// Recuursion
let actualResult = 1;

const factorialCount = (number) => {
  if (number === 1) {
    console.log('actualResult', actualResult);
    return actualResult
  }
  else {
    actualResult = actualResult * number;
  }

  factorialCount(number - 1);
}


const factorialResult = factorialCount(5);

// Function that calls another function

const fruitPiecesProcessor = (fruits) => {
  return fruits * 4
}


const fruitProcessor = (apples, oranges, tomatoes) => {
  const applesPieces = fruitPiecesProcessor(apples);
  const orangesPieces = fruitPiecesProcessor(oranges);
  const tomatoesPieces = fruitPiecesProcessor(tomatoes);
  
  return `applesPieces ${applesPieces}, orangesPieces ${orangesPieces}, tomatoesPieces ${tomatoesPieces} `;
}


const fruitProcessorResult = fruitProcessor(10, 20, 30);

console.log('fruitProcessorResult', fruitProcessorResult);

//Arrays


const years = new Array(1990, 1991, 1992, 1993, 1994, 1995);
console.log(years);
years[2] = 1993;

console.log(years);


const friends = ['Michael', 'Steven', 'Peter', 'Jay'];
const newLength = friends.push('Nazlo');

console.log('newLength' , newLength);

const test = friends.unshift('Ostap');
console.log(friends, 'test', test);


// in order to receive the recent element of array which is removed

const popped = friends.pop()
console.log('popped', popped);
const shifted = friends.shift();
console.log('shifted', shifted);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Peter'));

// Object

//Dot notation
const student = {
  name: 'Marko',
  lastName: 'Dragociy',
  age: 18,
  mybirthYear: 2004, 
  calcAge: function(birthYear){
    const currentDate = new Date;
    const currentYear = currentDate.getFullYear();
    return currentYear - this.mybirthYear;
  }
}

console.log(student.age);

//Bracket notation you can put expressions

// const interestedIn = prompt('What do you want to know about me?');

// console.log('interestedIn', student[interestedIn]);

//Challenge in video

console.log(`${student['name']} has ${friends.length} friends and his best friend called ${friends[0]}`);

//methods

const studentResult = student.calcAge(2004);
console.log('studentResult', studentResult);

//If we want to call a function in an object

const bracketStudentResult = student['calcAge'](2004);

console.log('bracketStudentResult', bracketStudentResult);