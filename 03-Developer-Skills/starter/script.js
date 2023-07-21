// Remember, we're gonna use strict mode in all scripts now!
'use strict';




// Our most recent task is this:
// 'Given an array of temparatures of one day, calculate the temparature amplitude. Keep in mind there might be a sensor error'



// const getMaximum = (array) => {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// const getMinimum = (array) => {
//   let min = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min
// }


// const checkError = (array) => {
//   const arrayWithoutError = array.filter(function (number) {
//     return number !== 'error';
//   })

//   const maxElement = getMaximum(arrayWithoutError);
//   const minElement = getMinimum(arrayWithoutError);

//   return maxElement - minElement
// }


// const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const result = checkError(temparatures);

// console.log('result', result);



//Test Data 1: [17, 21, 23] Test Data 2: [12, 5, -5, 0, 4]

// Problem solving framework: 1. I need to put each number of temparature in sentence and with the each number of day like this: '17C degrees in 1 days, 21C in 2 days, 23 in  3 days'


// 2. 1. Create a function printTemparatureString pass the argument array 2. Implement the loop for printing in console the string 3. Return and log 


const printTemparatureString = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`... ${array[i]}C in ${i + 1 === 1 ? i + 1 + ' day' : i + 1 + ' days'}`);
  }
}

const temparatureData = [17, 21, 23];

printTemparatureString(temparatureData);
