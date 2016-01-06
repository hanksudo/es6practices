"use strict";

var _marked = [anotherGenerator, generator, square].map(regeneratorRuntime.mark);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

function anotherGenerator(i) {
    return regeneratorRuntime.wrap(function anotherGenerator$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                _context.next = 2;
                return i + 1;

            case 2:
                _context.next = 4;
                return i + 2;

            case 4:
                _context.next = 6;
                return i + 3;

            case 6:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this);
}

function generator(i) {
    return regeneratorRuntime.wrap(function generator$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
            case 0:
                _context2.next = 2;
                return i;

            case 2:
                return _context2.delegateYield(anotherGenerator(i), "t0", 3);

            case 3:
                _context2.next = 5;
                return i + 10;

            case 5:
            case "end":
                return _context2.stop();
        }
    }, _marked[1], this);
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
    return regeneratorRuntime.wrap(function square$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
            case 0:
                index = 0;

            case 1:
                if (!true) {
                    _context3.next = 6;
                    break;
                }

                _context3.next = 4;
                return i = i * i;

            case 4:
                _context3.next = 1;
                break;

            case 6:
            case "end":
                return _context3.stop();
        }
    }, _marked[2], this);
}

var squareValues = square(2);
console.log(squareValues.next().value); // 4
console.log(squareValues.next().value); // 16
console.log(squareValues.next().value); // 256
console.log(squareValues.next().value); // 65536
console.log(squareValues.next().value); // 4294967296