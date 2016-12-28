
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

var jsQuestions = [
    new Question(
        "JavaScript is…",

        "all answers",
        "imperative",
        "high-level",
        "object-oriented"
    ),
    new Question(
        "What is the organization that created JavaScript?",

        "Netscape Communications",
        "Mozilla Foundation",
        "Microsoft Corporation",
        "The European Computer Manufacturers Association (ECMA)"
    ),
    new Question(
        "What are variables that belong to an object called?",

        "Properties",
        "Values",
        "Functions",
        "Methods"
    ),
    new Question(
        "What are functions that belong to a object called?",

        "Methods",
        "Properties",
        "Values",
        "Variables"
    ),
    new Question(
        "JavaScript is derived from which language?",

        "C",
        "Java",
        "Python",
        "English"
    ),
    new Question(
        "How do you comment a single line in JavaScript?",

        "// this is a comment",
        "# this is a comment",
        "&lt;!-- this is a comment --&gt;",
        "/* this is a comment */"
    ),
    new Question(
        "In JavaScript, how would you create an array in the variable myArray without using the Array object creator?",

        "var myArray = [ ];",
        "var myArray = { };",
        "var myArray = new Array[ ];",
        "var myArray = new Array( );"
    ),
    new Question(
        "What is the file extension for a JavaScript file?",

        ".js",
        ".javascript",
        ".java",
        ".jvs"
    ),
    new Question(
        "Which of these is the OR symbol in JavaScript?",

        "a || b",
        "a && b",
        "a U b",
        "a &gt;&lt; b"
    ),
    new Question(
        "Which of these is the assignment symbol?",

        "=",
        "===",
        "=====",
        "===="
    )
];

var quizSubject = jsQuestions;