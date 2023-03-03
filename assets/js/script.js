import CubeRain from './cubeRain.js'

const cubeRain = new CubeRain()
cubeRain.init()
const redraw = () => {
  let newValue = textarea.value.replace('cubeConfig = ', '')

  try {
    newValue = JSON.parse(newValue)
  } catch (err) {
    return alert('Invalid values')
  }

  cubeRain.cubeConfig = newValue

  cubeRain.clear()
  cubeRain.draw()
}

const textarea = document.querySelector('textarea')
textarea.value = 'cubeConfig = ' + JSON.stringify(cubeRain.cubeConfig, null, 2)

alert('You can test values in the textare on the top-left.')

document.addEventListener('click', e => {
  if (e.target.tagName === 'CANVAS') redraw()
})