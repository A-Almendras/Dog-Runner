////////////////////////////////
// Global Variables Here
const game = document.querySelector('.game')
const player = document.querySelector('#player')
const obstacle = document.querySelector('#obstacle')
const reward = document.querySelector('#reward')

const moveBy = 10
let obstacles = [] // will contain every instance of obstacle that is created
let collectibles = []
let gameOver = false

////////////////////////////////
// Classes/Functions For Game Logic Here

const initGame = () => {
  if (gameOver === true) {
    return
  }

  //   if (leftArrow === true) {
  //     player.style.left = parseInt(player.style.left) - moveBy + 'px'
  //     console.log(player.style.left)
  //   }
  //   if (rightArrow === true) {
  //     player.style.left = parseInt(player.style.left) + moveBy + 'px'
  //   }

  console.log(gameOver)
}

initGame()

// // this if else statement prevents the dog from going off the canvas in the horiz direction
//     if (playerX > canvasWidth - this.width) {
//       // if the dog position at x is greater than the canvasWidth - the dog width then set the dog position to be equal to the value
//       coordX = canvasWidth - this.width
//     } else if (coordX < 0) {
//       coordX = 0
//     }

// To generate dog/main Player
// class Player {
//   constructor() {
//     // sets the initial object values for the dog
//     playerWidth = player.style.width = '50px'
//     playerHeight = player.style.height = '50px'
//     // coordinates in 2D context begin at upper-left of canvas
//     coordX = game.style.width - player.style.width
//     coordY = game.style.height - player.style.height
//   }
//   updatePosition() {}
// }

// const player1 = new Player()

// // To an obstacle
// class Obstacle {
//   constructor() {
//     // sets the initial object values for the obstacle
//     this.width = 40
//     this.height = 40
//     // coordinates in 2D context begin at upper-left of canvas
//     this.x = Math.random() * canvasWidth // will be randomized each time
//     this.y = Math.random() * canvasHeight
//   }
//   draw() {
//     ctx.fillStyle = '#a31818'
//     ctx.fillRect(this.x, this.y, this.width, this.height)
//   }
//   updatePosition() {
//     this.y += 4
//   }
// }

// // const obstacle = new Obstacle()
// // For loop creates 21 instances of new Obstacle
// for (let i = 0; i <= 20; i++) {
//   obstacles.push(new Obstacle())
//   console.log(obstacles)
// }

// // To generates Collectibles
// class Collectible {
//   constructor() {
//     // sets the initial object values for the collectible
//     this.width = 40
//     this.height = 40
//     // coordinates in 2D context begin at upper-left of canvas
//     this.x = Math.random() * canvasWidth // will be randomized each time
//     this.y = 0
//   }
//   draw() {
//     ctx.fillStyle = '#d0ef54'
//     ctx.fillRect(this.x, this.y, this.width, this.height)
//   }
//   updatePosition() {
//     this.y += 6
//   }
// }

// // const collectible = new Collectible()
// // For loop creates 21 instances of new Obstacle
// for (let i = 0; i <= 20; i++) {
//   collectibles.push(new Collectible())
//   console.log(collectibles)
// }

// // To add and animate obstacles & to detects collision for game over (generate obstacles randomly)
// const obstacleEvents = () => {
//   // Supposed to draw and updatePosition of each obstacle instance
//   obstacles.forEach((obstacle) => {
//     obstacle.draw()
//     obstacle.updatePosition()

//     //2d Collision detection Axis-aligned bounding box from MDN
//     if (
//       dog.x < obstacle.x + obstacle.width &&
//       dog.x + dog.width > obstacle.x &&
//       dog.y < obstacle.y + obstacle.height &&
//       dog.y + dog.height > obstacle.y
//     ) {
//       // collision detected
//       // alert('Game Over')
//       gameOver = true
//     }
//   })
// }

// // To add and animate collectibles and removes them from game when collision occurs
// const collectibleEvents = () => {
//   // Supposed to draw and updatePosition of each obstacle instance
//   collectibles.forEach((collectible) => {
//     collectible.draw()
//     collectible.updatePosition()

//     if (
//       dog.x < collectible.x + collectible.width &&
//       dog.x + dog.width > collectible.x &&
//       dog.y < collectible.y + collectible.height &&
//       dog.y + dog.height > collectible.y
//     ) {
//       // collision detected
//       // alert('Game Over')
//       gameOver = false
//       console.log('must earn point')
//     }
//   })
// }

// // To display score
// const displayScore = () => {}

// // To draw and update the game canvas (animation loop of game)
// const animate = () => {}

// animate()

// // To replay game if player desides to
// const replay = () => {}

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when arrowkey pressed occurs
document.addEventListener('keydown', (e) => {
  let playerPosition = parseInt(
    getComputedStyle(player).getPropertyValue('left')
  )
  // let gameWidth = parseInt(getComputedStyle(game).getPropertyValue('width'))

  if (e.key === 'ArrowLeft') {
    player.style.left = playerPosition - moveBy + 'px'
    console.log(parseInt(player.style.left))
    if (player.style.left < 0) {
      console.log('must remove')
    }
  } else if (e.key === 'ArrowRight') {
    player.style.left = playerPosition + moveBy + 'px'
    console.log(parseInt(player.style.left))
  }

  if (playerPosition < 10) {
    player.style.left = 10 + 'px'
  } else if (playerPosition > 340) {
    player.style.left = 340 + 'px'
  }
})

// For restart button to replay the game if player choose
