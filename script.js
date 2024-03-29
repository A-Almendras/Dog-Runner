////////////////////////////////
// Global Variables Here
const player = document.querySelector('#player')
const obstacle = document.querySelector('#obstacle')
const bone = document.querySelector('#bone')
const score = document.querySelector('#score')
let gameOver = false
let bScore = 0

////////////////////////////////
// Functions For Game Logic Here

const initGame = () => {
  jump()
  setInterval(collision, 2000)
  score.innerText = `Score: ${bScore}`
}

// To allow player to jump when click event occurs
const jump = () => {
  score.innerText = bScore
  if (player.classList === 'jump') {
    return
  } else {
    // animation will occur in a class called jump. When user clicks want to activate jump animation by adding the class
    player.classList.add('jump')
    score.innerText = `Score: ${bScore}`

    // based on keyframes in CSS, animation lasts for .5 secs, so want to remove the class after .5 secs so we can redo animation whenever we click again
    setTimeout(removeJumping, 600)
  }
}

// To remove the jumping from the player
const removeJumping = () => {
  player.classList.remove('jump')
}

// To generate the obstacles
const collision = setInterval(() => {
  // gets the position of obstacle in horiz direction when click occurs
  let obstaclePosition = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue('left')
  )
  // gets the position of the player in the vertical direction when click occurs
  let playerPosition = parseInt(
    window.getComputedStyle(player).getPropertyValue('bottom')
  )

  if (obstaclePosition <= 0 && obstaclePosition >= -50 && playerPosition < 60) {
    obstacle.style.animation = null
    alert('You ran into a fire hydrant :( Better be careful!')
    bScore--
    score.innerText = `Score: ${bScore}`
  }
}, 50)

// Trying to randomize obtacles; for future reference
// const random = () => {
//   obstacle.style.animation = 'slide 2s linear infinite'
// }
// setTimeout(random, 10)

// To generate the bones
const reward = setInterval(() => {
  // gets the position of obstacle in horiz direction when click occurs
  let rewardPosition = parseInt(
    window.getComputedStyle(bone).getPropertyValue('left')
  )
  // gets the position of the player in the vertical direction when click occurs
  let playerPosition = parseInt(
    window.getComputedStyle(player).getPropertyValue('bottom')
  )

  console.log(playerPosition)
  if (rewardPosition <= -40 && rewardPosition >= -80 && playerPosition > 90) {
    obstacle.style.animation = null
    // alert('You earned a reward! Keep it up.')
    bScore++
    score.innerText = `Score: ${bScore}`
  }
}, 50)

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when click/key pressed occurs
document.addEventListener('click', () => {
  if (player.classList != 'jump') {
    jump()
  }
})
document.addEventListener('click', () => {
  obstacle.style.animation = 'slide 5s linear infinite'
})
