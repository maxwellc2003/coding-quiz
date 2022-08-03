var score = 0
var timeLeft = 60
var stopTime = (false)

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
        if (stopTime) {
            clearInterval(timeInterval)
        }
    }, 1000);
};

var startQuiz = function () {
    buttonEl.disabled = true;

    var firstQuestion = function () {
        questionEl.textContent = "first question";
        optionAEl.textContent = "wrong";
        optionBEl.textContent = "right";
        optionCEl.textContent = "wrong";
        optionDEl.textContent = "wrong";

        buttonAEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            secondQuestion()
        }
        buttonBEl.onclick = function () {
            score = score + 10
            secondQuestion()
        }
        buttonCEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            secondQuestion()
        }
        buttonDEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
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
            score = score - 5
            timeLeft = timeLeft - 10
            thirdQuestion()
        }
        buttonBEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            thirdQuestion()
        }
        buttonCEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            thirdQuestion()
        }
        buttonDEl.onclick = function () {
            score = score + 10
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
            score = score + 10
            fourthQuestion()
        }
        buttonBEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            fourthQuestion()
        }
        buttonCEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            fourthQuestion()
        }
        buttonDEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
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
            score = score - 5
            timeLeft = timeLeft - 10
            endQuiz()
        }
        buttonBEl.onclick = function () {
            score = score + 10
            endQuiz()
        }
        buttonCEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            endQuiz()
        }
        buttonDEl.onclick = function () {
            score = score - 5
            timeLeft = timeLeft - 10
            endQuiz()
        }
    }

    firstQuestion()
}

var endQuiz = function () {
    var removeQuestion1 = document.getElementById("question1");
    var removeQuestion2 = document.getElementById("question2");
    var removeQuestion3 = document.getElementById("question3");
    var removeQuestion4 = document.getElementById("question4");
    var removeQuestion5 = document.getElementById("question5");

    removeQuestion1.remove();
    removeQuestion2.remove();
    removeQuestion3.remove();
    removeQuestion4.remove();
    removeQuestion5.remove();

    stopTime = (true)

    var username = window.prompt("Please Enter A 3 Character Username")

    highscoreInput()
}

var highscoreInput = function () {
    $("#prompt").append('<li><p>Hey</p></li>');
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