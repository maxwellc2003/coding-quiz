var score = 0
var timeLeft = 60
var USERNAME_KEY = "userNames"
var userNames = JSON.parse(localStorage.getItem(USERNAME_KEY)) ?? [];
var stopTime = ""

var buttonEl = document.querySelector("#start-time");
var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("questionPrompt");
var optionAEl = document.getElementById("option-a");
var optionBEl = document.getElementById("option-b");
var optionCEl = document.getElementById("option-c");
var optionDEl = document.getElementById("option-d");
var buttonAEl = document.querySelector("#button-a");
var buttonBEl = document.querySelector("#button-b");
var buttonCEl = document.querySelector("#button-c");
var buttonDEl = document.querySelector("#button-d");
document.getElementById("box").style.display = "block";
document.getElementById("highscores").style.display = "none";

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
        if (stopTime == (true)) {
            clearInterval(timeInterval)
        }
    }, 1000);
};

var startQuiz = function () {
    buttonEl.disabled = true;

    var firstQuestion = function () {
        questionEl.textContent = "var a = []; What does 'typeof a' return?";
        optionAEl.textContent = "array";
        optionBEl.textContent = "object";
        optionCEl.textContent = "string";
        optionDEl.textContent = "undefined";

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
        questionEl.textContent = "Inside which HTML element do we put the JavaScript?";
        optionAEl.textContent = "link";
        optionBEl.textContent = "JS";
        optionCEl.textContent = "javascript";
        optionDEl.textContent = "script";

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
        questionEl.textContent = "What property is used to change the text color of an element?";
        optionAEl.textContent = "color";
        optionBEl.textContent = "fontcolor";
        optionCEl.textContent = "textcolor";
        optionDEl.textContent = "background-color";

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
        questionEl.textContent = "What doctype is correct for HTML:5?";
        optionAEl.textContent = "!DOCTYPE";
        optionBEl.textContent = "!DOCTYPE HTML5";
        optionCEl.textContent = "!DOCTYPE html";
        optionDEl.textContent = "!HTML5";

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
    buttonEl.disabled = false;
    buttonEl.addEventListener("click", function () {
        location.reload();
    })

    stopTime = (true)

    var userInput = prompt("Please Enter A 3 Character Username")

    if (userInput.length >= 1 && userInput.length <= 3) {
        userName = "Username: " + (userInput) + ", Score: " + (score) + ", Time left: " + (timeLeft)

        userNames.push(userName)

        localStorage.setItem(USERNAME_KEY, JSON.stringify(userNames));

        document.getElementById("box").style.display = "none";
        document.getElementById("highscores").style.display = "block";

        renderInputs()
    } else if (userInput.length < 1 || userInput.length > 3) {
        window.alert("Please a username between 1-3 characters!")
        endQuiz()
    }
}

var renderInputs = function () {
    var ulEl = document.getElementById("input");
    ulEl.innterHTML = ""

    for (var i = 0; i < userNames.length; i += 1) {
        var userName = userNames[i];
        var liEl = document.createElement("li");
        liEl.textContent = userName;
        ulEl.appendChild(liEl)
    }
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