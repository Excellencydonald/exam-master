
(function () {
  "use strict";

  const questions = [
    {
      q: "What is the place value of 7 in 3,752?",
      options: ["7", "70", "700", "7,000"],
      answer: 2,
      explanation: "7 is in the hundreds position. Its value is 700."
    },
    {
      q: "Which of these numbers is a factor of 24?",
      options: ["5", "7", "8", "11"],
      answer: 2,
      explanation: "24 divided by 8 equals 3. Therefore, 8 is a factor."
    },
    {
      q: "Which of these is a prime number?",
      options: ["9", "15", "17", "21"],
      answer: 2,
      explanation: "17 has exactly two factors: 1 and 17."
    },
    {
      q: "Find the HCF of 12 and 18.",
      options: ["2", "3", "6", "9"],
      answer: 2,
      explanation: "The highest common factor of 12 and 18 is 6."
    },
    {
      q: "Find the LCM of 4 and 6.",
      options: ["8", "10", "12", "24"],
      answer: 2,
      explanation: "12 is the smallest number divisible by both 4 and 6."
    },
    {
      q: "Calculate 1/2 + 1/4.",
      options: ["1/4", "2/6", "3/4", "1"],
      answer: 2,
      explanation: "1/2 equals 2/4. Therefore, 2/4 + 1/4 = 3/4."
    },
    {
      q: "Which fraction is equivalent to 2/3?",
      options: ["3/5", "4/6", "2/5", "5/6"],
      answer: 1,
      explanation: "Multiply the numerator and denominator by 2 to get 4/6."
    },
    {
      q: "Calculate 3/4 - 1/4.",
      options: ["1/4", "1/2", "2/3", "3/8"],
      answer: 1,
      explanation: "3/4 - 1/4 = 2/4 = 1/2."
    },
    {
      q: "Calculate 1/2 × 1/3.",
      options: ["1/5", "1/6", "2/5", "2/6"],
      answer: 1,
      explanation: "Multiply the numerators and denominators to get 1/6."
    },
    {
      q: "What is the value of 7 in 3.75?",
      options: ["7", "0.7", "0.07", "70"],
      answer: 1,
      explanation: "7 is in the tenths position. Its value is 0.7."
    },
    {
      q: "Calculate 2.5 + 1.3.",
      options: ["3.5", "3.7", "3.8", "4.0"],
      answer: 2,
      explanation: "2.5 + 1.3 = 3.8."
    },
    {
      q: "Calculate 5.6 - 2.4.",
      options: ["2.2", "3.0", "3.2", "3.4"],
      answer: 2,
      explanation: "5.6 - 2.4 = 3.2."
    }
  ];

  const $ = id => document.getElementById(id);

  let current = 0;
  let score = 0;
  let selected = null;
  let submitted = false;
  let review = [];

  const historyKey = "examMasterJuniorBAEHistory";

  function show(id, visible) {
    const element = $(id);
    if (element) element.classList.toggle("hidden", !visible);
  }

  function getHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(historyKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  }

  function renderHistory() {
    const container = $("assessmentHistory");
    if (!container) return;

    container.replaceChildren();

    const history = getHistory();

    if (!history.length) {
      container.textContent = "No assessment results recorded yet.";
      return;
    }

    history.forEach(item => {
      const line = document.createElement("p");
      line.textContent =
        `${item.date} — ${item.className} ${item.term} ` +
        `${item.subject}: ${item.score}/${item.total}`;
      container.appendChild(line);
    });
  }

  function startBAE() {
    const className = $("classSelect")?.value || "";
    const term = $("termSelect")?.value || "";
    const subject = $("subjectSelect")?.value || "";

    const details = $("baeDetails");

    if (
      className !== "JSS 1" ||
      term !== "First Term" ||
      subject.toLowerCase() !== "mathematics"
    ) {
      if (details) {
        details.textContent =
          "BAE questions are currently available for JSS 1, First Term, Mathematics only. More subjects and classes will be added.";
      }
      show("baeDetails", true);
      return;
    }

    current = 0;
    score = 0;
    selected = null;
    submitted = false;
    review = [];

    show("baeSetup", false);
    show("baeResult", false);
    show("baeDetails", false);
    show("baeQuiz", true);

    renderQuestion();
  }

  function renderQuestion() {
    const question = questions[current];

    selected = null;
    submitted = false;

    $("baeQuestion").textContent =
      `Question ${current + 1}: ${question.q}`;

    $("baeProgress").textContent =
      `${current + 1} of ${questions.length}`;

    $("baeProgressBar").style.width =
      `${((current + 1) / questions.length) * 100}%`;

    const options = $("baeOptions");
    options.replaceChildren();

    question.options.forEach((option, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "bae-option";
      button.textContent =
        `${String.fromCharCode(65 + index)}. ${option}`;

      button.addEventListener("click", function () {
        if (submitted) return;

        selected = index;

        [...options.children].forEach((item, i) => {
          item.classList.toggle("selected", i === index);
        });

        $("baeSubmit").disabled = false;
      });

      options.appendChild(button);
    });

    $("baeFeedback").textContent = "";
    show("baeFeedback", false);
    show("baeNext", false);

    $("baeSubmit").disabled = true;
    $("baeSubmit").textContent = "Submit Answer";
  }

  function submitAnswer() {
    if (submitted || selected === null) return;

    submitted = true;

    const question = questions[current];
    const correct = selected === question.answer;

    if (correct) score++;

    review.push({
      question: question.q,
      chosen: question.options[selected],
      correct: question.options[question.answer],
      explanation: question.explanation,
      isCorrect: correct
    });

    [...$("baeOptions").children].forEach((button, index) => {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      } else if (index === selected) {
        button.classList.add("incorrect");
      }
    });

    $("baeFeedback").textContent =
      `${correct ? "Correct!" : "Incorrect."} ${question.explanation}`;

    show("baeFeedback", true);

    $("baeSubmit").disabled = true;
    show("baeSubmit", false);

    $("baeNext").textContent =
      current === questions.length - 1 ? "See Results" : "Next Question";

    show("baeNext", true);
  }

  function nextQuestion() {
    if (!submitted) return;

    current++;

    if (current < questions.length) {
      renderQuestion();
    } else {
      finishBAE();
    }
  }

  function finishBAE() {
    show("baeQuiz", false);
    show("baeResult", true);

    $("baeScore").textContent =
      `${score} / ${questions.length}`;

    $("baeSummary").textContent =
      `You answered ${score} correctly out of ${questions.length}.`;

    const history = getHistory();

    history.unshift({
      className: "JSS 1",
      term: "First Term",
      subject: "Mathematics",
      score,
      total: questions.length,
      date: new Date().toLocaleString()
    });

    try {
      localStorage.setItem(
        historyKey,
        JSON.stringify(history.slice(0, 50))
      );
    } catch (error) {
      console.error("Could not save BAE result:", error);
    }

    renderHistory();
    renderReview();
  }

  function renderReview() {
    const container = $("baeReview");
    container.replaceChildren();

    review.forEach((item, index) => {
      const block = document.createElement("div");
      const heading = document.createElement("h4");
      const answer = document.createElement("p");
      const explanation = document.createElement("p");

      heading.textContent = `${index + 1}. ${item.question}`;

      answer.textContent =
        `Your answer: ${item.chosen}. ` +
        `Correct answer: ${item.correct}. ` +
        (item.isCorrect ? "Correct." : "Incorrect.");

      explanation.textContent = item.explanation;

      block.append(heading, answer, explanation);
      container.appendChild(block);
    });
  }

  function restartBAE() {
    show("baeResult", false);
    show("baeSetup", true);
    show("baeDetails", false);
    show("baeQuiz", false);
  }

  function init() {
    $("baeStart")?.addEventListener("click", startBAE);
    $("baeSubmit")?.addEventListener("click", submitAnswer);
    $("baeNext")?.addEventListener("click", nextQuestion);
    $("baeRestart")?.addEventListener("click", restartBAE);

    renderHistory();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
