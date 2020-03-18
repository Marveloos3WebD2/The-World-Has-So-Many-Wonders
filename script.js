var startBtn = document.querySelector('#start');
var infoDiv = document.querySelector('#info');
var timeEl = document.querySelector("#timer")
var gameContainer = document.getElementById('gameContainer');
var questionDiv = document.getElementById('question');
var answerButtons = document.querySelectorAll('.answer');
var answer1Div = document.getElementById('answer1');
var answer2Div = document.getElementById('answer2');
var answer3Div = document.getElementById('answer3');
var answer4Div = document.getElementById('answer4');
var answer5Div = document.getElementById('answer5');
var answer6Div = document.getElementById('answer6');
var answer7Div = document.getElementById('answer7');


var questions = [
    {
        question: "Where can you find the Great Wall of China?",
        answer1: "China",
        answer2: "Taiwan",
        correct: "China"
    },

    {
        question: "Where can you find Christ the Redeemer Statue?",
        answer1: "Argentina",
        answer2: "Brazil",
        correct: "Brazil"
    },

    {
        question: "Where can you find The Macchu Picchu?",
        answer1: "Nepal",
        answer2: "Peru",
        correct: "Peru"
    },
    {
        question: "Where can you find the Chichen Itza?",
        answer1: "Mexico",
        answer2: "Portugal",
        correct: "Mexico"
    },

    {
        question: "Where can you find the Roman Colisseum?",
        answer1: "Italy",
        answer2: "France",
        correct: "Italy"
    },
    {
        question: "Where can you find The Taj Mahal?",
        answer1: "India",
        answer2: "Pakistan",
        correct: "India"

    },
    {
        question: "Where can you find the Petra?",
        answer1: "Jordan",
        answer2: "Egypt"

    },

];







   var incorrect = 0
   var correct = 0



function toggleShowInfoDiv() {
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}



var counter = 0;

var secondsLeft = 10;
var timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            handleIncorrectAnswer()
            counter++
            renderQuestions()
        }

    }, 1000);
}

function handleIncorrectAnswer() {
    console.log('Incorrect')
    incorrect++
    counter++
    renderQuestions()
}
function handleCorrectAnswer() {
    console.log('Correct')
    correct++
    counter++
    renderQuestions()
}
function toggleShowInfoDiv() {
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }


    gameContainer.classList.toggle("show")

}
// handleIncorrectAnswer() 
// console.log({ userChoice, currentCorrectAnswer });
// console.log('Incorrect');



function renderQuestions() {
    questionDiv.textContent = questions[counter].question;
    answer1Div.textContent = questions[counter].answer1;
    answer2Div.textContent = questions[counter].answer2;
    answer3Div.textContent = questions[counter].answer3;
    answer4Div.textContent = questions[counter].answer4;
    answer5Div.textContent = questions[counter].answer5;
    answer6Div.textContent = questions[counter].answer6;
    answer7Div.textContent = questions[counter].answer7;
    startTimer()


}
startBtn.addEventListener('click', function () {
    toggleShowInfoDiv()
    gameContainer.style.display = "block"
    renderQuestions();
});

answerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var userChoice = this.textContent;
        var currentCorrectAnswer = questions[counter].correct;
        if (userChoice === currentCorrectAnswer) {
            console.log({ userChoice, currentCorrectAnswer });
            console.log('CORRECt');
            handleCorrectAnswer()
        } else {
            console.log({ userChoice, currentCorrectAnswer });
            console.log('Incorrect');
            handleIncorrectAnswer()
        }
    })
})
gameContainer.style.display = 'none';

// alert("You got " + score + "/" + questions.length);
