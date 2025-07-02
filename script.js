let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = ${h}:${m}:${s};
}

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  isRunning = false;
});

updateDisplay();
let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = ${h}:${m}:${s};
}

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  isRunning = false;
});

updateDisplay();
