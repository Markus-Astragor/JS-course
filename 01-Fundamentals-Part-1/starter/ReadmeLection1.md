## Console.log() method

if you want to write in script tag sth like this 48+30 --> nothing
why? 
because you didn't tell where js should display this result
if you write console.log(48+30) -> 78

## Naming variables

They should be easy to understand, decricable

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