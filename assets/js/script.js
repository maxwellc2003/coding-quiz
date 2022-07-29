var score = 0
var timeLeft = 60

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
            timerEl.textContent = "0 Seconds Remaining"
            clearInterval(timeInterval)
            endQuiz()
        };
        console.log(timeLeft)
    }, 1000);
};

var startQuiz = function () {

    var firstQuestion = function () {
        questionEl.textContent = "first question";
        optionAEl.textContent = "wrong";
        optionBEl.textContent = "right";
        optionCEl.textContent = "wrong";
        optionDEl.textContent = "wrong";

        buttonAEl.onclick = function () {
            endQuiz()
            secondQuestion()
        }
        buttonBEl.onclick = function () {
            secondQuestion()
        }
        buttonCEl.onclick = function () {
            secondQuestion()
        }
        buttonDEl.onclick = function () {
            secondQuestion()
        }
    }

    var secondQuestion = function () {
        questionEl.textContent = "second question";
        optionAEl.textContent = "wrong";
        optionBEl.textContent = "wrong";
        optionCEl.textContent = "wrong";
        optionDEl.textContent = "right";

        buttonAEl.onclick = function () {
            thirdQuestion()
        }
        buttonBEl.onclick = function () {
            thirdQuestion()
        }
        buttonCEl.onclick = function () {
            thirdQuestion()
        }
        buttonDEl.onclick = function () {
            thirdQuestion()
        }
    }

    var thirdQuestion = function () {
        questionEl.textContent = "third question";
        optionAEl.textContent = "right";
        optionBEl.textContent = "wrong";
        optionCEl.textContent = "wrong";
        optionDEl.textContent = "wrong";

        buttonAEl.onclick = function () {
            fourthQuestion()
        }
        buttonBEl.onclick = function () {
            fourthQuestion()
        }
        buttonCEl.onclick = function () {
            fourthQuestion()
        }
        buttonDEl.onclick = function () {
            fourthQuestion()
        }
    }

    var fourthQuestion = function () {
        questionEl.textContent = "fourth question";
        optionAEl.textContent = "wrong";
        optionBEl.textContent = "right";
        optionCEl.textContent = "wrong";
        optionDEl.textContent = "wrong";

        buttonAEl.onclick = function () {
            endQuiz()
        }
        buttonBEl.onclick = function () {
            endQuiz()
        }
        buttonCEl.onclick = function () {
            endQuiz()
        }
        buttonDEl.onclick = function () {
            endQuiz()
        }
    }

    firstQuestion()
}

var endQuiz = function () {
    location.href = './highscores.html';
}

// start quiz button
buttonEl.addEventListener("click", function () {
    countDown()
    startQuiz()
})

// option buttons
buttonAEl.addEventListener("click", function () {
})

buttonBEl.addEventListener("click", function () {
})

buttonCEl.addEventListener("click", function () {
})

buttonDEl.addEventListener("click", function () {
})