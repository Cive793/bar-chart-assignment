"use strict";

const customersArray = [12, 1, 16, 2, 9, 6, 22, 27, 31, 7, 1, 8, 14, 29, 22, 16, 7, 4, 9, 18, 27, 11, 6, 23, 32, 21, 17, 5, 8, 17, 24, 9, 6, 15, 8, 1, 13, 7, 9, 14];

let counter = 0;
//let classCounter = 0;
let arrayLength = 40;
let individualBar = document.querySelector(".individual-bar");
/* "1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12" "13" "14" "15" "16" "17" "18" "19" "20" "21" "22" "23" "24" "25" "26" "27" "28" "29" "30" "31" "32" "33" "34" "35" "36" "37" "38" "39" "40" */

loop();

function loop() {
  console.log("loop");
  counter++;
  //classCounter++;
  let queueSize = Math.floor(Math.random() * 32);
  console.log(queueSize);

  if (counter < arrayLength) {
    loop();
  } else {
    customersArray.unshift(queueSize);
    customersArray.splice(39, 1);
    console.log(customersArray);
  }
  //setTimeout(loop, 1000);

  //setBarHeight();

  individualBar.style.height = queueSize * 3 + "px";
}

/* function setBarHeight() {
  //console.log("setBarHeight");

  for (let counter = 0; counter < 40; counter++) {
    individualBar.style.height = queueSize * 3 + "px";
  }
} */
