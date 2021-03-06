// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const closure = () => {
  var a = 4;
  console.log(a);
  aplus = () => {
    return a += 1;
  }
  console.log(aplus());
}

closure();
// console.log(a);
// The above statement would return "a is not defined", because you're console.log'ing it outside of its scope.
// The variable a is definied inside of the function scope, because of that it is a variable that is local to its function.


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  return function() {
    return count ++;
  }
  // Return a function that when invoked increments and returns a counter variable.
};

newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// IIFE Solution

// const counterFactory = ( () => {
//   let count = 0
//   return {
//   'increment': () => {
//     count += 1; 
//     return count;
//    },
//   'decrement': () => {
//     count--; 
//     return count;
//    }   
//   }
// }) ()

// console.log(counterFactory.decrement());

// Solution 2

const counterFactory = () => {
  let count = 0;
  return {
  'increment': () => {
    count += 1; 
    return count;
   },
  'decrement': () => {
    count--; 
    return count;
   }   
  }
}

console.log(counterFactory().increment());


