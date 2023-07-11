//global vars






// quiz questions ---- for reference: [a=0, b=1, c=2, d=3,] ----
var questions = [
    {
      question: "What is the correct syntax for declaring a variable in JavaScript?",
      choices: [
        "a) var x;",
        "b) x = 5;",
        "c) variable x;",
        "d) int x;"
      ],
      answer: 0
    },
    {
      question: "How do you write \"Hello, World!\" in an alert box?",
      choices: [
        "a) console.log(\"Hello, World!\");",
        "b) alertBox(\"Hello, World!\");",
        "c) alert(\"Hello, World!\");",
        "d) document.write(\"Hello, World!\");"
      ],
      answer: 2
    },
    {
      question: "What is the correct way to write a JavaScript comment?",
      choices: [
        "a)",
        "b) //This is a comment",
        "c) /This is a comment/",
        "d) \\This is a comment"
      ],
      answer: 1
    },
    {
      question: "How do you declare a function in JavaScript?",
      choices: [
        "a) function myFunction()",
        "b) function = myFunction()",
        "c) var myFunction = function()",
        "d) def myFunction()"
      ],
      answer: 0
    },
    {
      question: "How do you call a function named \"myFunction\"?",
      choices: [
        "a) call myFunction()",
        "b) myFunction()",
        "c) execute myFunction()",
        "d) run myFunction()"
      ],
      answer: 1
    },
    {
      question: "Which operator is used to assign a value to a variable in JavaScript?",
      choices: [
        "a) =",
        "b) ==",
        "c) :=",
        "d) =>"
      ],
      answer: 0
    },
    {
      question: "What is the correct way to write a conditional statement in JavaScript?",
      choices: [
        "a) if x = 5 then",
        "b) if x == 5",
        "c) if (x = 5)",
        "d) if (x == 5)"
      ],
      answer: 3
    },
    {
      question: "How do you concatenate two strings in JavaScript?",
      choices: [
        "a) string1 + string2",
        "b) string1 . string2",
        "c) string1 & string2",
        "d) string1 ~ string2"
      ],
      answer: 0
    },
    {
      question: "How do you write a for loop in JavaScript?",
      choices: [
        "a) loop(x=0; x<5; x++)",
        "b) for (x=0; x<5; x++)",
        "c) for loop(x=0; x<5; x++)",
        "d) iterate(x=0; x<5; x++)"
      ],
      answer: 1
    },
    {
      question: "What function is used to convert a string to a number in JavaScript?",
      choices: [
        "a) convertStringToNumber()",
        "b) parseInt()",
        "c) stringToNumber()",
        "d) toNumber()"
      ],
      answer: 1
    },
    {
        question: "What is the output of the following code: console.log(typeof 'hello');",
        choices: [
          "undefined",
          "number",
          "string",
          "boolean",
        ],
        answer: 2
      },
      {
        question: "How do you convert a string to uppercase in JavaScript?",
        choices: [
          "toLowerCase()",
          "toUpperCase()",
          "toUpperCasecase()",
          "toUppercase()",
        ],
        answer: 1
      },
      {
        question: "Which method is used to remove the last item from an array in JavaScript?",
        choices: [
          "slice()",
          "pop()",
          "remove()",
          "splice()",
        ],
        answer: 1
      },
      {
        question: "What does the '!' operator do in JavaScript?",
        choices: [
          "Logical OR",
          "Logical XOR",
          "Logical AND",
          "Logical NOT",
        ],
        answer: 3
      },
      {
        question: "Which built-in method returns the length of a string in JavaScript?",
        choices: [
          "count()",
          "length()",
          "size()",
          "getSize()",
        ],
        answer: 1
      },
      {
        question: "What is the output of the following code: console.log(5 + '5');",
        choices: [
          "10",
          "Error",
          "25",
          "55",
        ],
        answer: 3
      },
      {
        question: "Which method is used to add new elements to the end of an array in JavaScript?",
        choices: [
          "concat()",
          "add()",
          "append()",
          "push()",
        ],
        answer: 3
      },
      {
        question: "What is the output of the following code: console.log(Number('10') + 5);",
        choices: [
          "Error",
          "NaN",
          "105",
          "15",
        ],
        answer: 3
      },
      {
        question: "Which operator is used to check if two values are equal and of the same type in JavaScript?",
        choices: [
          "==",
          "=",
          "===",
          "!=",
        ],
        answer: 2
      },
      {
        question: "Which event is triggered when the user clicks on an HTML element?",
        choices: [
          "onchange",
          "onload",
          "onsubmit",
          "onclick",
        ],
        answer: 3
      },
      {
        question: "Which operator is used to assign a default value to a variable if the current value is null or undefined?", 
        choices: [
            "||=",
            "??=",
            "??",
            "||",
        ],
        answer: 2
      },
      {
        question: "What is the output of the following code: console.log(typeof 10);",
        choices: [
          "undefined",
          "number",
          "string",
          "boolean",
        ],
        answer: 1
      },
      {
        question: "How do you convert a string to lowercase in JavaScript?",
        choices: [
          "toLowerCase()",
          "toUpperCase()",
          "toUpperCasecase()",
          "toUppercase()",
        ],
        answer: 0
      },
      {
        question: "Which method is used to remove the first item from an array in JavaScript?",
        choices: [
          "slice()",
          "shift()",
          "remove()",
          "splice()",
        ],
        answer: 1
      },
      {
        question: "What does the '&&' operator do in JavaScript?",
        choices: [
          "Logical OR",
          "Logical XOR",
          "Logical AND",
          "Logical NOT",
        ],
        answer: 2
      },
      {
        question: "Which built-in method removes the last element from an array and returns it?",
        choices: [
          "delete()",
          "pop()",
          "remove()",
          "splice()",
        ],
        answer: 1
      },
      {
        question: "What is the output of the following code: console.log('hello'.length);",
        choices: [
          "6",
          "Error",
          "5",
          "0",
        ],
        answer: 2
      },
      {
        question: "Which method is used to add new elements to the beginning of an array in JavaScript?",
        choices: [
          "concat()",
          "add()",
          "append()",
          "unshift()",
        ],
        answer: 3
      },
  ];
  


  //DOM elements
