/*  Как пример мы можем рассмотреть программу,
    которая использует «подпрограммы» (в нашем случае функции),
    меняя состояние памяти (в нашем случае простой массив битов).

    Состояние памяти потом может быть использовано,
    например, для работы с каким-то устройством. */

let memory = [0, 0, 0, 0, 0, 0, 0, 0]

function invertSmallestBit() {
  memory[7] = Number(!memory[7])
  return memory
}

function invertBiggestBit() {
  memory[0] = Number(!memory[0])
  return memory
}

invertSmallestBit()
// [0, 0, 0, 0, 0, 0, 0, 1]

invertBiggestBit()
// [1, 0, 0, 0, 0, 0, 0, 1]

invertSmallestBit()
// [1, 0, 0, 0, 0, 0, 0, 0]
