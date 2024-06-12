const button = document.querySelector('.button')

button?.scrollIntoView({
  inline: 'nearest',
  block: 'nearest',
  behavior: 'smooth',
})
