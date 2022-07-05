////////////////////////////////
// Global Variables Here
const dog = document.querySelector('#dog')
const obstacle = document.querySelector('#fire-hydrant')
const bone = document.querySelector('#bone')
let gameOver = false

////////////////////////////////
// Functions For Game Logic Here

// To allow dog to jump when click event occurs
const jump = () => {
  // let count = 0

  // animation will occur in a class called jump. When user clicks want to activate jump animation by adding the class
  dog.classList.add('jump')
  console.log('jump')
  // count++

  // based on keyframes in CSS animation lasts for .5 secs, so want to remove the class after .5 secs so we can redo animation whenever we click again
  setTimeout(() => {
    console.log('class removed')
    dog.classList.remove('jump')
    // console.log(count)
  }, 500)
}
// To generate the obstacles
const obstacleCollision = () => {
  // let obstaclePostition = obstacleSlide.style.getPropertyValue('transform')
  // console.log(obstaclePostition)
  let obstaclePosition = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue('right')
  )
  let dogPosition = parseInt(
    window.getComputedStyle(dog).getPropertyValue('top')
  )

  obstacle.classList.add('obstacleSlide')
  console.log('sliding')
  console.log(obstaclePosition)
  console.log(dogPosition)

  let timerId = setInterval(() => {
    if (
      obstaclePosition <= 680 &&
      obstaclePosition >= 630 &&
      dogPosition <= 160
    ) {
      clearInterval(timerId)
      alert('game over')
    }

    obstaclePosition += 5
    obstacle.style.right = `${obstaclePosition}px`
  }, 10)
}

obstacleCollision()

// let rect = dog.getBoundingClientRect()
// console.log('x: ' + rect.x)
// console.log('y: ' + rect.y)

// let rect2 = obstacle.getBoundingClientRect()
// console.log('x: ' + rect.x)
// console.log('y: ' + rect.y)

// To generate the bones

// Game Over

// Restart the game

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when click/key pressed occurs
document.addEventListener('click', jump)
document.addEventListener('click', obstacleCollision)

// For restart button to replay the game if player choose to
