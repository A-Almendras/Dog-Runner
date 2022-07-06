////////////////////////////////
// Global Variables Here
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.width
const canvasHeight = canvas.height

const dog = document.querySelector('#dog')
const obstacle = document.querySelector('#obstacle')
const bone = document.querySelector('#bone')
let gameOver = false

////////////////////////////////
// Functions For Game Logic Here

////////////////////////////////
// Event Listeners Here
// To initialize/play the game when click/key pressed occurs

// For restart button to replay the game if player choose
