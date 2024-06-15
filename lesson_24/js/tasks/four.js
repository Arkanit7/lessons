/**
 * Розпочинає відлік використовуючи значення
 * атрибутів елемента data-max і data-delay
 *
 * @param {HTMLElement} element
 */
function doCountingInElement(element) {
  const maxCount = parseInt(element.dataset.max) || 3
  const delaySeconds = parseInt(element.dataset.delay) || 1
  let currentCount = 0 // Початковий відлік

  const interval = setInterval(() => {
    currentCount += 1
    element.textContent = currentCount

    // Зупинити відлік при досягненні maxCount
    if (currentCount === maxCount) {
      clearInterval(interval)
    }
  }, delaySeconds * 1000)
}

/**
 * При виявленні елемента у viewport - додає клас
 * .intersecting, запускає анімацію та прибирає
 * стеження.
 *
 * @param {IntersectionObserverEntry} entry
 * @param {IntersectionObserver} observer
 * @param {HTMLElement} child
 */
function handleIntersection(entry, observer, child) {
  if (!entry.isIntersecting) return

  // Якщо видно елемент
  entry.target.classList.add('intersecting')
  observer.unobserve(entry.target)
  doCountingInElement(child)
}

/**
 * Наглядає за елментом та анімує
 * дочірній
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} child
 */
function watchParentAndAnimateChild(parent, child) {
  if (!parent) return
  if (!child) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        handleIntersection(entry, observer, child)
      })
    },
    { threshold: 0.5 },
  )

  observer.observe(parent)
}

const parentElement = document.querySelector('.box')
const child = document.querySelector('.item')

watchParentAndAnimateChild(parentElement, child)
