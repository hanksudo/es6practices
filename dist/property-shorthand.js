'use strict';

var mark_active = function mark_active(first, last) {
    return { first: first, last: last, is_active: true };
};
console.log(mark_active('Hank', 'Wang'));