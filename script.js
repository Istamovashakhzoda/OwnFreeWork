let focusButton = document.getElementById("focus")
let buttons = document.querySelectorAll(".btn")
let shortBreakButton = document.getElementById("shortbreak")
let longBreakButton = document.getElementById("longbreal")
let startBtn = document. getElementById("btn-start")
let reset = document.getElementById("btn-reset")
let pause = document.getElementById("btn-pause")
let time = document.getElementById("time")

let set;
let count = 59;
let paused = true;
let minCount = 24;

time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value=value <10 ? `0${value}` :value;
    return value
}

reset.addEventListener(
    "click",
    (resetTime = () =>{
        pauseTime();
        count = 59;
        minCount = 24;
        time.textContent = `${minCount +1}:00`
    })
)

const removeFocus = () =>{
    buttons.forEach((btn) => {
        btn.classList.remove("btn-focus")
    })
}

focusButton.addEventListener("click", () =>{
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTime();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount +1}:00`
})

shortBreakButton.addEventListener("click", () =>{
    removeFocus()
    shortBreakButton.classList.add("btn-focus");
    pauseTime();
    minCount =4;
    count = 59;
    time.textContent = `${appendZero(minCount + 1)}:00`
})

longBreakButton.addEventListener("click", () => {
    removeFocus();
    longBreakButton.classList.add("btn-focus")
    pauseTime()
    minCount =14;
    count=59;
    time.textContent = `${minCount +1}:00`
})

pause.addEventListener(
    "click",
    (pauseTime = () =>{
        pause=true;
        clearInterval(set)
        startBtn.classList.remove("hide")
        pause.classList.remove("show")
        reset.classList.remove("show")
    })
)
