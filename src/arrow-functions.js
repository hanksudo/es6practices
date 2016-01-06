// emprt arrow function returns undefined
let empty = () => {};

// calculate square
let square = x => x * x;

// return object
let keyMaker = val => ({key: val});

// What's JS future?
let futureJavascript = () => {
    let ES2015 = "awesome";
    console.log(`The future of JavaScript is ${ES2015}`);
};
futureJavascript();

// uppser case
let newFunc = (str) => str.toUpperCase();

// even and even squares
let values = [1, 2, 3, 4, 5, 6];
let even = values.filter(x => x % 2 === 0);
let evenSquares = even.map(x => x * x);
console.log(even, evenSquares);


// Lexical this
let hank = {
    _name: "Hank",
    _friends: ["Irving", "Rex", "Amo"],
    printFriends() {
        this._friends.forEach(f => console.log(this._name + " knows " + f));
    }
};

hank.printFriends();
