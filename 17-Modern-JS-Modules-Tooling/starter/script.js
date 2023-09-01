// importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log('importing modules');

// addToCart('bread', 10);

// console.log('totalPrice', price);
// console.log('totalQuantity', tq);

// if we want to use other name of imported varibale we can do this

// other use cases

import cloneDeep from 'lodash-es';


import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('butter', 2);

import add from './shoppingCart.js';

add('bread', 4);

console.log(ShoppingCart.cart);


// import { cart } from "./shoppingCart.js";

// if we import exported values it is not a copy


// Top-Level await (ES2022)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const resData = await res.json();
// console.log('resData', resData);


// const getLastPost = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const resData = await res.json();
//   return { title: resData.at(-1), text: resData.at(-1).body }
// }

// const lastPost = await getLastPost();

// The Module Pattern

// The Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;



  const orderStock = (product, quantity) => {
    console.log(`${product} ${quantity} ordered from supplier`);
  }

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${product} ${quantity} was added to cart`);
    orderStock(product, quantity);
  }

  return {
    cart,
    shippingCost,
    totalPrice,
    totalQuantity,
    addToCart,
  }
})()

ShoppingCart2.addToCart('apples', 2); // we also have the access to functions or variables which we did't return but we can't use them not in this shopping cart scope  

// CommonJS Modules

// node js is env where we actually run the server outside of the browser

if (module.hot) {
  module.hot.accept();
}

// Configuring Babel and Polyfilling

console.log(ShoppingCart.cart.filter(el => el.quantity >= 2));

// polyfiing es6 methods on arrays f.e
import 'core-js/stable';


// polyfiing async functions
import 'regenerator-runtime/runtime.js'