// array destructuring
"use strict";

var firstName = "Hank";
var lastName = "Wang";

console.log(firstName, lastName);

// swap
var a = 1,
    b = 2;
var _ref = [a, b];
b = _ref[0];
a = _ref[1];

console.log({ a: a, b: b });

// skip item
var _ref2 = [1, 2, 3];
var third = _ref2[2];

console.log({ third: third });

// get remaining items
var first = 1;
var remaining = [2, 3, 4, 5];

console.log({ first: first });
console.log({ remaining: remaining });