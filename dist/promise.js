"use strict";

var promise = new Promise(function (resolve, reject) {
    if (true) {
        resolve({
            status: "ok"
        });
    } else {
        reject({
            "status": "error"
        });
    }
});

promise.then(function (value) {
    // success
    console.log(value);
}, function (value) {
    // failure
    console.log(value);
});