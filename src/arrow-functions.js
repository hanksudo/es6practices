// emprt arrow function returns undefined
let empty = () => {};

// calculate square
let square = x => x * x;

// return object
let key_maker = val => ({key: val});

// What's JS future?
let future_javascript = () => {
    let ES6 = 'awesome';
    console.log(`The future of JavaScript is ${ES6}`);
};
future_javascript();

// uppser case
let new_func = (str) => str.toUpperCase();

// even and even squares
let values = [1, 2, 3, 4 ,5 ,6];
let even = values.filter(x => x % 2 === 0);
let even_squares = even.map(x => x * x);
console.log(even, even_squares);


// Lexical this
let hank = {
    _name: "Hank",
    _friends: ["Irving", "Rex", "Amo"],
    print_friends() {
        this._friends.forEach(f => console.log(this._name + " knows " + f));
    }
}

hank.print_friends();
