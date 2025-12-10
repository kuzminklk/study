
function identity<Type>(arg: Type): Type {
    return arg;
}

let output = identity<string>('My string');
let output2 = identity('My string');


function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}