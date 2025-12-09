
class CoffeeMachine {
  turnOn() {}
  getWaterLevel() {}
  getWater() {}
  turnOnHeater() {}
  turnOffHeater() {}
  getTemperature() {}
  // ...
}


const machine = new CoffeeMachine()

function heatWater() {
  machine.turnOn()

  while (machine.getWaterLevel() <= 1000) {
    machine.getWater()
  }

  machine.turnOnHeater()

  if (machine.getTemperature() >= 90) {
    machine.turnOffHeater()
  }
}

heatWater()
