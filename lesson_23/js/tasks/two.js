function addListWithItems(amount = 1) {
  // Якщо параметр функції Infinity або NaN - зупинити функцію
  if (!Number.isFinite(amount)) return

  const list = document.createElement('ul')

  for (let i = 0; i < amount; i++) {
    const item = document.createElement('li')

    item.textContent = '😄'
    list.prepend(item)
  }

  document.body.prepend(list)
}

addListWithItems(5)
