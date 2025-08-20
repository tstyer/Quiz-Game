// First, collect the DOM elements and assign to vairables to manipulate in the future.

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Questions: Created in an array because a quiz is a LIST of questions. An array also makes it easy to shuffle through. 
//The primary reason for this project, is to practice + demonstrate the use of arrays and objects. 

// Quiz questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];


// QUIZ VARIABLES
let currentQuestionIndex = 0;    // Start the beginning, we start with the first vallue in the array = 0
let score = 0;                   // Score is zero at the beginning. 
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length // The maximum number that can fill the question span is the total in the array. 
maxScoreSpan.textContent = quizQuestions.length       // Same situation for the maximum score. 

// EVENT LISTENERS
startButton.addEventListener("click", startQuiz);     // Upon clicking the start quick button
restartButton.addEventListener("click", restartQuiz);


// FUNCTIONS
function startButton() {
    console.log("Quiz Started");
    currentQuestionIndex = 0;     // Set to zero as we are just starting the quiz. 
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active"); // When we start the quiz, we want this screen to deactivate. 
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    // Reset the state
    answersDisabled = false; // This means that the answers will not be disabled so we can see them. 

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1; // Because the index is always 1 lower than the actual. 

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("answer-btn");

      // What is dataset? For this time, it will be a property of the button element. You use data set to store data. 
      button.dataset.correct = answer.correct;

      button.addEventListener("click", selectAnswer);

      answersContainer.appendChild(button);
    });
}

function selectAnswer() {
  if(answersDisabled) return; // This stops and doesn't return anything if answerDisabled = true. 

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === true;

  array.from(answersContainer.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  
  if(isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // Check if there are more questions or if quiz is over. 
    if(currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000)
}

function showResults() {
  
}

function restartQuiz() {
    console.log(Quiz Restart)
}



