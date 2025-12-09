
function printAll(strs: string | string[] | null | undefined) {
    if (strs == null) {
        return
    } else if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s)
        }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        return;
    }
}

printAll(['Hello','Dan']);