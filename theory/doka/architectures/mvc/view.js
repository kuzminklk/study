const flashLightView = {
  redraw() {
    const { isOn, color } = flashLightModel
    const flash = document.querySelector(".flashlight")

    flash.classList.add(`has-color-${color}`)
    if (isOn) {
      flash.classList.add("is-on")
    }
  },
}

flashLightView.redraw()


const flashLightViewEvents = {
  // Остальной код

  initEvents() {
    const powerButton = document.querySelector(`[name="power"]`)
    powerButton.addEventListener("click", () => flashLightController.toggle())

    // Код для событий других кнопок
  },
}