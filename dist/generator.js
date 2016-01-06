// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

let gen = another_generator(1);

console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4

gen = generator(1);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // 11

function* square(i) {
    let index = 0;
    while (true) {
        yield i = i * i;
    }
}

let squareValues = square(2);
console.log(squareValues.next().value); // 4
console.log(squareValues.next().value); // 16
console.log(squareValues.next().value); // 256
console.log(squareValues.next().value); // 65536
console.log(squareValues.next().value); // 4294967296