## Simple Array Methods

Method slice is similar to the method which is available in strings here is an example:

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(0, 3)); // ---> ['a', 'b', 'c']

it returns new array which returns from zero index to 3 not included!

When we give only one argument it is the starter postion where this method is going to work
console.log(arr.slice(2)) ---> 2 is the starter index ---> ['c' ,'d', 'e']

if we take minus parameter into array we get the last elements of the array arr.slice(-2) --> ['d', 'e']

---

Method splice changes original array slice doesn't change but splice really changes
The difference is also that it deletes including numbers if you include indexes here is an example:

---

Es 2022 feature
at method in array
arr.at(0) - we receive first element of array
arr.at(-1) - we receive last element of array
arr.at(-2) - we receive pre last

This method also works on strings

## Looping Arrays: forEach

Math.abs method transfers value to absolute so if we give value -100 it returns 100

You can use either the for of loop or forEach but the problem is that you can't use countinue and break in forEach loop
but you can in for of loop

## Dom manipulation

insertAdjacentHTML passes two arguments('afterbegin', templateOfHTML)

 <!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->

## Data Transformations: map, filter, reduce

Map returns a new changed array containig the results of the previous one

arr.map((el) => el \* 2)

Filter method returns only elements which satisfy condition here is an example:

arr.filter((el) => el > 3)

Reduce method boils all array elements to one single value

## Find method

it returns a first element in array which satisfies conditions
here is an example:

## FindINdex method

so it is useful when we want to get the index of method which is in object for example:
const index = accounts.findIndex(account => account === userObject);

it gives us the index where this statement is true

## Some and evey methods

The difference between includes and some is that includes checks for equality but some checks for condition here is example:

const arr = [1, 2, -100, 5000];

arr.includes(2) // true

// some method
arr.some((number) => number > 0) // true

Every method returns true if all elements in array satisfy the condition
arr.every((el) => el >= 1) // false

## More ways of creating arrays programmatically

If you want to create array you can do like this:

const arr = new Array(1,2,3,4,5);
console.log(" arr  ", arr); // [1,2,3,4,5];

But if we create array like this:
const testArr = new Array(7)
console.log(testArr) // [ ] empty array length 7

This weird behaviour of construction array.

Fill method
One of a few array methods that you can apply to such kind of arrays is that you can use fill method.

Here is an example:

const testArr = new Array(5);
testArr.fill(2, 3, 5);
// first argument is which number do you want to fill an array 3 -> is the starter index including and 5 is end index included

console.log(testArr.fill(2, 1, 5))

const y = Array.from({ length: 7 }, () => 7); // creates an array which is filled with 7

console.log(y)

const z = Array.from({length : 7}, (\_, index) => index + 1)
// returns us on each iteration value + 1 in order not to start from zero

## Which array method to choose?

1. To mutate original array:

- Add to original array:
  .push() ---> end
  .unshift() ---> start

- Remove from original:
  .pop() ---> end
  .shift() ---> start
  .splice()

- Others:
  .reverse() ---> change sequence
  .sort() ----> sorting strings or if numbers pass callBack
  .fill() ---> fills an array

2. A new array

- Computed from original
- loop creates new array with all changed elements
  .map()
- creates new array with satisying condition
  .filter()
- creates new array with changes
  .slice()
- Adding original to other:
  .concat();
- Flattering the original:
  .falt()
  .flatMap()

3. An array index

- Based on value
  .indexOf()

- Based on test conditions:
  .findIndex()

4. An array element

- Based on test condition:
  .find()

5. Know if array includes

- Based on value:
  .includes()

- Based on test condition:
  .some()
  .every()

6. A new string
   .join()

7. To transform to value

- Based on accumulator:
  .reduce()

8. Just loop an array
   .forEach() ---> callBack
