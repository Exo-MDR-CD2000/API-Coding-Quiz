//global vars
var currentQuestionIndex = 0;
var secondsLeft = 20; // this is the actual timer itself
var timerInterval; // used in the startTimer function
var score = 0; // not used yet

var remainingSeconds = 0; // ok so this is what actually stores the remaining seconds when the user answers a question

// quiz questions ---- for reference: [a=0, b=1, c=2, d=3,] ----
var questions = [
  {
    question:
      "What is the correct syntax for declaring a variable in JavaScript?",
    choices: ["a) var x;", "b) x = 5;", "c) variable x;", "d) int x;"],
    answer: 0,
  },
  // {
  //   question: "How do you write \"Hello, World!\" in an alert box?",
  //   choices: [
  //     "a) console.log(\"Hello, World!\");",
  //     "b) alertBox(\"Hello, World!\");",
  //     "c) alert(\"Hello, World!\");",
  //     "d) document.write(\"Hello, World!\");"
  //   ],
  //   answer: 2
  // },
  // {
  //   question: "What is the correct way to write a JavaScript comment?",
  //   choices: [
  //     "a) /\*This is a comment\*/",
  //     "b) //This is a comment",
  //     "c) /This is a comment/",
  //     "d) \\This is a comment"
  //   ],
  //   answer: 1
  // },
  // {
  //   question: "How do you declare a function in JavaScript?",
  //   choices: [
  //     "a) function myFunction()",
  //     "b) function = myFunction()",
  //     "c) var myFunction = function()",
  //     "d) def myFunction()"
  //   ],
  //   answer: 0
  // },
  // {
  //   question: "How do you call a function named \"myFunction\"?",
  //   choices: [
  //     "a) call myFunction()",
  //     "b) myFunction()",
  //     "c) execute myFunction()",
  //     "d) run myFunction()"
  //   ],
  //   answer: 1
  // },
  // {
  //   question: "Which operator is used to assign a value to a variable in JavaScript?",
  //   choices: [
  //     "a) =",
  //     "b) ==",
  //     "c) :=",
  //     "d) =>"
  //   ],
  //   answer: 0
  // },
  // {
  //   question: "What is the correct way to write a conditional statement in JavaScript?",
  //   choices: [
  //     "a) if x = 5 then",
  //     "b) if x == 5",
  //     "c) if (x = 5)",
  //     "d) if (x == 5)"
  //   ],
  //   answer: 3
  // },
  // {
  //   question: "How do you concatenate two strings in JavaScript?",
  //   choices: [
  //     "a) string1 + string2",
  //     "b) string1 . string2",
  //     "c) string1 & string2",
  //     "d) string1 ~ string2"
  //   ],
  //   answer: 0
  // },
  // {
  //   question: "How do you write a for loop in JavaScript?",
  //   choices: [
  //     "a) loop(x=0; x<5; x++)",
  //     "b) for (x=0; x<5; x++)",
  //     "c) for loop(x=0; x<5; x++)",
  //     "d) iterate(x=0; x<5; x++)"
  //   ],
  //   answer: 1
  // },
  // {
  //   question: "What function is used to convert a string to a number in JavaScript?",
  //   choices: [
  //     "a) convertStringToNumber()",
  //     "b) parseInt()",
  //     "c) stringToNumber()",
  //     "d) toNumber()"
  //   ],
  //   answer: 1
  // },
  // {
  //     question: "What is the output of the following code: console.log(typeof 'hello');",
  //     choices: [
  //       "a) undefined",
  //       "b) number",
  //       "c) string",
  //       "d) boolean",
  //     ],
  //     answer: 2
  //   },
  //   {
  //     question: "How do you convert a string to uppercase in JavaScript?",
  //     choices: [
  //       "a) toLowerCase()",
  //       "b) toUpperCase()",
  //       "c) toUpperCasecase()",
  //       "d) toUppercase()",
  //     ],
  //     answer: 1
  //   },
  //   {
  //     question: "Which method is used to remove the last item from an array in JavaScript?",
  //     choices: [
  //       "a) slice()",
  //       "b) pop()",
  //       "c) remove()",
  //       "d) splice()",
  //     ],
  //     answer: 1
  //   },
  //   {
  //     question: "What does the '!' operator do in JavaScript?",
  //     choices: [
  //       "a) Logical OR",
  //       "b) Logical XOR",
  //       "c) Logical AND",
  //       "d) Logical NOT",
  //     ],
  //     answer: 3
  //   },
  //   {
  //     question: "Which built-in method returns the length of a string in JavaScript?",
  //     choices: [
  //       "a) count()",
  //       "b) length()",
  //       "c) size()",
  //       "d) getSize()",
  //     ],
  //     answer: 1
  //   },
  //   {
  //     question: "What is the output of the following code: console.log(5 + '5');",
  //     choices: [
  //       "a) 10",
  //       "b) Error",
  //       "c) 25",
  //       "d) 55",
  //     ],
  //     answer: 3
  //   },
  //   {
  //     question: "Which method is used to add new elements to the end of an array in JavaScript?",
  //     choices: [
  //       "a) concat()",
  //       "b) add()",
  //       "c) append()",
  //       "d) push()",
  //     ],
  //     answer: 3
  //   },
  //   {
  //     question: "What is the output of the following code: console.log(Number('10') + 5);",
  //     choices: [
  //       "a) Error",
  //       "b) NaN",
  //       "c) 105",
  //       "d) 15",
  //     ],
  //     answer: 3
  //   },
  //   {
  //     question: "Which operator is used to check if two values are equal and of the same type in JavaScript?",
  //     choices: [
  //       "a) ==",
  //       "b) =",
  //       "c) ===",
  //       "d) !=",
  //     ],
  //     answer: 2
  //   },
  //   {
  //     question: "Which event is triggered when the user clicks on an HTML element?",
  //     choices: [
  //       "a) onchange",
  //       "b) onload",
  //       "c) onsubmit",
  //       "d) onclick",
  //     ],
  //     answer: 3
  //   },
  //   {
  //     question: "Which operator is used to assign a default value to a variable if the current value is null or undefined?",
  //     choices: [
  //         "a) ||= ",
  //         "b) ??= ",
  //         "c) ??",
  //         "d) ||",
  //     ],
  //     answer: 2
  //   },
  //   {
  //     question: "What is the output of the following code: console.log(typeof 10);",
  //     choices: [
  //       "a) undefined",
  //       "b) number",
  //       "c) string",
  //       "d) boolean",
  //     ],
  //     answer: 1
  //   },
  //   {
  //     question: "How do you convert a string to lowercase in JavaScript?",
  //     choices: [
  //       "a) toLowerCase()",
  //       "b) toUpperCase()",
  //       "c) toUpperCasecase()",
  //       "d) toUppercase()",
  //     ],
  //     answer: 0
  //   },
  //   {
  //     question: "Which method is used to remove the first item from an array in JavaScript?",
  //     choices: [
  //       "a) slice()",
  //       "b) shift()",
  //       "c) remove()",
  //       "d) splice()",
  //     ],
  //     answer: 1
  //   },
  //   {
  //     question: "What does the '&&' operator do in JavaScript?",
  //     choices: [
  //       "a) Logical OR",
  //       "b) Logical XOR",
  //       "c) Logical AND",
  //       "d) Logical NOT",
  //     ],
  //     answer: 2
  //   },
  //   {
  //     question: "Which built-in method removes the last element from an array and returns it?",
  //     choices: [
  //       "a) delete()",
  //       "b) pop()",
  //       "c) remove()",
  //       "d) splice()",
  //     ],
  //     answer: 1
  //   },
  //   {
  //     question: "What is the output of the following code: console.log('hello'.length);",
  //     choices: [
  //       "a) 6",
  //       "b) Error",
  //       "c) 5",
  //       "d) 0",
  //     ],
  //     answer: 2
  //   },
  //   {
  //     question: "Which method is used to add new elements to the beginning of an array in JavaScript?",
  //     choices: [
  //       "a) concat()",
  //       "b) add()",
  //       "c) append()",
  //       "d) unshift()",
  //     ],
  //     answer: 3
  //   },
];

