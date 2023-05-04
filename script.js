var questions = [
    "Which of these is the correct way to print something to the console?",
    "Which of these is a comment in JavaScript?",
    "Which of these will not display an alert statement to the console",
    "What is the correct way to generate a random integer in the interval [a,b)?",
    "Which of these functions will not return the value of a+b?",
]
var answerChoices = [
    ["window.print()", "console.print()", "window.log()", "console.log()"],
    ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
    ["alert()", "confirm()", "prompt()", "print()"],
    ["Math.floor(Math.random()*b+a)", "Math.floor(Math.random()*(b-a)+a)", "Math.floor(Math.random()*a+b)", "Math.floor(Math.random()*(a-b)+a)"],
    ["var add = (a, b) => a+b;", "function add(a, b) {return a+b}", "function(a, b) {a+b}","var add = function(a, b) {return a+b}"]
]

var correctAnswers = [3, 0, 3, 1, 2];

const mainContainer = document.getElementById("main-container");

function showQuestions() {
    // hide start elements
    document.querySelector("#start-screen").style.display = "none";
    const questionDiv = document.querySelector("#question");

    for(var i=0; i<questions.length; i++) {
        // show question
        questionDiv.innerHTML = questions[i];
        //show answer choices
        showAnswerChoices(i);
    }
}

function showAnswerChoices(questionIndex) {
    const ul = document.getElementById("answer-choice-container");
    for(var j=0; j<answerChoices[questionIndex].length; j++) {
        // this approach didn't work as the question element innterHTML is replaced but the li keep being added
        var li = document.createElement("li");
        li.classList.add("answer-choice");
        li.id = `answer-choice-${j}`;
        li.addEventListener("click", (event) => {checkAnswer(event.target.id)});
        liEls.push(li);
    }
}

function showAnswerChoices() {
    for(var i=0; i<answerChoices[currentQuestion].length; i++) {
        var li = liEls[i]
        li.textContent = answerChoices[currentQuestion][i];
        ul.appendChild(li);
    }
}

function checkAnswer(id) {
    var idNum = id[id.length-1];
    if(idNum == correctAnswers[currentQuestion]) {
        correct.textContent = "Correct!";
    }
    else {
        correct.textContent = "Wrong";
    }
    if(currentQuestion === questions.length-1) {
        endGame();
    }
    else {
        currentQuestion++;
        showQuestions();
    }
}

function endGame() {
    quizContainer.style.display = "none";
    showScoreScreen();
}

function showScoreScreen() {
    scoreScreen = document.getElementById("score-screen");
    scoreScreen.innerHTML = "Game Over! Enter your score below";
}