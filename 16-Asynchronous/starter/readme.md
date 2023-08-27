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