const items = document.querySelectorAll('.item')

items?.forEach((item, i) => {
  item.classList.add('active')
  item.innerHTML = `Елемент №${i + 1}`
})
