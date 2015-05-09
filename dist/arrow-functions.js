// emprt arrow function returns undefined
"use strict";

var empty = function empty() {};

// calculate square
var square = function square(x) {
    return x * x;
};

// return object
var key_maker = function key_maker(val) {
    return { key: val };
};

// What's JS future?
var future_javascript = function future_javascript() {
    var ES6 = "awesome";
    console.log("The future of JavaScript is " + ES6);
};
future_javascript();

// uppser case
var new_func = function new_func(str) {
    return str.toUpperCase();
};

// even and even squares
var values = [1, 2, 3, 4, 5, 6];
var even = values.filter(function (x) {
    return x % 2 === 0;
});
var even_squares = even.map(function (x) {
    return x * x;
});
console.log(even, even_squares);

// Lexical this
var hank = {
    _name: "Hank",
    _friends: ["Irving", "Rex", "Amo"],
    print_friends: function print_friends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

hank.print_friends();