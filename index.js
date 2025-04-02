// Your code here
"use strict";

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");


document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
    if (e.key ==="ArrowUp") {
        moveDodgerUp();
    }
    if (e.key ==="ArrowDown") {
        moveDodgerDown();
    }
});

function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
    playSoundOnMovement();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    playSoundOnMovement();
  });



  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { 
      dodger.style.left = `${left + 1}px`;
    }
    playSoundOnMovement();
  }

  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  if (bottom < 380) { // container height er 400px
    dodger.style.bottom = `${bottom + 1}px`;
    }
    playSoundOnMovement();
  }

  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom > 0) { // forhindrer at den kommer under containeren
      dodger.style.bottom = `${bottom - 1}px`;
    }
    playSoundOnMovement();
  }

