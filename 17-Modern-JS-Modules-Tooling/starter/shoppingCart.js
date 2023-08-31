// exporting module
console.log('exporting module');

const shippingCost = 10;
export const cart = [];

// exporting function in order to use it later
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} was added to cart`);
}

const totalQuantity = 37;
const totalPrice = 237;

// we can name these variabled in another way

export { totalPrice, totalQuantity as tq }

// we can also use default exports

export default addToCart