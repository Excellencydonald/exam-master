
/* =========================================
   EXAM MASTER JUNIOR
   Main Application Controller
   Version 2.0
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const classSelect = document.getElementById("classSelect");
  const termSelect = document.getElementById("termSelect");
  const subjectSelect = document.getElementById("subjectSelect");

  const loadLessonsButton = document.getElementById("loadLessons");
  const lessonMessage = document.getElementById("lessonMessage");

  const lessonListSection = document.getElementById("lessonListSection");
  const lessonList = document.getElementById("lessonList");

  const lessonViewer = document.getElementById("lessonViewer");
  const lessonContent = document.getElementById("lessonContent");

  const backButton = document.getElementById("backToLessons");
  const progressDisplay = document.getElementById("progressDisplay");

  const STORAGE_KEY = "examMasterJuniorProgress";

  let currentLessons = [];

  /* =========================================
     LIBRARY
     ========================================= */

  function getLibrary() {
    return window.EXAM_MASTER?.library || null;
  }

  function showMessage(message) {
    lessonMessage.textContent = message;
  }

  /* =========================================
     SUBJECTS
     ========================================= */

  function loadSubjects() {

    const library = getLibrary();

    subjectSelect.innerHTML =
      '<option value="">Select a subject</option>';

    if (!library) {
      showMessage("Lesson library could not be loaded.");
      return;
    }

    const subjects =
      library.getAvailableSubjects?.(
        classSelect.value,
        termSelect.value
      ) || [];

    subjects.forEach(subject => {

      const name =
        typeof subject === "string"
          ? subject
          : subject.name || subject.title;

      if (!name) return;

      const option = document.createElement("option");

      option.value = name;
      option.textContent = name;

      subjectSelect.appendChild(option);
    });

    showMessage(
      subjects.length
        ? "Select a subject to view available lessons."
        : "No lessons are currently available for this selection."
    );
  }

  /* =========================================
     GET LESSONS
     ========================================= */

  function getSelectedLessons() {

    const library = getLibrary();

    if (!library) return [];

    return library.getLessons?.(
      classSelect.value,
      termSelect.value,
      subjectSelect.value
    ) || [];
  }

  /* =========================================
     LESSON LIST
     ========================================= */

  function openLessons() {

    if (!subjectSelect.value) {
      showMessage("Please select a subject first.");
      return;
    }

    currentLessons = getSelectedLessons();

    lessonList.innerHTML = "";

    lessonViewer.classList.add("hidden");
    lessonListSection.classList.remove("hidden");

    if (!currentLessons.length) {

      const message = document.createElement("p");

      message.textContent =
        "No lesson notes have been added for this subject and term yet.";

      lessonList.appendChild(message);

      showMessage("Lesson content is still being added.");
      return;
    }

    currentLessons.forEach((lesson, index) => {

      const card = document.createElement("div");
      card.className = "lesson-card";

      const title = document.createElement("h3");

      title.textContent =
        lesson.title || `Week ${lesson.week || index + 1}`;

      const description = document.createElement("p");

      description.textContent =
        lesson.description ||
        "Open this lesson to study.";

      const button = document.createElement("button");

      button.textContent = "Read Lesson";

      button.addEventListener("click", () => {
        displayLesson(lesson, index);
      });

      card.append(title, description, button);

      lessonList.appendChild(card);
    });

    showMessage(`${currentLessons.length} lesson(s) available.`);
  }

  /* =========================================
     SAFE CONTENT RENDERING
     ========================================= */

  function renderValue(parent, value) {

    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {

      const list = document.createElement("ul");

      value.forEach(item => {

        const li = document.createElement("li");

        if (typeof item === "object" && item !== null) {

          Object.entries(item).forEach(([key, val]) => {

            const line = document.createElement("p");

            line.textContent = `${key}: ${String(val)}`;

            li.appendChild(line);

          });

        } else {

          li.textContent = String(item);

        }

        list.appendChild(li);

      });

      parent.appendChild(list);

      return;
    }

    if (typeof value === "object") {

      Object.entries(value).forEach(([key, val]) => {

        const heading = document.createElement("h4");

        heading.textContent = key;

        parent.appendChild(heading);

        renderValue(parent, val);

      });

      return;
    }

    const paragraph = document.createElement("p");

    paragraph.textContent = String(value);

    parent.appendChild(paragraph);
  }

  /* =========================================
     LESSON SECTIONS
     ========================================= */

  function addSection(parent, headingText, content) {

    if (
      content === undefined ||
      content === null ||
      content === ""
    ) return;

    const section = document.createElement("section");

    section.className = "lesson-section";

    const heading = document.createElement("h3");

    heading.textContent = headingText;

    section.appendChild(heading);

    renderValue(section, content);

    parent.appendChild(section);
  }

  /* =========================================
     DISPLAY LESSON
     ========================================= */

  function displayLesson(lesson, index) {

    lessonListSection.classList.add("hidden");

    lessonViewer.classList.remove("hidden");

    lessonContent.innerHTML = "";

    const title = document.createElement("h2");

    title.textContent = lesson.title || "Lesson Notes";

    lessonContent.appendChild(title);

    const details = document.createElement("p");

    details.className = "muted";

    details.textContent =
      `${classSelect.value} • ${termSelect.value} • ${subjectSelect.value} • Week ${lesson.week || index + 1}`;

    lessonContent.appendChild(details);

    /* Learning objectives */

    addSection(
      lessonContent,
      "Learning Objectives",
      lesson.objectives
    );

    /* Introduction */

    addSection(
      lessonContent,
      "Introduction",
      lesson.introduction
    );

    /* Main explanations */

    if (Array.isArray(lesson.sections)) {

      lesson.sections.forEach(section => {

        if (typeof section === "object" && section !== null) {

          addSection(
            lessonContent,
            section.heading || section.title || "Lesson Explanation",
            section.content || section.text || section.body
          );

        } else {

          addSection(
            lessonContent,
            "Lesson Explanation",
            section
          );

        }

      });

    } else {

      addSection(
        lessonContent,
        "Lesson Explanation",
        lesson.explanation
      );

    }

    /* Definitions */

    addSection(
      lessonContent,
      "Definitions and Key Terms",
      lesson.keyTerms
    );

    /* Worked examples: supports both formats */

    addSection(
      lessonContent,
      "Worked Examples",
      lesson.workedExamples || lesson.examples
    );

    /* Class exercises: supports both formats */

    addSection(
      lessonContent,
      "Class Exercises",
      lesson.classExercises || lesson.exercises
    );

    /* Common mistakes */

    addSection(
      lessonContent,
      "Common Mistakes",
      lesson.commonMistakes
    );

    /* Summary */

    addSection(
      lessonContent,
      "Lesson Summary",
      lesson.summary
    );

    /* Examination questions: supports both formats */

    addSection(
      lessonContent,
      "Examination Practice",
      lesson.examinationPractice || lesson.examQuestions
    );

    /* Completion button */

    const completeButton = document.createElement("button");

    completeButton.textContent = "Mark Lesson as Completed";

    completeButton.addEventListener("click", () => {

      markLessonCompleted(lesson, index);

    });

    lessonContent.appendChild(completeButton);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================
     PROGRESS STORAGE
     ========================================= */

  function getProgress() {

    try {

      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

    } catch (error) {

      return [];

    }
  }

  function saveProgress(progress) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );

  }

  function markLessonCompleted(lesson, index) {

    const progress = getProgress();

    const record = {

      className: classSelect.value,
      term: termSelect.value,
      subject: subjectSelect.value,

      lessonTitle:
        lesson.title || `Week ${lesson.week || index + 1}`

    };

    const alreadyCompleted = progress.some(item =>

      item.className === record.className &&
      item.term === record.term &&
      item.subject === record.subject &&
      item.lessonTitle === record.lessonTitle

    );

    if (!alreadyCompleted) {

      progress.push(record);

      saveProgress(progress);

    }

    updateProgress();

    alert(
      alreadyCompleted
        ? "You have already completed this lesson."
        : "Lesson marked as completed!"
    );
  }

  function updateProgress() {

    const progress = getProgress();

    progressDisplay.textContent =
      `Lessons completed: ${progress.length}`;

  }

  /* =========================================
     NAVIGATION
     ========================================= */

  backButton.addEventListener("click", () => {

    lessonViewer.classList.add("hidden");

    lessonListSection.classList.remove("hidden");

    window.scrollTo({
      top: lessonListSection.offsetTop,
      behavior: "smooth"
    });

  });

  loadLessonsButton.addEventListener("click", openLessons);

  classSelect.addEventListener("change", loadSubjects);

  termSelect.addEventListener("change", loadSubjects);

  /* =========================================
     START APPLICATION
     ========================================= */

  loadSubjects();

  updateProgress();

});
