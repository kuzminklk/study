
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

const zoo: (Fish | Bird)[] = [getPet(), getPet()];
const uderwater = zoo.filter(isFish);