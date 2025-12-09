
function greet(text: string | null) {
    if (text === null) {
        return;
    } else {
        console.log(text);
    }
}

greet('Hello, Dan');