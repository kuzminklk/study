"use strict";
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft(10, 'Hello!'));
