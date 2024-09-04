// Creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
  {
    question: "Lewis is currently studying:",
    answers: {
      a: "Psychology",
      b: "Human-computer interaction",
      c: "Interactive programming languages",
      d: "Human factors"
    },
    correctAnswer: "d"
  },
  {
    question: "Lewis works closely with:",
    answers: {
      a: "Undergraduate Students",
      b: "Honours students",
      c: "Higher Degree Research Students",
      d: "All of the above"
    },
    correctAnswer: "c"
  },
  {
    question: "His web design and development skills are:",
    answers: {
      a: "Java",
      b: "CSS",
      c: "HTML",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Lewis is super passionate about:",
    answers: {
      a: "Science",
      b: "Music",
      c: "Human-centred design",
      d: "Food"
    },
    correctAnswer: "d"
  }
];

function buildQuiz() {
  // Variable to store the HTML output
  const output = [];
  for (let i = 0; i < quizQuestions.length; i++) {
    // Store list of answer choices
    const answers = [];
    // For each available answer to this question add an HTML radio button
    for (letter in quizQuestions[i].answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${i}" value="${letter}">
          ${letter}: ${quizQuestions[i].answers[letter]}
        </label>`
      );
    }
    // Add this question and its answers to the output
    output.push(
      `<div class="question">${quizQuestions[i].question}</div>
       <div class="answers">${answers.join('')}</div>`
    );
  }
  // Combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // Gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // Keep track of user's answers
  let numCorrect = 0;

  // For each question, find the selected answer
  for (let i = 0; i < quizQuestions.length; i++) {
    const userAnswer = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;

    // If the answer is correct
    if (userAnswer === quizQuestions[i].correctAnswer) {
      numCorrect++;
      // Color the answers green
      answerContainers[i].style.color = 'lightgreen';
    } else {
      // If the answer is wrong or blank, color the answers red
      answerContainers[i].style.color = 'red';
    }
  }

  // Show number of correct answers out of total
  if (numCorrect === 0) {
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
  } else if (numCorrect === 1) {
    resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
  } else if (numCorrect === 2) {
    resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
  } else if (numCorrect === 3) {
    resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Lewis pretty well!";
  } else if (numCorrect === 4) {
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Lewis so well!";
  }
}

// Load quiz
buildQuiz();

// On submit, show results
submitButton.onclick = function () {
  showResults();
};
