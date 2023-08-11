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
