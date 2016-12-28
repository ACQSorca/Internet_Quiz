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

var htmlQuestions = [
    new Question(
        "What is the organization that is in charge of HTML standards?",

        "World Wide Web Consortium (W3C)",
        "Mozilla Foundation",
        "Extended Hypertext Markup Group (XHTMG)",
        "Web Hypertext Application Technology Working Group (WHATWG)"
    ),
    new Question(
        "What is the document type declaration for HTML5?",

        "&lt;!DOCTYPE html&gt;",
        "&lt;!DOCTYPE html/&gt;",
        '&lt;!DOCTYPE HTML PUBLIC -//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd"&gt;',
        '&lt;DOCTYPE HTML PUBLIC "-//IETF//DTD HTML//EN"&gt;'
    ),
    new Question(
        "What video format will Firefox accept?",

        "WebM",
        "MIME",
        "MPEG-4",
        "MOV"
    ),
    new Question(
        "Which one of these is not a new tag in HTML5?",

        "&ltobject&gt;",
        "&ltmain&gt;",
        "&ltfooter&gt;",
        "&lt;nav&gt;"
    ),
    new Question(
        "What is the name of the group that first created HTML5?",

        "Web Hypertext Application Technology Working Group (WHATWG)",
        "World Wide Web Consortium (W3C)",
        "Mozilla Foundation",
        "Extended Hypertext Markup Group (XHTMG)"
    ),
    new Question(
        "HTML is…",

        "a markup language.",
        "a man-made language.",
        "a programing language.",
        "a transfer protocol."
    ),
    new Question(
        'What does the utf-8 in &lt;meta charset=”utf-8”&gt; mean?',

        "Universal Coded Character Set + Transformation Format – 8-bits",
        "Unicode Text Format – 8 bytes",
        "Unified Coded Character Set + Transformation Instructions – 8-bits",
        "Unicode Text Format – 8 bits"
    ),
    new Question(
        "How would a non-breaking space be added to a webpage?",

        "&amp;nbsp;",
        "&lt;nbs/&gt;",
        "&amp;nbs;",
        "&lt;nbsp/&gt;"
    ),
    new Question(
        "What is the semantically correct way to add boldness to a word (as interpreted by most browsers)?",

        "&lt;strong&gt;",
        "&lt;b&gt;",
        "&lt;bold&gt;",
        "&lt;em&gt;"
    ),
    new Question(
        "Which element does not by default take up the entire width of the page?",

        "&lt;span&gt;",
        "&lt;div&gt;",
        "&lt;p&gt;",
        "&lt;h2&gt;"
    )
];

var quizSubject = htmlQuestions;

