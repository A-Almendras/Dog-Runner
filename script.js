////////////////////////////////
// Global Variables Here
const player = document.querySelector('#player')
const obstacle = document.querySelector('#obstacle')
const bone = document.querySelector('#bone')
let gameOver = false

////////////////////////////////
// Functions For Game Logic Here

const initGame = () => {
  jump()
  setInterval(collision, 2000)
}

// To allow player to jump when click event occurs
const jump = () => {
  if (player.classList === 'jump') {
    return
  } else {
    // animation will occur in a class called jump. When user clicks want to activate jump animation by adding the class
    player.classList.add('jump')
    console.log('jump')

    // based on keyframes in CSS, animation lasts for .5 secs, so want to remove the class after .5 secs so we can redo animation whenever we click again
    setTimeout(removeJumping, 600)
  }
}

// To remove the jumping from the player
const removeJumping = () => {
  player.classList.remove('jump')
}

// To generate the obstacles
const collision = () => {
  // let obstaclePostition = obstacleSlide.style.getPropertyValue('transform')
  // console.log(obstaclePostition)
  let obstaclePosition = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue('left')
  )
  let playerPosition = parseInt(
    window.getComputedStyle(player).getPropertyValue('bottom')
  )

  console.log(obstaclePosition)
  console.log(playerPosition)
  if (obstaclePosition <= 0 && obstaclePosition >= -50 && playerPosition < 60) {
    obstacle.style.animation = null
    // clearInterval(timerId)
    console.log('collide')
    alert('collide')
  }
}
// To generate the bones

// Game Over

// Restart the game

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when click/key pressed occurs
document.addEventListener('click', () => {
  if (player.classList != 'jump') {
    jump()
  }
})
document.addEventListener('click', () => {
  obstacle.style.animation = 'slide 2s linear infinite'
})

// For restart button to replay the game if player choose
