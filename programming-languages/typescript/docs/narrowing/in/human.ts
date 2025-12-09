
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { fly?: () => void, swim?: () => void };

function move(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        animal;
    } else {
        animal;
    }
}