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
  let count = 0

  // animation will occur in a class called jump. When user clicks want to activate jump animation by adding the class
  dog.classList.add('jump')
  console.log('jump')
  count++

  // based on keyframes in CSS animation lasts for .5 secs, so want to remove the class after .5 secs so we can redo animation whenever we click again
  setTimeout(() => {
    dog.classList.remove('jump')
    console.log('class removed')
    console.log(count)
  }, 500)
}
// To generate the obstacles

// To generate the bones

// Game Over

// Restart the game

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when click/key pressed occurs
document.addEventListener('click', jump)
// For restart button to replay the game if player choose to
