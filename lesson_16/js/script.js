import mover from './mover.js'

mover()

function setIcon(use, id) {
  use.setAttribute('xlink:href', `img/icons/symbol-defs.svg#${id}`)
}

function lang() {
  const block = document.querySelector('.lang-north-header')
  const button = block.querySelector('.lang-north-header__button')
  const icon = button.querySelector('use')

  button.addEventListener('click', () => {
    const state = button.hasAttribute('aria-expanded')

    if (state) {
      button.removeAttribute('aria-expanded')
      setIcon(icon, 'icon-expand')
    } else {
      button.setAttribute('aria-expanded', true)
      setIcon(icon, 'icon-x')
    }
  })

  document.addEventListener('click', (e) => {
    const closest = e.target.closest('.lang-north-header')

    if (!closest) {
      button.removeAttribute('aria-expanded')
      setIcon(icon, 'icon-expand')
    }
  })
}

lang()

function phone() {
  const block = document.querySelector('.phone-central-header')
  const button = block.querySelector('.phone-central-header__button')
  const icon = button.querySelector('use')

  button.addEventListener('click', () => {
    const state = button.hasAttribute('aria-expanded')

    if (state) {
      button.removeAttribute('aria-expanded')
      setIcon(icon, 'icon-phone')
    } else {
      button.setAttribute('aria-expanded', true)
      setIcon(icon, 'icon-x')
    }
  })

  document.addEventListener('click', (e) => {
    const closest = e.target.closest('.phone-central-header')

    if (!closest) {
      button.removeAttribute('aria-expanded')
      setIcon(icon, 'icon-phone')
    }
  })
}

phone()

function search() {
  const button = document.querySelector('.central-header__button')
  const icon = button.querySelector('use')

  button.addEventListener('click', () => {
    const state = button.hasAttribute('aria-expanded')

    if (state) {
      button.removeAttribute('aria-expanded')
      setIcon(icon, 'icon-zoom')
    } else {
      button.setAttribute('aria-expanded', true)
      setIcon(icon, 'icon-x')
    }
  })

  document.addEventListener('click', (e) => {
    const closest =
      e.target.closest('.central-header__search') ||
      e.target.closest('.central-header__button')

    if (!closest) {
      button.removeAttribute('aria-expanded')
      setIcon(icon, 'icon-zoom')
    }
  })
}

search()

function menu() {
  const overlay = document.querySelector('.header__overlay')
  const burger = document.querySelector('.burger')
  const menuElement = document.getElementById(
    burger.getAttribute('aria-controls')
  )
  const { body } = document

  function openMenu() {
    burger.setAttribute('aria-expanded', true)
    menuElement.classList.add('header__menu--active')
    overlay.classList.add('overlay--active')
    body.classList.add('menu-lock')
  }

  function closeMenu() {
    burger.setAttribute('aria-expanded', false)
    menuElement.classList.remove('header__menu--active')
    overlay.classList.remove('overlay--active')
    body.classList.remove('menu-lock')
  }

  window.addEventListener('click', (e) => {
    if (e.target.closest('.header__menu')) return
    const expanded = burger.getAttribute('aria-expanded') === 'true'

    if (expanded) {
      closeMenu()
      return
    }
    if (e.target.closest('.burger')) openMenu()
  })
}

menu()
