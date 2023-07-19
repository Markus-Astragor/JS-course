## Console.log() method

if you want to write in script tag sth like this 48+30 --> nothing
why? 
because you didn't tell where js should display this result
if you write console.log(48+30) -> 78

## Naming variables

They should be easy to understand, describable

They shouldn't contain numbers signs, keywords('function, new, var, let and so on...') and so on. They only can containd dollar sign, underscore and letters.
In js you should use camelCase because it is approved in js world. If we talk about ruby here is used snake_case 

! Don't use just name in creating variables. It allows you but it can create some problems always be aware of it

## Datatypes

There are 7 primitive dataTypes: string, boolean, number, undefined, null, symbol(unique value that cannot be changed) and bigInt

## Operator precedence

Property accessors

const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// Expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// Expected output: "Doe"



const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

here you can see the link  to website where the table info about it https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

## Type Conversion and Coercion

So, in order to convert string to number we use Number method 
here is an example --> const string = '10' Number(string)

We can do the opposite thing - to convert number to string Here is an example

const number = 10 ---> String(number)

if we have sth like that console.log('23' - '10' - 3) //expected output is 10
Js does it like console.log(Number('23') - Number('10') - 3)

The same situation is with division and multiplying. if we have sth like that console.log('23' * '10') //expected output is 230
                                                     if we have sth like that console.log('23' / '10') //expected output is 2,3

!!! But it doesn't work with plus operator console.log('23' + '10' + 3) // expected output is '23103'

## Falsy values 

So these values are: 0, '', undefined, NaN, null and 'false' ---> convert to false

## History of js 
Brendan Eich created js the very first version of it in just 10 days. Firstly it had Mocha but js inharitated lots of features of Mocha.
Then in 1996 Mocha changed its name to javaScript in order to attract java developers. However, it doesn`t have anything in common with java.

## Functions 

if you have for examole a function which receive 3 parameters but you send only 2 parameters you need to use trinary operator in order to check if each parameter is empty or not and only in this case everyhing will be ok with this function, because if you want to try use function without one of parameter and without checkin you will ge undefined wchic is really unpleasant thing in your programm. That's why i think you can do in such way:

 function washDishes(dishes, spoons, forks) {
   const resultWashing = `We washed ${dishes ? dishes + ' dishes' : ''} ${spoons ? spoons + ' spoons' : ''} ${forks ? forks + ' forks': ''}`; // evrything is ok
   const resultWashing = `We washed ${dishes} dishes ${spoons} spoons ${forks} forks`; //ordinary using function
  return resultWashing;
 }


const result = washDishes(1, 3)

console.log(result);