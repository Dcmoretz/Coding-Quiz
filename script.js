// Define your questions and answers as an array of objects
const questions = [
    {
      question: "Question 1",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 2"
    },
    {
      question: "Question 2",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 3"
    },
    // Add more questions as needed
  ];
  
  // Define variables to track the state of the quiz
  let currentQuestionIndex = 0;
  let time = 60; // Total time in seconds
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start screen and show the question screen
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("question-screen").classList.remove("hide");
    // Start the timer
    timerInterval = setInterval(function() {
      time--;
      // Update the timer display
      // TODO: Update the HTML element to display the remaining time
      if (time <= 0) {
        endQuiz();
      }
    }, 1000);
    // Display the first question
    showQuestion();
  }
  
  // Function to display a question and its choices
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    // TODO: Update the HTML elements to display the current question and its choices
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.answer) {
      // TODO: Handle the correct answer
    } else {
      // TODO: Handle the incorrect answer (subtract time, etc.)
    }
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    // Hide the question screen and show the end screen
    document.getElementById("question-screen").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    // TODO: Handle the submission of initials and score
  }
  
  // Add event listener to start the quiz when the button is clicked
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  // Add event listener to check the answer when a choice is clicked
  document.getElementById("choices").addEventListener("click", function(event) {
    const selectedChoice = event.target.textContent;
    checkAnswer(selectedChoice);
  });
  