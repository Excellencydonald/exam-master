
/* =====================================================
   EXAM MASTER JUNIOR SECONDARY SCHOOL
   CENTRAL LESSON AND ASSESSMENT LIBRARY
   No backend required.
===================================================== */

window.EXAM_MASTER = window.EXAM_MASTER || {};

window.EXAM_MASTER.library = {

  appName: "EXAM MASTER JUNIOR SECONDARY SCHOOL",

  classes: ["JSS 1", "JSS 2", "JSS 3"],

  terms: ["First Term", "Second Term", "Third Term"],

  subjects: [
    "English Studies",
    "Mathematics",
    "Nigerian Languages",
    "Intermediate Science",
    "Physical and Health Education",
    "Digital Technologies",
    "CRS / IRS",
    "Nigerian History",
    "Social and Citizenship Studies",
    "Cultural and Creative Arts",
    "Business Studies",
    "Livestock Farming",
    "French",
    "Arabic"
  ],

  examinations: {
    classCBT: true,
    basicAssessmentExercises: true,
    becePreparation: {
      enabled: true,
      class: "JSS 3"
    },
    excludedExaminations: [
      "WAEC",
      "NECO",
      "GCE",
      "UTME",
      "JAMB"
    ]
  },

  lessonNotes: {
    "JSS 1": {
      "First Term": {
        "Mathematics": [

          {
            week: 1,
            title: "Number Bases and Place Value",

            objectives: [
              "Explain number bases.",
              "Identify place values.",
              "Recognise digits used in different bases."
            ],

            introduction:
              "A number base describes the number of different digits used in a number system. The decimal system commonly used in everyday life is base ten.",

            sections: [
              {
                heading: "The decimal number system",
                content:
                  "Base ten uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. After 9, we write 10."
              },
              {
                heading: "Place value",
                content:
                  "The position of a digit determines its value. From right to left, the positions are ones, tens, hundreds and thousands."
              },
              {
                heading: "Other number bases",
                content:
                  "Base two uses 0 and 1. Base five uses 0, 1, 2, 3 and 4. Base eight uses 0 through 7. A digit must always be smaller than its base."
              }
            ],

            examples: [
              {
                question: "Find the place value of 6 in 364.",
                answer: "6 is in the tens position. Its value is 60."
              },
              {
                question: "Which digits are allowed in base five?",
                answer: "0, 1, 2, 3 and 4."
              }
            ],

            exercises: [
              {
                question: "How many digits are used in base ten?",
                answer: "Ten."
              },
              {
                question: "Find the place value of 7 in 572.",
                answer: "70."
              },
              {
                question: "Is 5 allowed in base five?",
                answer: "No."
              }
            ],

            summary:
              "Number bases describe number systems. The position of a digit determines its place value."
          },

          {
            week: 2,
            title: "Factors and Multiples",

            objectives: [
              "Define factors and multiples.",
              "Find factors of whole numbers.",
              "Identify common factors and multiples."
            ],

            introduction:
              "Factors and multiples help us understand relationships between numbers. They are useful in simplifying fractions and solving mathematical problems.",

            sections: [
              {
                heading: "Factors",
                content:
                  "A factor divides a number exactly without leaving a remainder. The factors of 12 are 1, 2, 3, 4, 6 and 12."
              },
              {
                heading: "Multiples",
                content:
                  "A multiple is obtained by multiplying a number by a whole number. The first five positive multiples of 4 are 4, 8, 12, 16 and 20."
              },
              {
                heading: "Common factors",
                content:
                  "Common factors are factors shared by two or more numbers. The common factors of 8 and 12 are 1, 2 and 4."
              },
              {
                heading: "Common multiples",
                content:
                  "Common multiples are multiples shared by two or more numbers. A common positive multiple of 3 and 4 is 12."
              }
            ],

            examples: [
              {
                question: "List the factors of 18.",
                answer: "1, 2, 3, 6, 9 and 18."
              },
              {
                question: "Write the first five positive multiples of 6.",
                answer: "6, 12, 18, 24 and 30."
              }
            ],

            exercises: [
              {
                question: "List the factors of 10.",
                answer: "1, 2, 5 and 10."
              },
              {
                question: "Write the first four positive multiples of 7.",
                answer: "7, 14, 21 and 28."
              },
              {
                question: "Find the common factors of 6 and 9.",
                answer: "1 and 3."
              }
            ],

            summary:
              "Factors divide numbers exactly, while multiples are obtained through multiplication."
          }

        ]
      }
    }
  },

  // Retrieve lessons for a selected class, term and subject.
  getLessons: function(className, term, subject) {
    return this.lessonNotes[className]?.[term]?.[subject] || [];
  },

  // Retrieve a particular weekly lesson.
  getWeek: function(className, term, subject, weekNumber) {
    return this.getLessons(className, term, subject)
      .find(lesson => lesson.week === weekNumber) || null;
  },

  // List available subjects with published lessons.
  getAvailableSubjects: function(className, term) {
    const termData = this.lessonNotes[className]?.[term] || {};
    return Object.keys(termData).filter(
      subject => termData[subject].length > 0
    );
  },

  // Assessment storage structure.
  assessments: {
    BAE: {},
    CBT: {},
    BECE: {}
  },

  // Local progress storage.
  saveProgress: function(progress) {
    try {
      localStorage.setItem(
        "exam_master_progress",
        JSON.stringify(progress)
      );
      return true;
    } catch (error) {
      console.error("Could not save progress:", error);
      return false;
    }
  },

  getProgress: function() {
    try {
      return JSON.parse(
        localStorage.getItem("exam_master_progress") || "{}"
      );
    } catch (error) {
      return {};
    }
  }

};

console.log("EXAM MASTER central library loaded.");
