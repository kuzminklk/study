
type DescriableFunction = {
    description: string,
    (arg: number): boolean
};

function doThing(fn: DescriableFunction) {
    console.log(fn.description + fn(6));
}

function myFunc(arg: number) {
    return arg > 10;
}
myFunc.description = 'Compare';

doThing(myFunc);