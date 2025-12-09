
function createGuitar(strings = 6, maxWeight = 5) {
  const fretBoardMaterial = maxWeight <= 5 ? 'пихта' : 'кедр'

  return {
    strings,
    frets: 24,
    fretBoardMaterial,
    boardMaterial: 'клён',
  }
}

const sixStringsGuitar = createGuitar(6)
const sevenStringsGuitar = createGuitar(7)