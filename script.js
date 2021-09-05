"use strict";

const customersArray = [12, 1, 16, 2, 9, 6, 22, 27, 31, 7, 1, 8, 14, 29, 22, 16, 7, 4, 9, 18, 27, 11, 6, 23, 32, 21, 17, 5, 8, 17, 24, 9, 6, 15, 8, 1, 13, 7, 9, 14];

let counter = 0;
let arrayLength = 40;
let individualBar = document.querySelector(".individual-bar");

loop();

function loop() {
  console.log("loop");
  counter++;
  let queueSize = Math.floor(Math.random() * 32);
  console.log(queueSize);

  if (counter < arrayLength) {
    loop();
  } else {
    customersArray.unshift(queueSize);
    customersArray.splice(39, 1);
    console.log(customersArray);
    setBarHeight();
  }
  //setTimeout(loop, 1000);
  individualBar.style.height = queueSize * 3 + "px";
}

function setBarHeight() {
  //individualBar.style.height = queueSize * 3 + "px";
}