// -- DOM elements by section --
// -- Nav DOM elements --

var timerEl = document.getElementById("timer");
var secondsEl = document.getElementById("seconds");

// -- Intro DOM elements --

var quizIntroEl = document.getElementById("quiz-global-intro");
var quizIntroBtnEl = document.getElementById("quiz-global-intro-start");

// -- Question DOM elements --

var questionContainerEl = document.getElementById("question-global-box");
var questionEl = document.getElementById("question-text");
var answerChoicesEl = document.getElementById("choices-global");
var choiceOneEl = document.getElementById("choice-1");
var choiceTwoEl = document.getElementById("choice-2");
var choiceThreeEl = document.getElementById("choice-3");
var choiceFourEl = document.getElementById("choice-4");
var choicesFeedbackEl = document.getElementById("choices-feedback");

// -- Highscore DOM elements --

var highscoreContainerEl = document.getElementById("highscore-global-box");
var highscoreTextEndEl = document.getElementById("end-quiz");
var highscoreFormEl = document.getElementById("highscore-form");
var highscoreDisplayEl = document.getElementById("highscore-display");
var highscoreNumberEl = document.getElementById("highscore-number");
var highscoreInputInitialsEl = document.getElementById("initials");
var highscoreSubmitBtnEl = document.getElementById("submit-highscore");

