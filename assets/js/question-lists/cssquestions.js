
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

var cssQuestions = [
  new Question(
        "What does CSS stand for?",

        "Cascading Style Sheet",
        "Computer Service Software",
        "Cascade System Software",
        "Creative Software Suite"
    ),
    new Question(
        "When was the initial release of CSS?",

        "December 17, 1996",
        "January 28, 1997",
        "April 22, 1999",
        "January 28, 1989"
    ),
    new Question(
        "Which HTML tag is used to define an internal style sheet?",

        "&ltstyle&gt;",
        "&ltinternal&gt;",
        "&ltstylesheet&gt;",
        "&ltcss&gt;"
    ),
    new Question(
        "What is the organization that is in charge of CSS standards?",

        "The World Wide Web Consortium (W3C)",
        "The Mozilla Foundation",
        "The Internet Corporation for Assigned Names and Numbers (ICANN)",
        "The European Computer Manufacturers Association (ECMA)"
    ),
    new Question(
        "In CSS, how would you select all the &lt;p&gt; tags on a page?",

        "p {}",
        "#p {}",
        ".p {}",
        "&lt;p&gt; {}"
    ),
    new Question(
        "Who created CSS?",

        "The World Wide Web Consortium (W3C)",
        "Apple Computer, Inc.",
        "World Wide Web CSS",
        "Netscape Communications"
    ),
    new Question(
        "Which of the following values represents the right margin? <br /> margin: 10px 4px 7px 8px",

        "4px",
        "10px",
        "7px",
        "8px"
    ),
    new Question(
        "What is each style named?",

        "Selector",
        "Style",
        "Style Name",
        "Selector Name"
    ),
    new Question(
        "How do you insert a comment in CSS?",

        "/* comment */",
        "//comment//",
        "*/* comment */*",
        "*/comment/*"
    ),
    new Question(
        "The unit em means…",

        "a unit equal to the point-size.",
        "a unit equal to ¼ of an inch.",
        "a unit equal to the width of the letter n.",
        "a unit equal to the length of the page."
    )
];

var quizSubject = cssQuestions;
