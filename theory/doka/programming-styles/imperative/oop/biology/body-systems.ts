
interface CardioVascularSystem {
    pumpBlood: () => void;
    getOxigenLevel: () => number;
    getSugarLevel: () => number;
}


type TCell = string;

interface ImmuneSystem {
  fightInfection: () => void;
  produceTCells: () => TCell[];
}


class Human implements CardioVascularSystem, ImmuneSystem, SkeletalSystem {
  // ...
}


class Worm implements CardioVascularSystem, ImmuneSystem {
  // ...