//hide the question container and highscore container until the user clicks the start button
questionContainerEl.style.display = "none";
highscoreContainerEl.style.display = "none";

// I need to display the quiz intro container first

function startQuiz() {
  quizIntroEl.style.display = "none";
  questionContainerEl.style.display = "block";
  highscoreContainerEl.style.display = "none";

  // the above should hide the quiz intro container and display the question container

  // start the timer with 20 seconds for each question
  startTimer(20);

  // display the first question
  displayQuestion();
}

//the above variable will be used to store the remaining seconds when the user answers a question

function startTimer(seconds) {
  secondsLeft = seconds;
  secondsEl.textContent = secondsLeft;
  timerInterval = setInterval(function () {
    secondsLeft--;
    remainingSeconds = secondsLeft;
    secondsEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      confirm("Would you like to try again?");
      refreshQuiz();
    }
  }, 1000);
}

function refreshQuiz() {
  questionContainerEl.style.display = "none";
  highscoreContainerEl.style.display = "none";
  quizIntroEl.style.display = "block";
  secondsLeft = 0;
  secondsEl.textContent = secondsLeft;
}

//the above function will start the timer and display the remaining seconds

//just realized that it would be better to sepererate the startquiz function and the timer function

function displayQuestion() {
  questionEl.textContent = questions[currentQuestionIndex].question; // displays the question
  var currentQuestion = questions[currentQuestionIndex];
  var choiceEls = [choiceOneEl, choiceTwoEl, choiceThreeEl, choiceFourEl];
  for (var i = 0; i < choiceEls.length; i++) {
    choiceEls[i].textContent = currentQuestion.choices[i];
    choiceEls[i].addEventListener("click", checkAnswer); //adds the event listener to each choice element
  }
  // choicesFeedbackEl.textContent = ""; // this should clear the feedback text
}

// function checkAnswer() {
//     var currentQuestion = questions[currentQuestionIndex];
//     var userChoice = this.textContent;
//     clearInterval(timerInterval); //stops the timer

//     //the above stops the timer but i need to add another if statement so that the timer resets when the user answers the next question
//     if (userChoice === currentQuestion.choices[currentQuestion.answer]) {
//         choicesFeedbackEl.textContent = "Correct!";
//         //add the remaining seconds to the remainingSeconds var

