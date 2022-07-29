var score = 0

var buttonEl = document.querySelector("#start-time");
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question-prompt");
var optionAEl = document.getElementById("option-a");
var optionBEl = document.getElementById("option-b");
var optionCEl = document.getElementById("option-c");
var optionDEl = document.getElementById("option-d");
var buttonAEl = document.querySelector("#button-a");
var buttonBEl = document.querySelector("#button-b");
var buttonCEl = document.querySelector("#button-c");
var buttonDEl = document.querySelector("#button-d");

var countDown = function () {
    var timeLeft = 60
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }
        if (timeLeft === 0) {
            console.log("blastoff")
            clearInterval(startCountdown)
        };
    }, 1000);
};

var startQuiz = function () {
    questionEl.textContent = "first question"
    optionAEl.textContent = "wrong"
    optionBEl.textContent = "right"
    optionCEl.textContent = "wrong"
    optionDEl.textContent = "wrong"

    // option buttons
    buttonAEl.addEventListener("click", function () {
        console.log("false")
    })
    buttonBEl.addEventListener("click", function () {
        console.log("true")
    })
    buttonCEl.addEventListener("click", function () {
        console.log("false")
    })
    buttonDEl.addEventListener("click", function () {
        console.log("false")
    })
}

// start game button
buttonEl.addEventListener("click", function () {
    countDown()
    startQuiz()
})

