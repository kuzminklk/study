
const flashLightControllerToggle = {
  toggle() {
    flashLightModel.isOn = !flashLightModel.isOn
  },
}

const flashLightControllerColor = {
  // Остальной код

  selectColor(e) {
    const buttonName = e.target.name
    const buttonColors = {
      daylight: "blue",
      nightlight: "yellow",
    }

    const preferredColor = buttonColors[buttonName]
    flashLightModel.color = preferredColor
  },
}