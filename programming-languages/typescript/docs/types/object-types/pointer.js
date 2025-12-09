function printCoord(pt) {
    if (pt.y === undefined) {
        console.log(`x: ${pt.x}`);
    }
    else {
        console.log(`x: ${pt.x}, y: ${pt.y}`);
    }
}
printCoord({ "x": 2 });
