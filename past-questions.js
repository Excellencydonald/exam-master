
/* EXAM MASTER JUNIOR
   Past Questions Library
   Original practice questions; not copied from paid exam papers.
*/
(function () {
  "use strict";

  const questionBank = {
    "JSS 1": {
      "Mathematics": {
        objective: [
          {
            question: "What is the place value of 7 in 3,752?",
            options: ["7", "70", "700", "7,000"],
            answer: 2,
            explanation: "The digit 7 is in the hundreds position."
          },
          {
            question: "Which of these numbers is a prime number?",
            options: ["9", "15", "17", "21"],
            answer: 2,
            explanation: "17 has exactly two factors: 1 and 17."
          },
          {
            question: "Find the HCF of 12 and 18.",
            options: ["2", "3", "6", "9"],
            answer: 2,
            explanation: "The highest common factor of 12 and 18 is 6."
          },
          {
            question: "Calculate 1/2 + 1/4.",
            options: ["1/4", "2/6", "3/4", "1"],
            answer: 2,
            explanation: "1/2 = 2/4. Therefore, 2/4 + 1/4 = 3/4."
          },
          {
            question: "What is 0.5 expressed as a fraction?",
            options: ["1/4", "1/2", "3/4", "1/5"],
            answer: 1,
            explanation: "0.5 = 5/10 = 1/2."
          }
        ],
        theory: [
          {
            question: "Explain what a prime number is and give three examples.",
            answer: "A prime number is a whole number greater than 1 that has exactly two factors: 1 and itself. Examples include 2, 3 and 5."
          },
          {
            question: "Find the HCF of 12 and 18. Show your working.",
            answer: "Factors of 12 are 1, 2, 3, 4, 6 and 12. Factors of 18 are 1, 2, 3, 6, 9 and 18. The highest common factor is 6."
          }
        ]
      },

      "English Studies": {
        objective: [
          {
            question: "Choose the noun in this sentence: 'The girl reads a book.'",
            options: ["Reads", "The", "Girl", "A"],
            answer: 2,
            explanation: "Girl is a noun because it names a person."
          },
          {
            question: "Which word is an adjective?",
            options: ["Beautiful", "Quickly", "Run", "They"],
            answer: 0,
            explanation: "Beautiful describes a noun, so it is an adjective."
          },
          {
            question: "Choose the correct plural of 'child'.",
            options: ["Childs", "Children", "Childes", "Childrens"],
            answer: 1,
            explanation: "The correct plural form is children."
          }
        ],
        theory: [
          {
            question: "Define a noun and give four examples.",
            answer: "A noun is a word used to name a person, place, animal or thing. Examples: teacher, Lagos, goat and table."
          },
          {
            question: "Write three sentences containing adjectives.",
            answer: "Examples: The beautiful girl sings. I bought a red bag. The tall boy is kind."
          }
        ]
      }
    },

    "JSS 2": {
      "Mathematics": {
        objective: [
          {
            question: "Solve: 3x = 18.",
            options: ["3", "6", "9", "12"],
            answer: 1,
            explanation: "Divide both sides by 3. x = 18 ÷ 3 = 6."
          },
          {
            question: "What is 25% of 200?",
            options: ["25", "40", "50", "75"],
            answer: 2,
            explanation: "25/100 × 200 = 50."
          }
        ],
        theory: [
          {
            question: "Solve 2x + 4 = 14, showing your working.",
            answer: "2x + 4 = 14. Subtract 4 from both sides: 2x = 10. Divide by 2: x = 5."
          }
        ]
      }
    },

    "JSS 3": {
      "Mathematics": {
        objective: [
          {
            question: "Solve: 2x + 6 = 16.",
            options: ["3", "4", "5", "6"],
            answer: 2,
            explanation: "Subtract 6: 2x = 10. Divide by 2: x = 5."
          },
          {
            question: "Express 0.75 as a percentage.",
            options: ["7.5%", "25%", "50%", "75%"],
            answer: 3,
            explanation: "Multiply 0.75 by 100 to get 75%."
          }
        ],
        theory: [
          {
            question: "Solve 3x - 5 = 16, showing your working.",
            answer: "Add 5 to both sides: 3x = 21. Divide by 3: x = 7."
          }
        ]
      }
    }
  };

  function getQuestions(className, subject, type) {
    return questionBank[className]?.[subject]?.[type] || [];
  }

  function saveResult(result) {
    const key = "examMasterJuniorPastHistory";
    let history = [];

    try {
      history = JSON.parse(localStorage.getItem(key) || "[]");
      if (!Array.isArray(history)) history = [];
    } catch (error) {
      history = [];
    }

    history.push({
      ...result,
      date: new Date().toISOString()
    });

    localStorage.setItem(key, JSON.stringify(history));
  }

  function getHistory() {
    try {
      const history = JSON.parse(
        localStorage.getItem("examMasterJuniorPastHistory") || "[]"
      );
      return Array.isArray(history) ? history : [];
    } catch (error) {
      return [];
    }
  }

  window.EXAM_MASTER_PAST = {
    getQuestions,
    saveResult,
    getHistory
  };
})();
