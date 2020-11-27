// Create function to start timer on click
let timer;

function startTimer() {
    let userValue = document.getElementById('userTime').value;

    // Time to determine how long the user needs the timer
    let minutes = 00;
    let seconds = 00;
    let secondsString = "00";
    if (userValue == "") {
        minutes = 30;
        seconds = 00;
    } else if (userValue != "" && userValue.indexOf(':') > 0) {
        breakdown = userValue.split(":");
        minutes = breakdown[0];
        seconds = breakdown[1];
    } else if(userValue != "" && userValue.indexOf(':') < 0) {
        minutes = 30;
        seconds = 00;
    }

    // Now, let's start running the countdown
    // Every seconds
    timer = setInterval(function () {
        // Decrease the minutes and seconds as needed. . .
        if (seconds == 00) {
            minutes -= 1;
            seconds = 59;
            secondsString = "59"
        } else {
            seconds -= 1;
            secondsString = seconds;
        }
        
        if (seconds < 10){
            secondsString = "0" + seconds;
        }

        // Set the html timer as needed
        if (minutes == 0 && seconds == 0) {
            document.getElementById('userTime').value = "Time is up!";
            clearInterval(timer);
        } else {
            document.getElementById('userTime').value = minutes + ":" + secondsString;
        }
    }, 1000);
}

function endTimer(){
  clearInterval(timer);
}