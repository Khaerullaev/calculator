let seconds = 0;
let interval = null;

const time = document.getElementById("time");
console.log(time.textContent)
function timer() {
  seconds++;
  settime();
}
function padstart(time) {
    return String(time).padStart(2, "0")
}

function settime() {
  const minutes = Math.floor(seconds / 60);
  const second = seconds % 60;
  time.innerHTML = `${padstart(minutes)}:${padstart(second)}`
}

function start() {
  if (interval) stop()
  interval = setInterval(timer, 1000)
}

function stop() {
  clearInterval(interval);
}

function reset() {
    stop();
    seconds = 0;
    settime()
}