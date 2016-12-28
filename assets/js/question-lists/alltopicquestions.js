
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

var allQuestions = htmlQuestions.concat(cssQuestions, jsQuestions, historyQuestions);

var quizSubject = allQuestions;

