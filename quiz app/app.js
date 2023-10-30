const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is 7 x 8?",
      options: ["45", "52", "56", "64"],
      answer: "56",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionText = document.getElementById("question-text");
  const optionsList = document.getElementById("options-list");
  const nextButton = document.getElementById("next-button");
  const resultText = document.getElementById("result");
  const scoreSpan = document.getElementById("score");
  
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
  
    optionsList.innerHTML = "";
    question.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => checkAnswer(option));
      optionsList.appendChild(li);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionText.textContent = "Quiz completed!";
    optionsList.innerHTML = "";
    nextButton.style.display = "none";
    resultText.textContent = "Your score:";
    scoreSpan.textContent = score + " out of " + questions.length;
  }
  
  nextButton.addEventListener("click", loadQuestion);
  
  // Initial load
  loadQuestion();
  