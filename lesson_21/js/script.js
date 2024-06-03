'use strict'

const TITLE_COLOR = '#ff7de9'
const TEXT_COLOR = '#75bfff'
const CODE_COLOR = '#86de74'

function printTitle(string) {
  console.log(`%c${string}`, `font-size: 2rem; color: ${TITLE_COLOR};`)
}

function printText(string) {
  console.log(`%c${string}`, `font-size: 1.2rem; color: ${TEXT_COLOR}`)
}

function printCode(string) {
  console.log(`%c${string}`, `font-size: 1rem; color: ${CODE_COLOR}`)
}

function printError(string) {
  console.error(`${string}`)
}

// Задача №1
printTitle('Задача №1')
printText('Яка назва змінної вірна?')
printCode('1) let user-name')
printCode('2) let UserName')
printCode('3) let userName')
printText(
  'Відповідь: варіант №3 - let userName\nУ JS для запису змінних використовують стиль lowerCamelCase.'
)

// Задача №2
printTitle('Задача №2')
printText('Чи буде помилка при виконанні наступної програми?')
printCode('const userName = 20')
printCode('userName = "Іштван"')
printText(
  'Відповідь: Так.\nНеможливо призначати константі значення після її декларації.'
)
printError('TypeError: invalid assignment to const "userName"')

// Задача №3
printTitle('Задача №3')
printText('Що потрапить в консоль?')
printCode('let numOne = 20')
printCode('let numTwo = "20"')
printCode('let numSum = numOne + numTwo')
printCode('console.log(numSum)')
printText(
  'Відповідь: "2020".\nОдин з операндів є рядком, тож інший операнд було конвертовано в цей самий тип.'
)
