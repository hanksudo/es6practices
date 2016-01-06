"use strict";

// emprt arrow function returns undefined
var empty = function empty() {};

// calculate square
var square = function square(x) {
    return x * x;
};

// return object
var keyMaker = function keyMaker(val) {
    return { key: val };
};

// What's JS future?
var futureJavascript = function futureJavascript() {
    var ES6 = "awesome";
    console.log("The future of JavaScript is " + ES6);
};
futureJavascript();

// uppser case
var newFunc = function newFunc(str) {
    return str.toUpperCase();
};

// even and even squares
var values = [1, 2, 3, 4, 5, 6];
var even = values.filter(function (x) {
    return x % 2 === 0;
});
var evenSquares = even.map(function (x) {
    return x * x;
});
console.log(even, evenSquares);

// Lexical this
var hank = {
    _name: "Hank",
    _friends: ["Irving", "Rex", "Amo"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

hank.printFriends();