"use strict";
function greeter(fn) {
    fn('Hello, world!');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
