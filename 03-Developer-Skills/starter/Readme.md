## Solving problems

if you want to become a great developer you need to think as a developer so that's why you need to learn how to deal with problems.

To fix that here is an algorhitm:

1. Stay calm and slow down, don't just jump at a problem without a plan.
2. Take a very logical and rational approach (programming is just about a logic, in the end)

### Four-step framework

---

1. Make sure you 100% undestand the problem. Ask the right questions to get a clear picture of the problem.
   Ask questions if you don't understand sth in order to know exactly what you need to implement.
2. Divide and conquer. Break problem into smaller sub-problems.
   For instance your project manager came to you and say: "We need a function which reverses whatever we pass into it"
   Sub-problems:

---

1. Check if argument is a string, array or a number
2. Implement reversing a number
3. Implement reversing a string
4. Implement reversing an array
5. Return the values

---

3. Do as much research as you have to
   If you can't solve some of sub problem you can be free to google and do some research in order to find some solution. Of course, we should try to implement our own solution but if we can't we can try to google.

---

### Using Google, stackOverFloe and MDN

Examples of 3 part of 4-framework
Here will be the examples of questions in google stack overflow and so on...

---

4. For bigger code problems, write pseudo-code before writing actual code.

---

## Example how to solve a real problem using four-step framework

// We work for a company building a smart home thermometer.
Our most recent task is this:
'Given an array of temparatures of one day, calculate the temparature amplitude. Keep in mind there might be a sensor error'

const temparatures = [3, -2, -6, -1 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
We just googled what the ampltitude is. And we know that it is the difference betweeen the highest temparature and the lowest. So we understood the task.

// 2. Divide into smaller tasks

0. If you find in array 'error' ignore.
1. Find max element among the numbers in array
2. Find minimal element among the numbers in array
3. Save these numbers into variables
4. maxValue - minValue --> here is the result of amplitude

//3 google the problem
first example of google search : 'javascript concat two arrays', 'javascript get max value in array'

## Debugging

1. Identify bug ---> console.table() sometimes can help because it is really convenient to look at types of some values
