const items = document.querySelectorAll('.item')

items.forEach((item) =>
  item.addEventListener('click', () => item.classList.toggle('active')),
)