//     } else {
//         choicesFeedbackEl.textContent = "Wrong!";
//         if (secondsLeft > 5) { //this checks if the timer is greater than 5 seconds, then
//             secondsLeft -= 5; // it subtract 5 seconds from the timer
//         } else { // if the timer is less than 5 seconds, then
//         secondsLeft = 0; // this should set the timer to 0
//       }
//     }
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       startTimer(questionTime);
//     displayQuestion();
//     } else {
//       endQuiz(); // this should check if the user has answered all the questions and if they have, it should end the quiz
//     }
//     setTimeout(function() {
//       choicesFeedbackEl.textContent = "";
//     }, 500);
//   }
// the above 3 lines adds a delay to the feedback text so that it shows for only half a second

function checkAnswer() {
  var currentQuestion = questions[currentQuestionIndex];
  var userChoice = this.textContent;

  clearInterval(timerInterval);

  if (userChoice === currentQuestion.choices[currentQuestion.answer]) {
    choicesFeedbackEl.textContent = "Correct!";
  } else {
    choicesFeedbackEl.textContent = "Wrong!";
    if (secondsLeft < 5) {
      remainingSeconds += secondsLeft; // shorthand for remainingSeconds = remainingSeconds + secondsLeft
      secondsLeft = 0;
    } else {
      secondsLeft -= 5; // shorthand for secondsLeft = secondsLeft - 5
      remainingSeconds += secondsLeft;
    }
    // secondsLeft = Math.max(0, secondsLeft - 5); // this should subtract 5 seconds from the timer
  }

  // remainingSeconds += secondsLeft;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    startTimer(20);
    displayQuestion();
  } else {
    endQuiz();
  }

  setTimeout(function () {
    choicesFeedbackEl.textContent = "";
  }, 1000);
}
console.log(remainingSeconds);
// the above 4 lines adds a delay to the feedback text so that it shows for only half a second

// next function should end the quiz and display the highscore container

function endQuiz() {
  // clearInterval(timerInterval);
  questionContainerEl.style.display = "none";
  highscoreContainerEl.style.display = "block";
  highscoreNumberEl.textContent = remainingSeconds;
  console.log(remainingSeconds);
}

// highscoreSubmitBtnEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("hello!");

//   //get user initials and score

//   var initials = highscoreInputInitialsEl.value.trim(); // this is getting only the value property from the element
//   var highScores = JSON.parse(localStorage.getItem("highScores")) || []; // this is saying that if there is nothing in local storage, then it should be an empty array
//   if (initials === length >= 3) {
//     // this only works if initials are empty. maybe make an if else statement if the initials are not empty
//    // var highScores = JSON.parse(localStorage.getItem("highScores")) || []; // put this above
//     highScores.push({
//       initials: initials,
//       score: remainingSeconds,
//     });
//     console.log(initials);

//     localStorage.setItem("highScores", JSON.stringify(highScores));

//     //redirects to highscore page
//     window.location.href = "highscore.html";
//   }
//   console.log(highScores);
// });

// ------------------



// highscoreSubmitBtnEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Is this working down here?");

//   //get user initials and score

//   var initials = highscoreInputInitialsEl.value.trim();

//   var initialsAndScore = {
//     initials: initials,
//     score: remainingSeconds,
//   }


//   //line 497 is an object and bundles both the initals and score. figure out why it is being overwritten
//   // var initialsAndScore = JSON.parse(localStorage.getItem("initialsAndScore")) || [];

//   //get existing data from localStorage
//   //var  = localStorage.getItem("initialsAndScore")) || [];
  
// console.log (initialsAndScore);
// console.log(initials)

//   window.localStorage.setItem("initialsAndScore", JSON.stringify(initialsAndScore));

//   if (initialsAndScore.initials.length !== 3) { // this will actually check if the initials are 3 characters long.
//     alert("Please enter your initials");
//     return;
//   }
//   else {
//     window.localStorage.setItem("initialsAndScore", JSON.stringify(initialsAndScore));
//   }

// });

//one step foward two steps back with this. I can see the localstorage but the initials are not being saved.


//i really want to fix this and call it a night 7-13-2023 7:40pm





//Code is working backwards essentially.

//TODO: still can't figure out the json and setItem stuff. Despite the highscore only displaying the last score, i still can't figure out how to save it to local storage

