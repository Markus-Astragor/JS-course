'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },

//   orderDeliver: function ({ starterIndex, mainIndex, name = 'Marko restaurant' }) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex], name]
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     return `Here is your pasta ${ing1} ${ing2} ${ing3}`
//   }
// };

// const Markusss = restaurant.orderDeliver({
//   mainIndex: 2,
//   starterIndex: 1,
// })
// console.log(Markusss);

// const [start, main, Myname] = Markusss;

// console.log(start, main, Myname);
// // const array = [1, 2, 3];

// // const [a, b, c] = array;

// // console.log(a, b, c);

// // const [first, second] = restaurant.categories;
// // let [x, , z] = restaurant.categories
// // // console.log(first, second); // --> Italian Pizzeria
// // console.log(x, z); //--> displays first and third

// // // [x, z] = [z, x];


// // const temp = x
// // x = z
// // z = temp

// // console.log(x, z);


// // console.log(restaurant.order(3, 0));


// // const array2 = [2, 3, 4, [5, 6, 7, 8]];

// // const [i, , , [j, k, z, o, p = 1]] = array2;

// // console.log(i, j, k, z, o, p); //--> 2, 5, 6, 7, 8, 1 ---> 1 we didn't have in array but it is a default value 



// const { name, starterMenu: starterMenu = [], openingHours } = restaurant;
// // // console.log('name', name, 'starterMenu', starterMenu, 'openingHours', openingHours);

// // const { thu: thursday, fri: friday, sat: saturday, sun = [] } = openingHours;
// // console.log('thursday', thursday, 'friday', friday, 'saturday', saturday, 'sun', sun);
// // // console.log(thu);



// // let a = 999;
// // let b = 111;

// // const obj = { a: 11, b: 23 };
// // ({ a, b } = obj)

// // console.log(a, b);

// const { sat: { open, close } } = openingHours;
// console.log(open, close);

// // Spread operator

// const arr = [1, 3, 2];

// const array = [...arr, 10, 15, 20];
// console.log('array', array);
// const twoarray = [...arr, ...array];

// const ingridients = ['musrooms', 'parmesan', 'asparagus'];

// const result = restaurant.orderPasta(...ingridients);

// console.log('result', result);

// //Objects

// const restaurantCopy = { ...restaurant };

// restaurantCopy.name = 'Ristoranto Markoo';

// console.log(restaurantCopy, restaurant);

// const [Brocacia, , Gsrlic, ...otherFood] = [...starterMenu, ...restaurant.categories];

// console.log(Brocacia, Gsrlic, otherFood);

// const { sat, ...weekDays } = restaurant.openingHours;

// console.log(sat, weekDays);


// const addFunc = (...numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }

//   return sum
// }

// const result1 = addFunc(...[1, 2, 3, 4, 5]);

// const result2 = addFunc(1, 10, 17, 19);

// console.log('result1', result1, 'result2', result2);


// // short-circuitng

// restaurant.guests = false;

// const guests = restaurant.guests || restaurant.guests === 0 ? restaurant.guests : 10;

// console.log('guests', guests);


// // Nullish coascelling operator Nullish: null or undefined (0 or '') are allowed
// const guestsCorrect = restaurant.guests ?? 10;

// console.log('guestsCorrect', guestsCorrect);


// const rest1 = {
//   name: 'Markoo',
//   owner: 'Markusik'
// }

// rest1.numGuests ??= 20;

// rest1.owner &&= '<Anonymous>'

// console.log('rest1.numGuests', rest1.numGuests);

// console.log(rest1.owner);



// Coding Challenge

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// punct 1
const [players1, players2] = game['players'];

const [goalkeeper, ...fieldPlayers] = players1;

console.log(goalkeeper, fieldPlayers);


//punct 2
game.team1 = {};
game.team1.name = 'Bayern Munich'
game.team1.gk = goalkeeper;
game.team1.fieldPlayers = fieldPlayers;

//punct 3

const allPlayers = [...players1, ...players2];

console.log('allPlayers', allPlayers);
console.log('game.team1', game.team1);

// punct 4

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('players1Final', players1Final);

// punct 5

const { team1: team1, x: draw, team2: team2 } = game.odds;

console.log('team1, draw, team2', team1, draw, team2);


// punct 6
const printGoals = (score, ...playerNames) => {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i], score);
  }
}


printGoals(game.score, 'Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(game.score, ...game.scored);

// punct 7


const oddsArray = Object.values(game.odds);
console.log('oddsArray', oddsArray);
const likelyWin = Math.min(...oddsArray);

console.log('likelyWin', likelyWin);