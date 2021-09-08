"use strict";

const customersArray = [12, 1, 16, 2, 9, 6, 22, 27, 31, 7, 1, 8, 14, 29, 22, 16, 7, 4, 9, 18, 27, 11, 6, 23, 32, 21, 17, 5, 8, 17, 24, 9, 6, 15, 8, 1, 13, 7, 9, 14];

let counter = 0;
const maxNumberOfLoops = customersArray.length;
let individualBar = document.querySelector("#individual-bar" + counter);

loop();

function loop() {
  console.log("loop");
  console.log(counter);
  let barHeight = customersArray[counter];

  counter++;
  individualBar = document.querySelector("#individual-bar" + counter);

  console.log(individualBar);

  if (counter <= maxNumberOfLoops) {
    individualBar.style.height = barHeight * 6 + "px";
    loop();
  } else {
    let queueSize = Math.floor(Math.random() * 32);
    //console.log(queueSize);
    customersArray.push(queueSize);
    customersArray.shift();
    //console.log(customersArray);
    individualBar.style.height = customersArray[0] * 6 + "px";
    //console.log(individualBar);

    setTimeout(loop, 1000);
  }
}
