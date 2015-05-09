// object destructuring
var person = {
    first: 'Hank',
    last: 'Wang'
};

let {first, last} = person;
console.log(first, last);


// assign use different name
let {first: fn, last: ln} = person;
console.log(fn, ln);


// extract two values
let get_result = () => ({
    result: 1234,
    error: null
});

let {result, error} = get_result();
console.log(result, error);


// use destructuring to pass variable
let do_http = ({host, port, path}) => {
    console.log(host, port, path);
}

do_http({
    host: 'localhost',
    port: 80,
    path: '/'
});


// destructure deeply
let me = {
    first_name: 'Hank',
    last_name: 'Wang',
    school: {
        senior: 'JFVS',
        college: 'KUAS'
    }
};

let {first_name: f, last_name, school: { senior: j } } = me;
console.log(f, last_name, 'went to', j);
