"use strict";

var marked0$0 = [dummy, foo].map(regeneratorRuntime.mark);
function dummy() {
    return regeneratorRuntime.wrap(function dummy$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                try {
                    null.foo(); // causes exception
                } catch (e) {
                    console.log("Caught exception: %s", e);
                }
                context$1$0.next = 3;
                return "Got here without crashing.";

            case 3:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

console.log(dummy().next());

function foo() {
    return regeneratorRuntime.wrap(function foo$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return "inside foo";

            case 2:
            case "end":
                return context$1$0.stop();
        }
    }, marked0$0[1], this);
}

var it = foo();
try {
    it["throw"]("BOOO from outside.");
} catch (err) {
    console.log("Error: %s", err);
}