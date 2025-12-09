"use strict";
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(['1', '2', '6'], (n) => parseInt(n));
