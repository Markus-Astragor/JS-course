## Functions 

There are two types of functions. Function declaration and function expression what is the difference between them? If you have function declaration you can call it before it is declared it is the practical difference. Function expression that's a thing where you don't give it a name directly but you store this function in a variable.

Here you can see some examples:

// Function declaration

const dishesResult = dishesCount(10, 2); // You can call it before initializing it is the difference


function dishesCount(dishes, coountPeople){
  return dishes * coountPeople
}


// Function expression
Here we just give an anonymous function but store it into a variable

const dishesCount2 = function(dishes, countPeople){
  return dishes * countPeople;
}

dishesCount2(20, 2);


if you have for examole a function which receive 3 parameters but you send only 2 parameters you need to use trinary operator in order to check if each parameter is empty or not and only in this case everyhing will be ok with this function, because if you want to try use function without one of parameter and without checkin you will ge undefined wchic is really unpleasant thing in your programm. That's why i think you can do in such way:

 function washDishes(dishes, spoons, forks) {
   const resultWashing = `We washed ${dishes ? dishes + ' dishes' : ''} ${spoons ? spoons + ' spoons' : ''} ${forks ? forks + ' forks': ''}`; // evrything is ok
   const resultWashing = `We washed ${dishes} dishes ${spoons} spoons ${forks} forks`; //ordinary using function
  return resultWashing;
 }


const result = washDishes(1, 3)

console.log(result);

## Arrays

We can initialize arrays different methods such as: 
const friends = ['Nazlo', 'Maksym', 'Peter', 'Yura'];
console.log(friends);


const years = new Array(1990, 1991, 1992, 1993, 1994, 1995);
console.log(years);

Moreover, we can change the numbers in array because array - is not a primitive value. If we talk about variables they are the primitive values that's why we can't change them if we talk about constants for example const pi = 3,1415; primitive values are immnutable.

but we can change the one of array

years[2] = 1993;

!But we can't change the whole array;

years = [1, 2, 3, 4, 5]; ---> type error assignment to constant variable

### Methods for arrays

const friends = ['Michael', 'Steven', 'Peter', 'Jay'];
const newLength = friends.push('Nazlo');

console.log(newLength);

in order to add an element on the first place in array you should use the method unshift;

friends.unshift('Ostap');

in order to see the deleted element from array you can type like this const popped = friends.pop(); --> Nazlo // it is the last element

Method shift deletes the first element of an array it is the opposite to the method unshift 
// if you want to see the first deleted element just type const shifted = friends.shift();

indeOf(element) --> returns the index of element which you want to find

method includes is more modern and returns if element is in array or not. ---> friends.includes('Peter);

## Objects

There is a dot and bracket notation in objects

For example:
const student = {
  Name: 'Marko',
  lastName: 'Dragociy',
  age: 18
}

student.name // dot notation
student['name'] // bracket notation

what is the difference?
in bracket notation we can put any expression we want

f.e -> const nameKey = 'Name'; 
       student[nameKey + '']; --> 'Marko'

## The loops

if you want to fill the empty array using loop you can do that using such algorhitm 

for(let i = 0; i < arr.length; i++){
  // first method
  types.push(typeof jonas[i]);
  types[i] = typeof jonas[i];
}

continue method is used to skip one iteration in loop
break method actually stops the process

We need while loop if we want to just state the condition while it will be true. For example

we don't know the exact number of iterations when we reach its condtion so when it will be 6. So we can use it in array when we want to find the specific value and so on 

let array = [1, 2, 3, 4, 5]
let iterator = 0
while(array[iterator] !== 4){
  console.log(array[iterator]);
  iterator++
}

but on the other side we can use a for loop instead with break