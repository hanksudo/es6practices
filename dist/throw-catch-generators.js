function* dummy() {
    try {
        null.foo(); // causes exception
    } catch (e) {
        console.log("Caught exception: %s", e);
    }
    yield "Got here without crashing.";
}

console.log(dummy().next());

function* foo() {
    yield "inside foo";
}

let it = foo();
try {
    it.throw("BOOO from outside.");
} catch (err) {
    console.log("Error: %s", err);
}