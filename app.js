
"use strict";

// =====================================
// EXAM MASTER JUNIOR
// Main Application Controller
// =====================================

const ExamMaster = {
  version: "2.0.0",

  classes: ["JSS 1", "JSS 2", "JSS 3"],

  terms: ["First Term", "Second Term", "Third Term"],

  subjects: [
    "English Studies",
    "Mathematics",
    "Nigerian Language",
    "Intermediate Science",
    "Physical and Health Education",
    "Digital Technologies",
    "CRS / Islamic Studies",
    "Nigerian History",
    "Social and Citizenship Studies",
    "Cultural and Creative Arts",
    "Business Studies",
    "Livestock Farming",
    "French",
    "Arabic"
  ],

  progress: {
    completedLessons: 0,
    questionsAttempted: 0,
    correctAnswers: 0
  },

  init() {
    this.loadProgress();
    this.displayWelcome();
    this.updateDashboard();
  },

  displayWelcome() {
    console.log("EXAM MASTER JUNIOR is ready.");
  },

  loadProgress() {
    try {
      const saved = localStorage.getItem("examMasterProgress");

      if (saved) {
        this.progress = {
          ...this.progress,
          ...JSON.parse(saved)
        };
      }
    } catch (error) {
      console.error("Could not load saved progress:", error);
    }

    return this.progress;
  },

  saveProgress() {
    try {
      localStorage.setItem(
        "examMasterProgress",
        JSON.stringify(this.progress)
      );
      return true;
    } catch (error) {
      console.error("Could not save progress:", error);
      return false;
    }
  },

  updateDashboard() {
    const completed = document.getElementById("completedLessons");
    const attempted = document.getElementById("questionsAttempted");
    const correct = document.getElementById("correctAnswers");

    if (completed) {
      completed.textContent = this.progress.completedLessons;
    }

    if (attempted) {
      attempted.textContent = this.progress.questionsAttempted;
    }

    if (correct) {
      correct.textContent = this.progress.correctAnswers;
    }
  },

  getSubjects() {
    return [...this.subjects];
  },

  selectClass(studentClass, term) {
    if (!this.classes.includes(studentClass)) {
      return null;
    }

    if (!this.terms.includes(term)) {
      return null;
    }

    return {
      studentClass,
      term,
      subjects: this.getSubjects()
    };
  },

  recordLessonCompleted() {
    this.progress.completedLessons++;
    this.saveProgress();
    this.updateDashboard();
  },

  recordQuestion(correct) {
    this.progress.questionsAttempted++;

    if (correct) {
      this.progress.correctAnswers++;
    }

    this.saveProgress();
    this.updateDashboard();
  },

  getAccuracy() {
    if (this.progress.questionsAttempted === 0) {
      return 0;
    }

    return Math.round(
      (this.progress.correctAnswers /
        this.progress.questionsAttempted) * 100
    );
  }
};


// =====================================
// LEARNING CENTRE
// =====================================

function openLearning() {
  const studentClass =
    document.getElementById("classSelect").value;

  const term =
    document.getElementById("termSelect").value;

  const selection =
    ExamMaster.selectClass(studentClass, term);

  const message =
    document.getElementById("message");

  if (!selection) {
    message.textContent = "Please select a valid class and term.";
    return;
  }

  message.textContent =
    studentClass + " — " + term +
    " selected. Your subjects are being prepared.";

  console.log("Selected learning centre:", selection);
}


// =====================================
// APPLICATION START
// =====================================

document.addEventListener("DOMContentLoaded", () => {
  ExamMaster.init();
});
