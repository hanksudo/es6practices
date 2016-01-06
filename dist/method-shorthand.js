let book = {
    _author: "Randy Pausch",
    _name: "Last Lecture",
    getName() {
        return this._name;
    }
};

console.log("What's this book?");
console.log("It's", book.getName());