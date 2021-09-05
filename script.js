"use strict";

const customersArray = [0, 1, 16, 2, 9, 6, 22, 27, 31, 7, 1, 8, 14, 29, 22, 16, 7, 4, 9, 18, 27, 11, 6, 23, 32, 21, 17, 5, 8, 17, 24, 9, 6, 15, 8, 1, 13, 7, 9, 14];
console.log(customersArray);
//let counter = 0;
//let queueSize;
let individualBar = document.querySelector(".individual-bar");

loop();

function loop() {
  console.log("loop");
  //counter++;
  let queueSize = Math.floor(Math.random() * 32);
  customersArray.unshift(queueSize);

  individualBar.style.height = queueSize * 3 + "px";

  customersArray.slice(1, 41);
  console.log(queueSize);
  setTimeout(loop, 1000);

  //setBarHeight();
}

/* function setBarHeight() {
  //console.log("setBarHeight");

  for (let counter = 0; counter < 40; counter++) {
    individualBar.style.height = queueSize * 3 + "px";
  }
} */
