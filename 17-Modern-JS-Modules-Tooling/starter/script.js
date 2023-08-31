// importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log('importing modules');

// addToCart('bread', 10);

// console.log('totalPrice', price);
// console.log('totalQuantity', tq);

// if we want to use other name of imported varibale we can do this

// other use cases

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('butter', 2);

import add from './shoppingCart.js';

add('bread', 4);

console.log(ShoppingCart.cart);


// import { cart } from "./shoppingCart.js";

// if we import exported values it is not a copy
