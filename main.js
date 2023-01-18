
let currentQuestion = 0;

let questions = [
    {
      question: "What is the correct syntax for declaring a variable in JavaScript?",
      options: [
        "var x;",
        "int x;",
        "let x;",
        "const x;"
      ],
      answer: "var x;"
    },
    {
      question: "What is the purpose of the `document.getElementById()` method?",
      options: [
        "To return the first element with a specified ID",
        "To change the text content of an element",
        "To create a new element in the document",
        "To return the value of a specified attribute"
      ],
      answer: "To return the first element with a specified ID"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: [
        "String",
        "Number",
        "Array",
        "File"
      ],
      answer: "File"
    },
    {
      question: "What does the following code snippet do?",
      question_code: "let arr = [1, 2, 3, 4]; let newArr = arr.map(function(x) { return x * 2; });",
      options: [
        "It declares an array and multiplies each element by 2",
        "It declares an array and sorts the elements in descending order",
        "It declares an array and adds all the elements",
        "It declares an array and removes all the elements"
      ],
      answer: "It declares an array and multiplies each element by 2"
    }
  ];

  let timeLimit = 60;

  let intervalId;

function startQuiz() {
  let time = timeLimit;
  document.getElementById("time").innerHTML = time;
  intervalId = setInterval(function() {
    time--;
    document.getElementById("time").innerHTML = time;
    if (time === 0) {
      clearInterval(intervalId);
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question-title").innerHTML = question.question;
    let choices = "";
    for (let i = 0; i < question.options.length; i++) {
      choices += `<button onclick="checkAnswer('${question.options[i]}')">${question.options[i]}</button>`;
    }
    document.getElementById("choices").innerHTML = choices;
  }

  function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
      document.getElementById("feedback").innerHTML = "Correct!";
      currentQuestion++;
      if (currentQuestion === questions.length) {
        endQuiz();
      } else {
        displayQuestion();
      }
    } else {
      document.getElementById("feedback").innerHTML = "Wrong!";
      timeLimit -= 10;
      // Using the setInterval function to update the time left
      clearInterval(intervalId);
      startQuiz();
    }
  }
  