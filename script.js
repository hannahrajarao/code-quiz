var questions = [
    "Which of these is the correct way to print something to the console?",
    "Which of these is a comment in JavaScript?",
    "Which of these will not display an alert statement to the console",
    "What is the correct way to generate a random integer in the interval [a,b)?",
    "Which of these functions will not return the value of a+b?",
]
var answersChoices = [
    ["window.print()", "console.print()", "window.log()", "console.log()"],
    ["// comment", "<!--comment-->", "/*comment*/", "# comment"],
    ["alert", "confirm", "prompt", "print"],
    ["Math.floor(Math.random()*b+a)", "Math.floor(Math.random()*(b-a)+a)", "Math.floor(Math.random()*a+b)", "Math.floor(Math.random()*(a-b)+a)"],
    ["var add = (a, b)=> a+b;", "function add(a, b) {return a+b}", "function(a, b) {a+b}","var add = function(a, b) {return a+b}"]
]

var correctAnswers = [3, 0, 3, 1, 2];