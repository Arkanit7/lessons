const link = document.querySelector('.link')

if (link) {
  link.dataset.someValue = '100'

  const someValue = parseInt(link.dataset.someValue)

  if (someValue < 200) link.style.color = 'red'
}
