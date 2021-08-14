const startingMinutes = 25; 
let time = startingMinutes * 60; 
const countdownM = document.getElementById("countdown");
let pauseflag = false; 


function countdownupdate() {
    const minutes = Math.floor(time/60); 
    let seconds = time % 60; 
    //let countdownM = document.getElementById("countdown");
    if (!pauseflag) 
    {
        countdownM.innerHTML = `${minutes}: ${seconds}`;
        time--; 
    }
    if (minutes == 0 && seconds == 0)
    {
        let audio = new Audio('alarm_soft.mp3')
        audio.play();
    }
    
}

function pausecountdown() {

}
