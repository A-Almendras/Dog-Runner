////////////////////////////////
// Global Variables Here
const dog = document.querySelector('#dog')
const obstacle = document.querySelector('#fire-hydrant')
const bone = document.querySelector('#bone')

////////////////////////////////
// Functions For Game Logic Here

// To allow dog to jump
const jump = () => {
  dog.classList.add('jump')
  console.log('jump')
}
// To generate the obstacles

// To generate the bones

// Game Over

// Restart the game

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when click/key pressed occurs
dog.addEventListener('click', jump)
// For restart button to replay the game if player choose to
