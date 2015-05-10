let promise = new Promise((resolve, reject) => {
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

promise.then((value) => {
    // success
    console.log(value);
}, (value) => {
    // failure
    console.log(value);
});
