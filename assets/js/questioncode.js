
/*
Version 0.9.0

By Addison Sorca and Dawson Antonucci
Web Development II
Southwest Career and Technical Academy
Enterprise, Nevada
*/

// Use the following object creator to create an array of questions 
/*
// Question object creator
function Question(question, rightAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
    "use strict";
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.answerList = [
        wrongAnswer1,
        wrongAnswer2,
        wrongAnswer3
    ];
}
*/

/* This script is designed to be run with an array of questions.*/

// Global variable declaration
var score = 0,
    scoreBox = document.getElementById("score-box"),
    scoreContainer = document.getElementById("score-container"),
    newQuestion,
    questionContainer = document.getElementById("question-container"),
    questionTextContainer = document.getElementById("question-text-container"),
    form = document.getElementsByTagName("form")[0],
    submitButton = document.getElementById("submitbutton"),
    quizSubject,
    i; // For loops

// Function to put question in DOM
function printQuestion() {
    "use strict";
    var newAnswer,
        answerTag = '<div class="answer-container"><input name="answer" type="radio" />',
        answerClosingTag = '</div>';

    // Creates a random interger [0,topNumber)
    function randInt(topNumber) {
        return Math.floor(Math.random() * topNumber);
    
    }
    // Function to run when quiz is finished
    function finishQuiz() {
        submitButton.setAttribute("style", "display: none");
        questionContainer.setAttribute("style", "display: none;");
        scoreBox.setAttribute("style", "float: none; margin: auto; margin-top: 2em; width: 500px; align: center; padding: 2em; background-color: white;");
        scoreBox.innerHTML += 'Thank you for taking our quiz.<br/><a href="index.html">Back to home</a>';
        //window.alert("The quiz is finished.");
        // Change CSS page
    }


    // Reduces quizSubject array to 10 elements in a random order if it has more than 10 elements
    if (quizSubject.length > 10) {
        for (i = 0; quizSubject.length > 10; i -= 1) {
            allQuestions.splice(randInt(quizSubject.length), 1);
        }
    }


    // Display "Your score: 0" onload; updateScore() subfunction in checkQuestion() will replace score as user answers questions
    if (score === 0) {
        scoreContainer.innerHTML = 0;
    }

    // Takes random question, stores it in newQuestion variable and removes it from the array
    newQuestion = quizSubject.splice(randInt(quizSubject.length), 1)[0];

    // This ends the quiz once the quiz array is empty
    if (newQuestion === undefined) {
        finishQuiz();
        return;
    }

    // Puts newQuestion.rightAnswer in a random spot in the answerList array)
    // answerList at this point has 3 elements
    newQuestion.answerList.splice(randInt(newQuestion.answerList.length + 1), 0, newQuestion.rightAnswer);


    // Puts newQuestion's question property in DOM
    questionTextContainer.innerHTML = newQuestion.question;

    // Puts each item in newQuestion.answerList array in the DOM with div and input elements
    for (i = 0; i < newQuestion.answerList.length; i += 1) {
        newAnswer = newQuestion.answerList[i];
        if (newAnswer !== undefined) {
            form.innerHTML += answerTag + newAnswer + answerClosingTag;
        }
    }
}

// Function to run when Submit button is clicked
function checkQuestion() {
    "use strict";
    var inputList = document.getElementsByTagName("input"),
        selectionList = document.getElementsByClassName("answer-container"),
        // Finds the index of newQuestion.rightAnswer in the newQuestion.answerList array and stores it in rightSelection
        rightSelection = newQuestion.answerList.indexOf(newQuestion.rightAnswer),
        returnedAnswer = null;
    
    /* It is important to note that newQuestion.answerList, inputList, and selectionList refer to three different arrays.
    answerList is an array property of newQuestion.
    inputList is an array that contains the input (i.e. the radio buttons) in the DOM; it has no string values
    selectionList is an array that contains every div with the class "answer-container" in the DOM; these divs include
    tags for radio buttons along with answerList values */

    // Clears DOM and any variables relating to a returned answer, calls printQuestion()
    function clearQuestion() {
        form.innerHTML = null;
        questionTextContainer.innerHTML = null;
        returnedAnswer = null;
        
        scoreBox.setAttribute("style", "default;");
        printQuestion();
    }

    // Finds which radio button is selected and stores its index in the inputList array in the returnedAnswer variable
    for (i = 0; i !== inputList.length; i += 1) {
        if (inputList[i].checked) {
            returnedAnswer = i;
        }
    }
    
    // Updates score
    function updateScore() {
        score += 1;
        scoreContainer.innerHTML = (score * 10);
    }

    // Functions to run when an answer is returned
    function correctResponse() {
        updateScore();
        selectionList[returnedAnswer].setAttribute("style", "color: green");
        scoreBox.setAttribute("style", "background-color: green; color: white; border: solid black;");
        window.setTimeout(clearQuestion, 500);
    }
    function incorrectResponse() {
        selectionList[returnedAnswer].setAttribute("style", "color: red"); // Colors selected answer red
        selectionList[rightSelection].setAttribute("style", "color: green"); // Colors correct answer green
        scoreBox.setAttribute("style", "background-color: red; color: white; border: solid black;");
        window.setTimeout(clearQuestion, 750);
    }
    function noResponse() {
        window.alert("Please select an answer.");
        return;
    }

    // Calls noResponse() if returnedAnswer's value is null (default value, no radio button was selected)
    if (returnedAnswer === null) {
        noResponse();
    }

    // Check if returnedAnswer is equal to newQuestion.rightAnswer and reacts accordingly
    if (newQuestion.answerList[returnedAnswer] === newQuestion.rightAnswer) {
        correctResponse();
    } else {
        incorrectResponse();
    }
}

// Runs onload
window.addEventListener("load", printQuestion);

// Runs onclick of submit button
submitButton.addEventListener("click", checkQuestion);

// Alternative option: refreshes question onclick of the form, rather than submit button
//form.addEventListener("click", checkQuestion);




