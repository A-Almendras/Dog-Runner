////////////////////////////////
// Global Variables Here
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width
const canvasHeight = canvas.height
let leftArrow = false
let rightArrow = false
let obstacles = [] // will contain every instance of obstacle that is created
let collectibles = []

// const dog = document.querySelector('#dog')
// const obstacle = document.querySelector('#obstacle')
// const bone = document.querySelector('#bone')
// let gameOver = false

////////////////////////////////
// Classes/Functions For Game Logic Here

// To generate dog/main Player
class Dog {
  constructor() {
    // sets the initial object values for the dog
    this.width = 50
    this.height = 50
    // coordinates in 2D context begin at upper-left of canvas
    this.x = canvasWidth - this.width
    this.y = canvasHeight - this.height
  }
  draw() {
    ctx.fillStyle = '#734747'
    ctx.strokeRect(this.x, this.y, this.width, this.height)
  }
  updatePosition() {
    // this if else statement prevents the dog from going off the canvas in the horiz direction
    if (this.x > canvasWidth - this.width) {
      // if the dog position at x is greater than the canvasWidth - the dog width then set the dog position to be equal to the value
      this.x = canvasWidth - this.width
    } else if (this.x < 0) {
      this.x = 0
    }

    if (leftArrow === true) {
      this.x -= 5
    }
    if (rightArrow === true) {
      this.x += 5
    }
  }
}

const dog = new Dog()

// To an obstacle
class Obstacle {
  constructor() {
    // sets the initial object values for the obstacle
    this.width = 40
    this.height = 40
    // coordinates in 2D context begin at upper-left of canvas
    this.x = Math.random() * canvasWidth // will be randomized each time
    this.y = 0
  }
  draw() {
    ctx.fillStyle = '#a31818'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  updatePosition() {
    this.y += 4
  }
}

// const obstacle = new Obstacle()
// For loop creates 21 instances of new Obstacle
for (let i = 0; i <= 20; i++) {
  obstacles.push(new Obstacle())
  console.log(obstacles)
}

// To generates Collectibles
class Collectible {
  constructor() {
    // sets the initial object values for the collectible
    this.width = 40
    this.height = 40
    // coordinates in 2D context begin at upper-left of canvas
    this.x = Math.random() * canvasWidth // will be randomized each time
    this.y = 0
  }
  draw() {
    ctx.fillStyle = '#d0ef54'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  updatePosition() {
    this.y += 3
  }
}

// const collectible = new Collectible()
// For loop creates 21 instances of new Obstacle
for (let i = 0; i <= 20; i++) {
  collectibles.push(new Collectible())
  console.log(collectibles)
}

// To add and animate obstacles & to detects collision for game over (generate obstacles randomly)
const obstacleEvents = () => {
  // Supposed to draw and updatePosition of each obstacle instance
  obstacles.forEach((obstacle) => {
    obstacle.draw()
    obstacle.updatePosition()
  })
}

// To add and animate collectibles and removes them from game when collision occurs
const collectibleEvents = () => {
  // Supposed to draw and updatePosition of each obstacle instance
  collectibles.forEach((collectible) => {
    collectible.draw()
    collectible.updatePosition()
  })
}

// To display score
const displayScore = () => {}

// To draw and update the game canvas (animation loop of game)
const animate = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight) // deletes canvas between each animation loop
  dog.draw() // draws dog instance
  dog.updatePosition() // if we dont include this then the draw method occurs on the same location

  obstacleEvents()
  collectibleEvents()

  requestAnimationFrame(animate) // draws the dog at initial position -> updates the position and redraws dog at updated position -> sequence repeats
  // console.log(requestAnimationFrame(animate))
}

animate()

// To replay game if player desides to
const replay = () => {}

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when arrowkey pressed occurs
document.addEventListener('keydown', (e) => {
  // console.log(e)
  // console.log(e.key)
  // console.log(e.keyCode)
  if (e.key === 'ArrowLeft') {
    leftArrow = true
  } else if (e.key === 'ArrowRight') {
    rightArrow = true
  }
})

// For when the arrowkeys are released
document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') {
    // console.log('left')
    leftArrow = false
    // console.log(leftArrow)
  } else if (e.key === 'ArrowRight') {
    // console.log('right')
    rightArrow = false
    // console.log(rightArrow)
  }
})

// For restart button to replay the game if player choose
