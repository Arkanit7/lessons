export function parallaxOnMouse() {
  const elements = document.querySelectorAll('[data-prllx-mouse]')
  let x = 0
  let y = 0

  function animate() {
    elements.forEach((el) => {
      const coefficient = el.dataset.prllxMouse
      el.style.transform = `translate(${x / coefficient}px, ${
        y / coefficient
      }px)`
    })
  }

  document.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
    requestAnimationFrame(animate)
  })
	
  animate()
}

export function parallaxOnScroll() {
  const items = document.querySelectorAll('[data-prllx-scroll]')

  function offset(el) {
    const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  function animateIt(element, coefficient) {
    const centerOfTheParent =
      offset(element.parentElement).top + element.offsetHeight / 2
    const centerOfTheScreen = pageYOffset + window.innerHeight / 2
    const difference = centerOfTheScreen - centerOfTheParent
    const scrollTopPercent = (difference / window.innerHeight) * 100

    element.style.cssText = `transform: translateY(${
      scrollTopPercent / coefficient
    }%);`
  }

  items.forEach((item) => {
    let visible = false
    let coefficient = parseFloat(item.dataset.prllxScroll)
    if (!coefficient) coefficient = 1

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible = true
        else visible = false
      })
    })
    observer.observe(item)

    document.addEventListener('scroll', () => {
      if (!visible) return
      animateIt(item, coefficient)
    })
  })
}