//TODO: highscore is flawed since it only displays the last score and not the total high score

//now add a function that will display the user's score and initials
// function displayScore() {
//   var scoretext = document.getElementById("highscoreNumberEl");
//   scoretext.textContent = remainingSeconds;
//   console.log(scoretext);
//   console.log(remainingSeconds);
// }

// function endQuiz() {
// clearInterval(timerInterval);

// //hide the question container and display the highscore container
// questionContainerEl.style.display = "none";
// highscoreContainerEl.style.display = "block";

// //the highscoreNumberEl is where the user's score will be displayed (Use this one to display number on screen)
// //the highscoreDisplayEl is the general text that will be displayed

// //display the user's score

// // var scoretext = document.getElementById("highscoreNumberEl");
// // scoretext.textContent = remainingSeconds;
// // console.log(scoretext);
// // console.log(remainingSeconds);

// // highScoreNumberEl.textContent = remainingSeconds; // this will display the user's score from the remainingSeconds var

// //now add initials. use the highscoreInputInitialsEl var to store the user's initials

// // var userInitials = highscoreInputInitialsEl.value; // this will store the user's initials in a var

// //make the butotn click event to store the user's initials and score in local storage
// //the highscoreSubmitBtnEl is the html element that the user will click to submit their initials and score

// highscoreSubmitBtnEl.addEventListener("click", function(event) {
//   event.preventDefault();

//   var newScore = {
//     initials: highscoreInputInitialsEl.value.substring(0, 3), // only store the first three characters of the initials
//     score: remainingSeconds
//   };

//   localStorage.setItem("newScore", JSON.stringify(newScore));
//   renderScores();
//   event.preventDefault();
// });

// }

// function renderScores() {
//   var lastScore = JSON.parse(localStorage.getItem("newScore"));
//   if (lastScore !== null) {
//     document.querySelector("#highscoreDisplayEl").textContent = lastScore.initials + " " + lastScore.score;
//   }
// }

//TODO: scores are not being stored in local storage. I need to fix this

//TODO: still not working.

//TODO: my timer logic is flawd. the timer keeps going into the negatives and does not reset after the user answers a question. I need to fix this

//lines 382-389 display the question and answer choices, but does not check if the user's answer is correct or not. It also does not display the next question when the user answers the current question

//the above will display the question and the answer choices. it was originally four lines but I condensed it into a for loop

//The four processes of making a new element and appending it to the DOM
// 1. create an Element and store it in an Element
// 2. add attributes to the Element
// 3. give the Element text
// 4. append the Element to the DOM/page

//bottom event listener
quizIntroBtnEl.addEventListener("click", startQuiz);

// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   // Get the user's initials and score
//   var initials = initialsInputEl.value.trim();
//   if (initials !== "") {
//     var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//     highScores.push({
//       initials: initials,
//       score: userScore,
//     });
//     localStorage.setItem("highScores", JSON.stringify(highScores));
//     // Redirect to high scores page
//     window.location.href = "highscores.html";
//   }

//TODO 7-13-2023: I just realized that the scoring system does work but only for array 0. Why is only working for the first mutiple choice option and not the others?










// the code below works but it doesnt add a new key in localstorage for each new initialsAndScore

highscoreSubmitBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Is this working down here?");

  //get user initials and score
  var initials = highscoreInputInitialsEl.value.trim();
  var score = remainingSeconds;

  //retrieve existing data from localStorage
  var initialsAndScores = JSON.parse(localStorage.getItem("initialsAndScores")) || [];

  //append new data to existing data
  initialsAndScores.push({ initials: initials, score: score }); // this seems to  be pushing a new object into the array

 
  //store updated data back into localStorage
  // localStorage.setItem("initialsAndScores", JSON.stringify(initialsAndScores));

  if (initials.length !== 3) {
    alert("Please enter your initials");
    return;
  }else {
      window.localStorage.setItem("initialsAndScores", JSON.stringify(initialsAndScores));
  }
  console.log(initialsAndScores);

  window.location.href = "highscore.html";
  
});