'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDeliver: function ({ starterIndex, mainIndex, name = 'Marko restaurant' }) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex], name]
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Here is your pasta ${ing1} ${ing2} ${ing3}`
  }
};

const Markusss = restaurant.orderDeliver({
  mainIndex: 2,
  starterIndex: 1,
})
console.log(Markusss);

const [start, main, Myname] = Markusss;

console.log(start, main, Myname);
// const array = [1, 2, 3];

// const [a, b, c] = array;

// console.log(a, b, c);

// const [first, second] = restaurant.categories;
// let [x, , z] = restaurant.categories
// // console.log(first, second); // --> Italian Pizzeria
// console.log(x, z); //--> displays first and third

// // [x, z] = [z, x];


// const temp = x
// x = z
// z = temp

// console.log(x, z);


// console.log(restaurant.order(3, 0));


// const array2 = [2, 3, 4, [5, 6, 7, 8]];

// const [i, , , [j, k, z, o, p = 1]] = array2;

// console.log(i, j, k, z, o, p); //--> 2, 5, 6, 7, 8, 1 ---> 1 we didn't have in array but it is a default value 



const { name, starterMenu: starterMenu = [], openingHours } = restaurant;
// // console.log('name', name, 'starterMenu', starterMenu, 'openingHours', openingHours);

// const { thu: thursday, fri: friday, sat: saturday, sun = [] } = openingHours;
// console.log('thursday', thursday, 'friday', friday, 'saturday', saturday, 'sun', sun);
// // console.log(thu);



// let a = 999;
// let b = 111;

// const obj = { a: 11, b: 23 };
// ({ a, b } = obj)

// console.log(a, b);

const { sat: { open, close } } = openingHours;
console.log(open, close);

// Spread operator

const arr = [1, 3, 2];

const array = [...arr, 10, 15, 20];
console.log('array', array);
const twoarray = [...arr, ...array];

const ingridients = ['musrooms', 'parmesan', 'asparagus'];

const result = restaurant.orderPasta(...ingridients);

console.log('result', result);

//Objects

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristoranto Markoo';

console.log(restaurantCopy, restaurant);

const [Brocacia, , Gsrlic, ...otherFood] = [...starterMenu, ...restaurant.categories];

console.log(Brocacia, Gsrlic, otherFood);

const { sat, ...weekDays } = restaurant.openingHours;

console.log(sat, weekDays);


const addFunc = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum
}

const result1 = addFunc(...[1, 2, 3, 4, 5]);

const result2 = addFunc(1, 10, 17, 19);

console.log('result1', result1, 'result2', result2);