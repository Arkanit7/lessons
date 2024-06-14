const items = document.querySelectorAll('.item')

items?.forEach((item, i) => {
  item.classList.add('active')
  item.textContent = `Елемент №${i + 1}`
})
