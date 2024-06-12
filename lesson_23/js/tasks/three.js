const { body } = document

body.classList.add('loaded')

if (body.classList.contains('loaded')) body.style.color = 'green'
