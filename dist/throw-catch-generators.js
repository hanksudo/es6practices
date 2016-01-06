"use strict";

var _marked = [dummy, foo].map(regeneratorRuntime.mark);

function dummy() {
    return regeneratorRuntime.wrap(function dummy$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                try {
                    null.foo(); // causes exception
                } catch (e) {
                    console.log("Caught exception: %s", e);
                }
                _context.next = 3;
                return "Got here without crashing.";

            case 3:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this);
}

console.log(dummy().next());

function foo() {
    return regeneratorRuntime.wrap(function foo$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
            case 0:
                _context2.next = 2;
                return "inside foo";

            case 2:
            case "end":
                return _context2.stop();
        }
    }, _marked[1], this);
}

var it = foo();
try {
    it.throw("BOOO from outside.");
} catch (err) {
    console.log("Error: %s", err);
}