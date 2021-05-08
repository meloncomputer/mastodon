/*
 * Canvas painting adapted from io.melon.computer/tools/micha
 */

// Initital state
const state = {
  xSpeed: Math.random() * 10,
  ySpeed: Math.random() * 10,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight
}

// Set up vars
const canvasEl = document.getElementById('splash-canvas')
const context = canvasEl.getContext('2d')

// Set up image
const brush = new window.Image()
brush.src = '../melon.png'

// Functions
function resizeCanvas () {
  canvasEl.width = window.innerWidth * 2
  canvasEl.height = window.innerHeight * 2
}

function drawBrush (event) {
  context.drawImage(
    brush,
    event.clientX * 2 - brush.width / 2,
    event.clientY * 2 - brush.height / 2
  )
}

// Listeners
window.addEventListener('resize', resizeCanvas)

// Init
resizeCanvas()

setInterval(() => {
  if (state.x + state.xSpeed >= window.innerWidth || state.x + state.xSpeed <= 0) {
    state.xSpeed *= -1
  }

  if (state.y + state.ySpeed >= window.innerHeight || state.y + state.ySpeed <= 0) {
    state.ySpeed *= -1
  }

  state.x += state.xSpeed
  state.y += state.ySpeed

  drawBrush({
    clientX: state.x,
    clientY: state.y
  })
}, 20)
