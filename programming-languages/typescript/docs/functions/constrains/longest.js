"use strict";
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
console.log(longest([223, 23, 23], [23, 23]));
