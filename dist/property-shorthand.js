"use strict";

var markActive = function markActive(first, last) {
    return { first: first, last: last, isActive: true };
};
console.log(markActive("Hank", "Wang"));