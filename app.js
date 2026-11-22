
"use strict";

// EXAM MASTER JUNIOR
// Main application controller

const ExamMaster = {
  version: "1.0.0",

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

  init() {
    this.loadProgress();
    this.displayWelcome();
  },

  displayWelcome() {
    console.log("EXAM MASTER JUNIOR is ready.");
  },

  loadProgress() {
    try {
      const saved = localStorage.getItem("examMasterProgress");
      return saved ? JSON.parse(saved) : {
        completedLessons: 0,
        questionsAttempted: 0,
        correctAnswers: 0
      };
    } catch {
      return {
        completedLessons: 0,
        questionsAttempted: 0,
        correctAnswers: 0
      };
    }
  },

  saveProgress(progress) {
    localStorage.setItem(
      "examMasterProgress",
      JSON.stringify(progress)
    );
  },

  getSubjects() {
    return [...this.subjects];
  },

  selectClass(studentClass, term) {
    return {
      studentClass,
      term,
      subjects: this.getSubjects()
    };
  }
};

document.addEventListener("DOMContentLoaded", () => {
  ExamMaster.init();
});
