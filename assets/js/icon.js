const icons = [ 'cube1.png', 'cube2.png', 'cube3.png', 'cube4.png' ]
let current = 0

setInterval(e => {
  const link = document.querySelector('#icon-link')
  link.href = './assets/img/' + icons[current]

  current++
  if (!icons[current]) current = 0
}, 100)