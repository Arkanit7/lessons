const header = document.querySelector('header')
const footer = document.querySelector('footer')

if (footer && header) {
  header.addEventListener('mouseover', () => {
    footer.style.backgroundColor = `hsl(24deg 85% 61%)`
  })

  header.addEventListener('mouseleave', () => {
    footer.style.backgroundColor = ''
  })
}
