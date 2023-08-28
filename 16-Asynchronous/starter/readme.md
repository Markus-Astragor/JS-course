## Async js Ajax 

Synchrounous js

- It is when each line of code is executing line by line
- next line is executing only after the previous line is ready
- if long event happens it impacts badly on performance on webpage
- long-running operations actually blocks code execution 👎 

Async js
- it is non-blocking, so it does'nt block any evsnt which happens after
- code executes further, execution doesn't wait for async code to finish it executes further
- callback functions alone are not async 

Here is an example:

const p = document.querySelector('p'); // 1 
setTimeout(() => {
console.log("My name is Marik");
}, 5000) // await 5 seconds 3
p.style.color = "red" // 2 

If we had more lines of code we would still execute them until 5 seconds left

Ajax

Asynchrounous javascript and xml. It allows us to connect to web servers in an async way and request for data. In order to do it dynamically

Api it is a piece of software that can be used by another piece of software in order to communicate with each other. 

Online api that is a web server which gives data as response when we make a request to it.

## OPTIONAL How the Web Works: Requests and Responses

tcp - transmition control protocol, it defines how data travels accross the browser
http - hypertext transfer protocol. It allows clients and servers to communicate

<img src="./img/web_behind_scenes.png">

Fetch 

When we fetch api we immediately return promises
Promises can be two types. They have two states: pending and settled. 

Pending is when task is not finished yet and settled it is the finshed task with positive or negative result. 

In most cases we don't build options for promises but sometimes you can need it 

## Consuming promises 

When returns postive fulfilled response we use then method in order to make further steps. 

fetch('some url').then((response) => {
console.log("It is successful promise", response) // but we can't read property body. In order to read it we should use json method, which returns a new promis which we also should handle 

return response.json();
}).then((data) => {
console.log("Needed data", data);
}).catch((error) => {
console.log("it is promise with error", error)
}) 

## Chaining promises 

If you have to handle one error you can do like this 

fetch("some url").then(response => response.json(), err => console.log(err)).then(data => console.log(data))

But if you need to handle all errors just catch at the end of request 

fetch("some url").then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err)) 

Any error has property message
You can type like this: 

console.log(err.message) 

Moreover, there is one more interesting method: 

fetch("some url")
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => {
console.log("This executes no matter if request is fullfilled or not. Good example of using is to stop loader")
})


## Throw errors manually 

const apiCall = (countryName) => {
fetch(some url/${countryName})
.then(response => {
if(!response.ok) return throw new Error("Country was not found"); 

return response.json();
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => {
console.log("This executes no matter if request is fullfilled or not. Good example of using is to stop loader")
})


} 

apiCall("notExist")