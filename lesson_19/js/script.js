import mover from './modules/mover.js'
import accordion from './modules/accordion.js'
import slider from './modules/slider.js'

mover()
accordion()

function mobileMenu() {
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

mobileMenu()

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

function showInstance(instance) {
  instance.removeAttribute('hidden')
}

function hideInstance(instance) {
  instance.setAttribute('hidden', '')
}

function setActiveButtons(triggers, selectedType) {
  triggers.forEach((trigger) => {
    const triggerType = trigger.dataset.filterTrigger

    triggerType === selectedType
      ? trigger.setAttribute('data-filter-active', '')
      : trigger.removeAttribute('data-filter-active')
  })
}

function filterInstances(filter, selectedType) {
  const instances = filter.querySelectorAll('[data-filter-instance]')

  instances.forEach((instance) => {
    // Handle all
    if (selectedType === 'all') {
      showInstance(instance)
      return
    }

    const instanceType = instance.dataset.filterInstance

    selectedType === instanceType
      ? showInstance(instance)
      : hideInstance(instance)
  })
}

const filters = document.querySelectorAll('[data-filter]')

filters.forEach((filter) => {
  const triggers = filter.querySelectorAll('[data-filter-trigger]')

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const selectedType = trigger.dataset.filterTrigger

      filterInstances(filter, selectedType)
      setActiveButtons(triggers, selectedType)

      if (filter.dataset.filter === 'swiper') slider.update()
    })
  })
})
