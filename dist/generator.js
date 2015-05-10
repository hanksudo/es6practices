"use strict";

var marked0$0 = [anotherGenerator, generator, square].map(regeneratorRuntime.mark);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

function anotherGenerator(i) {
    return regeneratorRuntime.wrap(function anotherGenerator$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return i + 1;

            case 2:
                context$1$0.next = 4;
                return i + 2;

            case 4:
                context$1$0.next = 6;
                return i + 3;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

function generator(i) {
    return regeneratorRuntime.wrap(function generator$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return i;

            case 2:
                return context$1$0.delegateYield(anotherGenerator(i), "t1", 3);

            case 3:
                context$1$0.next = 5;
                return i + 10;

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[1], this);
}

var gen = another_generator(1);

console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4

gen = generator(1);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 11

function square(i) {
    var index;
    return regeneratorRuntime.wrap(function square$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                index = 0;

            case 1:
                if (!true) {
                    context$1$0.next = 6;
                    break;
                }

                context$1$0.next = 4;
                return i = i * i;

            case 4:
                context$1$0.next = 1;
                break;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[2], this);
}

var squareValues = square(2);
console.log(squareValues.next().value); // 4
console.log(squareValues.next().value); // 16
console.log(squareValues.next().value); // 256
console.log(squareValues.next().value); // 65536
console.log(squareValues.next().value); // 4294967296