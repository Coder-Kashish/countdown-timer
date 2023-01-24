// adding deadline
var endtime = new Date("Jan 24, 2024 10:42:25").getTime();

// set the timer for days, hours, minutes, and seconds through setInterval
var x = setInterval(function () {
  var currenttime = new Date().getTime();
  var totaltime = endtime - currenttime;
  var days = Math.floor(totaltime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((totaltime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((totaltime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((totaltime % (1000 * 60)) / 1000);

  //selecting the demo id for displying the timer
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // loop for the case when timer completes its interval
  if (totaltime < 0) {
    clearInterval(x);   // method to stop or clear the timer set with setInterval method
    document.getElementById("demo").innerHTML = "Timer EXPIRED";
  }
}, 1000); // every sec the clock updated
