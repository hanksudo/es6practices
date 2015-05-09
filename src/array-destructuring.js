// array destructuring
var [first_name, last_name] = ["Hank", "Wang"];
console.log(first_name, last_name);

// swap
let a = 1, b = 2;
[b, a] = [a, b];
console.log({a, b});

// skip item
let [,,third] = [1, 2, 3];
console.log({third});

// get remaining items
let [first, ...remaining] = [1, 2, 3, 4, 5];
console.log({first});
console.log({remaining});
