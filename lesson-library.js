
(function () {
  "use strict";

  const STORAGE_KEY = "examMasterJuniorProgress";

  const CLASSES = ["JSS 1", "JSS 2", "JSS 3"];
  const TERMS = ["First Term", "Second Term", "Third Term"];

  const SUBJECTS = [
    "English Studies",
    "Mathematics",
    "Nigerian Language",
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
  ];

  // Main lesson storage.
  const lessons = {};

  CLASSES.forEach(className => {
    lessons[className] = {};

    TERMS.forEach(termName => {
      lessons[className][termName] = {};

      SUBJECTS.forEach(subjectName => {
        lessons[className][termName][subjectName] = [];
      });
    });
  });

  // Create a lesson using a consistent format.
  function createLesson(data) {
    return {
      week: data.week || 1,
      title: data.title || "Lesson title pending",
      topic: data.topic || "",
      introduction: data.introduction || "",
      objectives: data.objectives || [],
      sections: data.sections || [],
      keyTerms: data.keyTerms || [],
      workedExamples: data.workedExamples || [],
      classExercises: data.classExercises || [],
      commonMistakes: data.commonMistakes || [],
      summary: data.summary || "",
      examinationPractice: data.examinationPractice || []
    };
  }

  // Add a lesson to the library.
  function addLesson(className, termName, subjectName, lessonData) {
    if (
      !lessons[className] ||
      !lessons[className][termName] ||
      !lessons[className][termName][subjectName]
    ) {
      return false;
    }

    lessons[className][termName][subjectName].push(
      createLesson(lessonData)
    );

    lessons[className][termName][subjectName].sort(
      (a, b) => a.week - b.week
    );

    return true;
  }

  // Get all available subjects for a class and term.
  function getAvailableSubjects(className, termName) {
    if (!lessons[className] || !lessons[className][termName]) {
      return [];
    }

    return Object.keys(lessons[className][termName]).filter(
      subject => lessons[className][termName][subject].length > 0
    );
  }

  // Get lessons for a selected subject.
  function getLessons(className, termName, subjectName) {
    return (
      lessons[className]?.[termName]?.[subjectName] || []
    );
  }

  // Get one particular week's lesson.
  function getWeek(className, termName, subjectName, weekNumber) {
    return getLessons(className, termName, subjectName).find(
      lesson => lesson.week === Number(weekNumber)
    ) || null;
  }

  // Save student progress locally on the device.
  function saveProgress(progress) {
    try {
      const current = getProgress();

      const updated = {
        ...current,
        ...progress
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      return true;
    } catch (error) {
      console.error("Could not save progress:", error);
      return false;
    }
  }

  // Retrieve saved progress.
  function getProgress() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );
    } catch (error) {
      console.error("Could not load progress:", error);
      return {};
    }
  }

  // Public library interface used by app.js.
  window.EXAM_MASTER = window.EXAM_MASTER || {};

  window.EXAM_MASTER.library = {
    classes: CLASSES,
    terms: TERMS,
    subjects: SUBJECTS,
    lessons,
    createLesson,
    addLesson,
    getAvailableSubjects,
    getLessons,
    getWeek,
    saveProgress,
    getProgress
  };

})();
