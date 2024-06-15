const header = document.querySelector('header')
const footer = document.querySelector('footer')

header?.addEventListener('mouseover', () => {
  footer.style.backgroundColor = `hsl(24deg 85% 61%)`
})

header?.addEventListener('mouseleave', () => {
  console.log('fire!')
  footer.style.backgroundColor = ''
})
