const startingMinutes = 25;
let time = startingMinutes * 60;
const countdownM = document.getElementById("countdown");
var pauseflag = false;
var myTimer;

function countdownupdate() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  //let countdownM = document.getElementById("countdown");
  console.log(pauseflag);
  if (!pauseflag) {
    countdownM.innerHTML = `${minutes}: ${seconds}`;
    if (minutes == 0 && seconds == 0) {
      clearInterval(myTimer);
      console.log("clearInterval");
      let audio = new Audio("alarm_soft.mp3");
      audio.play();
    } else {
      time--;
    }
  }
}

function playcountdown() {
  if (!pauseflag && myTimer == null) {
    myTimer = setInterval(countdownupdate, 1000);
    console.log("setInterval")
  } else {
    pauseflag = false;
  }
}

function pausecountdown() {
  pauseflag = true;
  console.log("paused");
  console.log(pauseflag);
}
