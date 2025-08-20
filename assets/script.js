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

const quizQuestions [    // Within the parent array, there will be a list of objects (questions and answers)
    {
        question: "What is the capital of France?",
        Answers: [          // The answers themselves is another aray with a list of objects.
            
        ]
    }
]


// Quiz Variables 
let currentQuestionIndex = 0;    // Start the beginning, we start with the first vallue in the array = 0
let score = 0;                   // Score is zero at the beginning. 
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length // The maximum number that can fill the question span is the total in the array. 
maxScoreSpan.textContent = quizQuestions.length       // Same situation for the maximum score. 