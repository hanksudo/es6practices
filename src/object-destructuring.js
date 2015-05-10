// object destructuring
var person = {
    first: "Hank",
    last: "Wang"
};

let {first, last} = person;
console.log(first, last);


// assign use different name
let {first: fn, last: ln} = person;
console.log(fn, ln);


// extract two values
let getResult = () => ({
    result: 1234,
    error: null
});

let {result, error} = getResult();
console.log(result, error);


// use destructuring to pass variable
let doHTTP = ({host, port, path}) => {
    console.log(host, port, path);
};

doHTTP({
    host: "localhost",
    port: 80,
    path: "/"
});


// destructure deeply
let me = {
    firstName: "Hank",
    lastName: "Wang",
    school: {
        senior: "JFVS",
        college: "KUAS"
    }
};

let {firstName: f, lastName, school: { senior: j } } = me;
console.log(f, lastName, "went to", j);
