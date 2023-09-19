let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
        document.getElementById('start-button').disabled = true;
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('start-button').disabled = false;
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function restartTimer() {
    resetTimer();
    startTimer();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('timer-display');
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('stop-button').addEventListener('click', stopTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);
document.getElementById('restart-button').addEventListener('click', restartTimer);