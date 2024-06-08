export default function mover() {
  // <div data-mover="#menu; beforeend; only all and (max-width: 767px);">
  // data-mover="destination via query selector, method of inserting, media query to match"

  const movableElements = document.querySelectorAll('[data-mover]')
  const origins = []

  movableElements.forEach((el) => {
    // First let's save where our elements originated from
    const prevSibling = el.previousElementSibling

    if (prevSibling) origins.push([prevSibling, 'afterend'])
    else origins.push([el.parentElement, 'afterbegin'])
  })

  movableElements.forEach((el, i) => {
    // Get all the necessary data for the trip
    const params = el.dataset.mover.replace(/\s*;\s*/g, ';').split(';')
    const destinationEl = document.querySelector(params[0])
    const method = params[1]
    const mediaQuery = matchMedia(params[2])

    // It's how we move it
    function move() {
      if (mediaQuery.matches) destinationEl.insertAdjacentElement(method, el)
      else origins[i][0].insertAdjacentElement(origins[i][1], el)
    }

    // Finally let's do it :)
    move()
    mediaQuery.onchange = move
  })
}
