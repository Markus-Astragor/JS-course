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
  }
};


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


const array2 = [2, 3, 4, [5, 6, 7, 8]];

const [i, , , [j, k, z, o, p = 1]] = array2;

console.log(i, j, k, z, o, p); //--> 2, 5, 6, 7, 8, 1 ---> 1 we didn't have in array but it is a default value 

