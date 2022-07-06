////////////////////////////////
// Global Variables Here
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width
const canvasHeight = canvas.height

// const dog = document.querySelector('#dog')
// const obstacle = document.querySelector('#obstacle')
// const bone = document.querySelector('#bone')
// let gameOver = false

////////////////////////////////
// Classes/Functions For Game Logic Here

// To generate dog/main Player
class Dog {
  constructor() {
    this.width = 50
    this.height = 50
    // coordinates in 2D contect begin at upper-left of canvas
    this.x = canvas.width - this.width
    this.y = canvas.height - this.height
    this.velX = 0
  }
  draw() {
    ctx.fillStyle = '#734747'
    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }
  updatePosition() {
    this.x -= 15
  }
}

const dog = new Dog()
// dog.draw()
// dog.updatePosition()

// To generates Obstacles
class Obstacle {}

// To generates Collectibles
class Collectible {}

// To add and animate obstacles & to detects collision for game over
const obstacleCollision = () => {}

// To add and animate collectibles and removes them from game when collision occurs
const collectibleCollision = () => {}

// To display score
const displayScore = () => {}

// To draw and update the game canvas (animation loop of game)
//
const animate = () => {
  ctx.clearRect(dog.x, dog.y, canvasWidth, canvasHeight)
  dog.draw()
  dog.updatePosition() // if we dont include this then the draw method occurs on the same location
  requestAnimationFrame(animate) // draws the dog at initial position -> updates the position and redraws dog at updated position -> sequence repeats
  // console.log(requestAnimationFrame(animate))
}

animate()
// To replay game if player desides to
const replay = () => {}

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when key pressed occurs
document.addEventListener('keydown', (e) => {
  // console.log(e)
  // console.log(e.key)
  // console.log(e.keyCode)
  if (e.key === 'ArrowLeft') {
    console.log('left')
  } else if (e.key === 'ArrowRight') {
    console.log('right')
  }
})

// For restart button to replay the game if player choose
