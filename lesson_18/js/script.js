import mover from './mover.js'
import { parallaxOnMouse } from './parallax.js'

mover()
parallaxOnMouse()

function menu() {
  const burger = document.querySelector('.burger')
  const menuElement = document.getElementById(
    burger.getAttribute('aria-controls')
  )
  const { body } = document

  function openMenu() {
    burger.setAttribute('aria-expanded', true)
    menuElement.classList.add('header__menu--active')
    body.classList.add('menu-lock')
  }

  function closeMenu() {
    burger.setAttribute('aria-expanded', false)
    menuElement.classList.remove('header__menu--active')
    body.classList.remove('menu-lock')
  }

  window.addEventListener('click', (e) => {
    if (e.target.closest('.header__menu') && !e.target.closest('.menu__link'))
      return
    const expanded = burger.getAttribute('aria-expanded') === 'true'

    if (expanded) {
      closeMenu()
      return
    }
    if (e.target.closest('.burger')) openMenu()
  })
}

menu()

function shrinkHeader() {
  const header = document.querySelector('.header')
  const modifierClass = 'header--on-scroll'

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) header.classList.remove(modifierClass)
        else header.classList.add(modifierClass)
      })
    },
    { threshold: 1 }
  )

  io.observe(document.documentElement)
}

shrinkHeader()

function duplicateLines() {
  const list = document.querySelector('.line__list')

  for (let i = 0; i < 5; i += 1) {
    const clone = list.cloneNode(true)
    list.insertAdjacentElement('afterend', clone)
  }
}

duplicateLines()

function returnToTheTop() {
  const returnButton = document.querySelector('.return')
  const hero = document.querySelector('.hero')

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) returnButton.classList.remove('return--active')
      else returnButton.classList.add('return--active')
    })
  })

  io.observe(hero)
}

returnToTheTop()
