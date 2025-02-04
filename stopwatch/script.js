let [hours, minutes, seconds] = [0, 0, 0];

let outputres = document.getElementById("stopwatch");
let timer = null;
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  outputres.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(stopwatch, 1000);
}

function watchstop() {
  clearInterval(timer);
}

function watchreset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  outputres.innerHTML ="00:00:00"
}
