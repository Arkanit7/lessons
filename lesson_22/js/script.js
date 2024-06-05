'use strict'

const TITLE_COLOR = '#ff7de9'

function printTitle(string) {
  console.log(`%c${string}`, `font-size: 1.2rem; color: ${TITLE_COLOR};`)
}

printTitle('Задача №1')

let someVar = 0
someVar++

if (someVar) {
  console.log(someVar)
}

printTitle('Задача №2')

for (let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`)
}

printTitle('Задача №3')

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= '10') || 20 === '20') {
  console.log('000')
}

printTitle('Задача №4')

function divide(divisor, dividend) {
  const quotient = divisor / dividend

  if (Number.isNaN(quotient) || Math.abs(quotient) === Infinity)
    return `Щось пішло не так!`

  return `Результат ділення: ${quotient}`
}

console.log(`divide(0, 0) // ${divide(0, 0)}`)
console.log(`divide(-20, 0) // ${divide(-20, 0)}`)
console.log(`divide() // ${divide()}`)
console.log(`divide(null) // ${divide(null)}`)
console.log(`divide(null, null) // ${divide(null, null)}`)
console.log(`divide(undefined, null) // ${divide(undefined, null)}`)
console.log(`divide('20', 4) // ${divide('20', 4)}`)
console.log(`divide('20', '4') // ${divide('20', '4')}`)
console.log(`divide(20, '4') // ${divide(20, '4')}`)
console.log(`divide(Infinity, '4') // ${divide(Infinity, '4')}`)

printTitle('Задача №5')

function logIfItemInArray(item, array) {
  array.includes(item) && console.log(item)
}

const myArray = ['10', null, 22, true, 10]

logIfItemInArray(10, myArray)
