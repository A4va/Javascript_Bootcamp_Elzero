/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop()
my.pop()  
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(-counter,counter)); // ["Elham", "Mazero"]

my.shift()
my.pop()
console.log(my[zero].slice(zero,-counter) + my[++zero].slice(--counter)); // "Elzero"

++counter
console.log(my[zero].slice(++counter , ++counter) + my[zero].slice(counter).toUpperCase()); // "rO"
