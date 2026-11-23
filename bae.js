
(function () {
  "use strict";

  const questions = [
    {
      q: "What is the place value of 7 in 3,752?",
      options: ["7", "70", "700", "7,000"],
      answer: 2,
      explanation: "The digit 7 is in the hundreds position, so its value is 700."
    },
    {
      q: "Which of these numbers is a factor of 24?",
      options: ["5", "7", "8", "11"],
      answer: 2,
      explanation: "24 ÷ 8 = 3, so 8 is a factor of 24."
    },
    {
      q: "Which of these is a prime number?",
      options: ["9", "15", "17", "21"],
      answer: 2,
      explanation: "17 has only two factors: 1 and 17."
    },
    {
      q: "Find the HCF of 12 and 18.",
      options: ["2", "3", "6", "9"],
      answer: 2,
      explanation: "The common factors are 1, 2, 3 and 6. The highest is 6."
    },
    {
      q: "Find the LCM of 4 and 6.",
      options: ["8", "10", "12", "24"],
      answer: 2,
      explanation: "12 is the smallest number divisible by both 4 and 6."
    },
    {
      q: "What is 1/2 + 1/4?",
      options: ["1/4", "2/6", "3/4", "1"],
      answer: 2,
      explanation: "1/2 = 2/4. Therefore, 2/4 + 1/4 = 3/4."
    },
    {
      q: "Which fraction is equivalent to 2/3?",
      options: ["3/5", "4/6", "2/5", "5/6"],
      answer: 1,
      explanation: "Multiplying the numerator and denominator of 2/3 by 2 gives 4/6."
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
      explanation: "Multiply the numerators and denominators: 1 × 1 over 2 × 3 = 1/6."
    },
    {
      q: "What is the value of 7 in 3.75?",
      options: ["7", "0.7", "0.07", "70"],
      answer: 1,
      explanation: "The 7 is in the tenths position, so its value is 0.7."
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

  const elements = [
    "baeStart", "baeSetup", "baeQuiz", "baeDetails",
    "baeProgressBar", "baeProgress", "baeQuestion",
    "baeOptions", "baeFeedback", "baeNext", "baeResult",
    "baeScore", "baeSummary", "baeReview", "baeRestart",
    "classSelect", "termSelect", "subjectSelect",
    "assessmentHistory"
  ];

  function show(id, visible) {
    const element = $(id);
    if (element) element.hidden = !visible;
  }

  let current = 0;
  let score = 0;
  let selected = null;
  let submitted = false;
  let review = [];

  function startBAE() {
    const className = $("classSelect")?.value || "";
    const term = $("termSelect")?.value || "";
    const subject = $("subjectSelect")?.value || "";

    if (
      !className.toLowerCase().includes("jss 1") ||
      !term.toLowerCase().includes("first") ||
      subject.toLowerCase() !== "mathematics"
    ) {
      const details = $("baeDetails");
      if (details) {
        details.textContent =
          "BAE questions are currently available for JSS 1, First Term, Mathematics only. More question banks will be added.";
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
    if (!question) return;

    selected = null;
    submitted = false;

    $("baeQuestion").textContent =
      `Question ${current + 1}: ${question.q}`;

    $("baeProgress").textContent =
      `${current + 1} of ${questions.length}`;

    $("baeProgressBar").style.width =
      `${((current + 1) / questions.length) * 100}%`;

    $("baeOptions").replaceChildren();

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent =
        `${String.fromCharCode(65 + index)}. ${option}`;

      button.addEventListener("click", () => {
        if (submitted) return;

        selected = index;

        [...$("baeOptions").children].forEach((item, i) => {
          item.setAttribute("aria-pressed", String(i === index));
          item.classList.toggle("selected", i === index);
        });
      });

      $("baeOptions").appendChild(button);
    });

    $("baeFeedback").textContent = "";
    $("baeFeedback").hidden = true;
    show("baeNext", false);
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

    const feedback = $("baeFeedback");
    feedback.textContent =
      `${correct ? "Correct!" : "Not quite."} ${question.explanation}`;
    feedback.hidden = false;

    const next = $("baeNext");
    next.textContent =
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

    const history = JSON.parse(
      localStorage.getItem("examMasterJuniorBAEHistory") || "[]"
    );

    history.unshift({
      className: "JSS 1",
      term: "First Term",
      subject: "Mathematics",
      score,
      total: questions.length,
      date: new Date().toLocaleString()
    });

    localStorage.setItem(
      "examMasterJuniorBAEHistory",
      JSON.stringify(history.slice(0, 50))
    );

    renderHistory();
    renderReview();
  }

  function renderReview() {
    const container = $("baeReview");
    if (!container) return;

    container.replaceChildren();

    review.forEach((item, index) => {
      const block = document.createElement("div");
      const heading = document.createElement("h4");
      const answer = document.createElement("p");
      const explanation = document.createElement("p");

      heading.textContent =
        `${index + 1}. ${item.question}`;

      answer.textContent =
        `Your answer: ${item.chosen}. Correct answer: ${item.correct}. ` +
        (item.isCorrect ? "Correct." : "Incorrect.");

      explanation.textContent = item.explanation;

      block.append(heading, answer, explanation);
      container.appendChild(block);
    });
  }

  function renderHistory() {
    const container = $("assessmentHistory");
    if (!container) return;

    const history = JSON.parse(
      localStorage.getItem("examMasterJuniorBAEHistory") || "[]"
    );

    container.replaceChildren();

    history.forEach(item => {
      const line = document.createElement("p");
      line.textContent =
        `${item.date} — ${item.className} ${item.term} ${item.subject}: ` +
        `${item.score}/${item.total}`;
      container.appendChild(line);
    });
  }

  function restartBAE() {
    show("baeResult", false);
    show("baeSetup", true);
    show("baeDetails", false);
  }

  function init() {
    if ($("baeStart")) $("baeStart").addEventListener("click", startBAE);
    if ($("baeNext")) $("baeNext").addEventListener("click", () => {
      if (!submitted) submitAnswer();
      else nextQuestion();
    });
    if ($("baeRestart")) $("baeRestart").addEventListener("click", restartBAE);

    renderHistory();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
