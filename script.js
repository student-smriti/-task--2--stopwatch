let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").textContent = timeToString(elapsedTime);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timerInterval);
}

function timeToString(time) {
    let date = new Date(time);
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    let hours = date.getUTCHours();

    return (
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0")
    );
}

document.getElementById("startStop").addEventListener("click", () => {
    if (!running) {
        startStopwatch();
        document.getElementById("startStop").textContent = "Pause";
        running = true;
    } else {
        stopStopwatch();
        document.getElementById("startStop").textContent = "Start";
        running = false;
    }
});

document.getElementById("reset").addEventListener("click", () => {
    stopStopwatch();
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
    running = false;
});

document.getElementById("lap").addEventListener("click", () => {
    if (running) {
        const lapTime = timeToString(elapsedTime);
        const li = document.createElement("li");
        li.textContent = lapTime;
        document.getElementById("laps").appendChild(li);
    }
});


