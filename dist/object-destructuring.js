"use strict";

// object destructuring
var person = {
    first: "Hank",
    last: "Wang"
};

var first = person.first;
var last = person.last;

console.log(first, last);

// assign use different name
var fn = person.first;
var ln = person.last;

console.log(fn, ln);

// extract two values
var getResult = function getResult() {
    return {
        result: 1234,
        error: null
    };
};

var _getResult = getResult();

var result = _getResult.result;
var error = _getResult.error;

console.log(result, error);

// use destructuring to pass variable
var doHTTP = function doHTTP(_ref) {
    var host = _ref.host;
    var port = _ref.port;
    var path = _ref.path;

    console.log(host, port, path);
};

doHTTP({
    host: "localhost",
    port: 80,
    path: "/"
});

// destructure deeply
var me = {
    firstName: "Hank",
    lastName: "Wang",
    school: {
        senior: "JFVS",
        college: "KUAS"
    }
};

var f = me.firstName;
var lastName = me.lastName;
var j = me.school.senior;

console.log(f, lastName, "went to", j);