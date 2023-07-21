// Remember, we're gonna use strict mode in all scripts now!
'use strict';




const x = '23';

if (x === 23) { }


// Our most recent task is this:
// 'Given an array of temparatures of one day, calculate the temparature amplitude. Keep in mind there might be a sensor error'



const getMaximum = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const getMinimum = (array) => {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min
}


const checkError = (array) => {
  const arrayWithoutError = array.filter(function (number) {
    return number !== 'error';
  })

  const maxElement = getMaximum(arrayWithoutError);
  const minElement = getMinimum(arrayWithoutError);

  return maxElement - minElement
}


const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const result = checkError(temparatures);

console.log('result', result);