/**
 * Given I am taking a code quiz
 * When I click the start button
 * Then a timer starts and I am presented with a question
 * When I answer a question
 * Then I am presented with another question
 * When I answer a question incorrectly
 * Then time is subtracted from the clock
 * When all questions are answered or the timer reaches 0
 * Then the game is over
 * When the game is over
 * Then I can save my initials and score
 */

//define questions & answers

var q = ["1. How many hours of class is there each week?<br /><br />",
    "2. How many hours a week are you expected to study?<br /><br />",
    "What profession does Shane work in?<br /><br />"
];
var a1 = ["<button class=buttons002 onclick=q1i()>6</button>",
    "<button class=buttons002 onclick=q2i()>10</button>",
    "<button class=buttons002 onclick=q3i()>Computer Programming</button>",
];

var a2 = ["<button class=buttons002 onclick=q1i()>8</button>",
    "<button class=buttons002 onclick=q2i()>15</button>",
    "<button class=buttons002 onclick=q3c()>Construction</button>",
];

var a3 = ["<button class=buttons002 onclick=q1c()>10</button>",
    "<button class=buttons002 onclick=q2c()>20</button>",
    "<button class=buttons002 onclick=q3i()>Finance</button>",
];

var c = ["Correct", "Correct", "Correct"];
var i = ["Incorrect", "Incorrect", "Incorrect"];

var n = 0;
n++;
var s = 0;
s++;

var timer = document.getElementById("timer");
var count = 30;
<<<<<<< HEAD

function begin001() {

=======
function begin001() {
    
>>>>>>> 15c8eed22945e9e57ce94957ec1503ee9e96d933
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question001.innerHTML = q[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    number001.innerHTML = n++;
<<<<<<< HEAD
    var interval = setInterval(function () {
=======
    var interval = setInterval(function(){
>>>>>>> 15c8eed22945e9e57ce94957ec1503ee9e96d933
        count--;
        timer.textContent = "time left: " + count;
        if (count === 0) {
            clearInterval(interval);
            timer.textContent = "Your time is up!";
        }
    }, 1000)
}


function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score001.innerHTML = s++;
}

function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

function new002() {
    question001.innerHTML = q[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    score001.innerHTML = s++;
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
    question001.innerHTML = q[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    next001.innerHTML = "";
    answer001.innerHTML = "";
    number001.innerHTML = n++;
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>>End of Quiz</button>";
    score001.innerHTML = s++;
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>>End of Quiz</button>";
}

function end001() {
    message001.innerHTML = "End of Quiz.";
    question001.innerHTML = "";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
    answer001.innerHTML = "";
}

function repeat001() {
    location.reload();
}
