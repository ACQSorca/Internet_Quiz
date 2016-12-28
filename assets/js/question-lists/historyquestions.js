
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

var historyQuestions = [
    new Question(
        "What is the most popular web browser today?",

        "Internet Explorer",
        "Chrome",
        "Safari",
        "Firefox"
    ),
    new Question(
        "What type of people used the Internet when it was invented?",

        "Computer Scientists",
        "Computer Technicians",
        "Computer Mathematicians",
        "Dustin Baker"
    ),
    new Question(
        "Who created the World Wide Web?",

        "Tim Berners-Lee",
        "Al Gore",
        "Vint Cerf",
        "Douglas Engelbart"
    ),
    new Question(
        "When was the World Wide Web invented?",

        "1989",
        "1962",
        "1982",
        "1975"
    ),
    new Question(
        "For what purpose was the Internet originally invented?",

        "Military",
        "Commercial",
        "Government",
        "Research"
    ),
    new Question(
        "What is the name of the organization in charge of web addresses?",

        "The Internet Corporation for Assigned Names and Numbers (ICANN)",
        "The Mozilla Foundation",
        "The World Wide Web Consortium (W3C)",
        "The European Computer Manufacturers Association (ECMA)"
    ),
    new Question(
        "What was the name of the (working) predecessor to the Internet?",

        "ARPANET",
        "The Intergalactic Network",
        "ICANN",
        "World Wide Web"
    ),
    new Question(
        "What was the first World Wide Web browser?",

        "WorldWideWeb",
        "Netscape Navigator",
        "Mosaic",
        "Internet Explorer"
    ),
    new Question(
        "What was the name of the first World Wide Web server?",

        "httpd",
        "worldwideweb",
        "rootd",
        "t.berners-lee"
    ),
    new Question(
        "The current IP system is…",

        "IPv6",
        "IPv4",
        "IPv2",
        "IPv8"
    )
];

var quizSubject = historyQuestions;