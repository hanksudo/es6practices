'use strict';

var book = {
    _author: 'Randy Pausch',
    _name: 'Last Lecture',
    get_name: function get_name() {
        return this._name;
    }
};

console.log('What\'s this book?');
console.log('It\'s', book.get_name());