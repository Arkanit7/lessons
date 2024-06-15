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
 * @param {HTMLElement} element
 */
function handleIntersection(entry, observer, element) {
  if (!entry.isIntersecting) return

  // Якщо видно елемент
  entry.target.classList.add('intersecting')
  observer.unobserve(entry.target)
  doCountingInElement(element)
}

/**
 * Наглядає за елментом та анімує
 * дочірній
 *
 * @param {HTMLElement} parentElement
 * @param {HTMLElement} childElement
 */
function watchParentAndAnimateChild(parentElement, childElement) {
  if (!parentElement) return
  if (!childElement) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        handleIntersection(entry, observer, childElement)
      })
    },
    { threshold: 0.5 },
  )

  observer.observe(parentElement)
}

const parentElement = document.querySelector('.box')
const childElement = document.querySelector('.item')

watchParentAndAnimateChild(parentElement, childElement)
