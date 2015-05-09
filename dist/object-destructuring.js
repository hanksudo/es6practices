// object destructuring
'use strict';

var person = {
    first: 'Hank',
    last: 'Wang'
};

var first = person.first;
var last = person.last;

console.log(first, last);

// assign use different name
var fn = person.first;
var ln = person.last;

console.log(fn, ln);

// extract two values
var get_result = function get_result() {
    return {
        result: 1234,
        error: null
    };
};

var _get_result = get_result();

var result = _get_result.result;
var error = _get_result.error;

console.log(result, error);

// use destructuring to pass variable
var do_http = function do_http(_ref) {
    var host = _ref.host;
    var port = _ref.port;
    var path = _ref.path;

    console.log(host, port, path);
};

do_http({
    host: 'localhost',
    port: 80,
    path: '/'
});

// destructure deeply
var me = {
    first_name: 'Hank',
    last_name: 'Wang',
    school: {
        senior: 'JFVS',
        college: 'KUAS'
    }
};

var f = me.first_name;
var last_name = me.last_name;
var j = me.school.senior;

console.log(f, last_name, 'went to', j);