import mover from './mover.js'

mover()

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

// .header__search
function headerSearch() {
  const field = document.querySelector('.header__search')

  document.addEventListener('click', (e) => {
    if (e.target.closest('.header__search')) return
    if (e.target.closest('[data-search]')) {
      field.classList.toggle('header__search--active')
      return
    }

    field.classList.remove('header__search--active')
  })
}

headerSearch()
