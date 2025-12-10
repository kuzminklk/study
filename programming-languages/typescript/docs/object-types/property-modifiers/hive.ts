

interface Bee {
    [index: string]: string | number
    readonly age: number,
    male: string
}

interface Hive {
    [index: number]: Bee;
}


const hive: Hive = [];

hive[0] = {
    age: 1,
    male: 'queen'
}

hive[1] = {
    age: 1,
    male: 'worker'
}