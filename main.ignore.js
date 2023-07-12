// Define global variables
var currentQuestionIndex = 0;
var secondsLeft = 60;
var timerInterval;
var score = 0;

// Define quiz questions
var questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "New York", "Tokyo"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City"
  }
];

// Define DOM elements
var quizIntroEl = document.querySelector("#quiz-global-intro");
var questionBoxEl = document.querySelector("#question-global-box");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback-choices");
var highscoreBoxEl = document.querySelector("#highscore-global-box");
var initialsInputEl = document.querySelector("#initials");
var submitBtnEl = document.querySelector("#submit-highscore");
var secondsEl = document.querySelector("#seconds");

// Define functions
function startQuiz() {
  // Hide quiz intro and show question box
  quizIntroEl.style.display = "none";
  questionBoxEl.style.display = "block";

  // Start timer
  timerInterval = setInterval(function() {
    secondsLeft--;
    secondsEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      endQuiz();
    }
  }, 1000);

  // Display first question
  displayQuestion();
}

function displayQuestion() {
  // Get current question
  var currentQuestion = questions[currentQuestionIndex];

  // Display question and choices
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choiceEl = document.createElement("div");
    var choiceBtnEl = document.createElement("button");

    choiceBtnEl.textContent = currentQuestion.choices[i];
    choiceBtnEl.setAttribute("data-answer", currentQuestion.choices[i]);
    choiceBtnEl.addEventListener("click", checkAnswer);

    choiceEl.appendChild(choiceBtnEl);
    choicesEl.appendChild(choiceEl);
  }
}

function checkAnswer(event) {
  // Get selected answer
  var selectedAnswer = event.target.getAttribute("data-answer");

  // Check if answer is correct
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = "Wrong!";
    secondsLeft -= 5;
  }

  // Move to next question or end quiz
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  // Stop timer
  clearInterval(timerInterval);

  // Hide question box and show highscore box
  questionBoxEl.style.display = "none";
  highscoreBoxEl.style.display = "block";

  // Display score
  var scoreEl = document.createElement("p");
  scoreEl.textContent = "Your score is " + score;
  highscoreBoxEl.insertBefore(scoreEl, initialsInputEl);

  // Save highscore to local storage
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var initials = initialsInputEl.value.toUpperCase();
  var newHighscore = {
    initials: initials,
    score: score
  };
  highscores.push(newHighscore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Add event listener to start quiz button
var startBtnEl = document.querySelector("#start");
startBtnEl.addEventListener("click", startQuiz);









// BEGIN: ed8c6549bwf9
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var choiceEls = [choiceOneEl, choiceTwoEl, choiceThreeEl, choiceFourEl];
  for (var i = 0; i < choiceEls.length; i++) {
      choiceEls[i].textContent = currentQuestion.choices[i];
      choiceEls[i].addEventListener("click", checkAnswer); // add event listener to each answer choice element
  }
  choicesFeedbackEl.textContent = ""; // reset feedback text
}

function checkAnswer(event) {
  var userChoice = event.target.textContent;
  var currentQuestion = questions[currentQuestionIndex];
  if (userChoice === currentQuestion.answer) {
      choicesFeedbackEl.textContent = "Correct!";
  } else {
      choicesFeedbackEl.textContent = "Wrong!";
      secondsLeft -= 5; // subtract 5 seconds from timer
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      displayQuestion(); // show next question
  } else {
      // quiz is over, show highscore container
      questionContainerEl.style.display = "none";
      highscoreContainerEl.style.display = "block";
      highscoreTextEndEl.textContent = "You scored " + score + " out of " + questions.length + "!";
  }
}
// END: ed8c6549bwf9






function checkAnswer() {
  var currentQuestion = questions[currentQuestionIndex];
  var userChoice = // variable to store the user's selected choice

  if (currentQuestion.answer === userChoice) {
     choicesFeedbackEl.textContent = "Correct!";
  } else {
     choicesFeedbackEl.textContent = "Wrong!";
     secondsLeft -= 5;
  }
  
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
     displayQuestion();
  } else {
     endQuiz();
  }

  setTimeout(function() {
     choicesFeedbackEl.textContent = "";
  }, 500);
}


var currentQuestion = questions[currentQuestionIndex];
var userChoice = this.textContent;
if (userChoice === currentQuestion.choices[currentQuestion.answer]) {







  function checkAnswer() {
    var currentQuestion = questions[currentQuestionIndex];
    var userChoice = this.textContent;
    clearInterval(timerInterval); // stop the timer
    if (userChoice === currentQuestion.choices[currentQuestion.answer]) {
      choicesFeedbackEl.textContent = "Correct!";
    } else {
      choicesFeedbackEl.textContent = "Wrong!";
    }
    setTimeout(function() {
      choicesFeedbackEl.textContent = "";
    }, 500);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      // start the timer again with the remaining seconds
      startTimer(remainingSeconds);
      displayQuestion();
    } else {
      endQuiz();
    }
  }