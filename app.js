
/* =========================================
   EXAM MASTER JUNIOR
   Main Application Controller
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
     CHECK LESSON LIBRARY
     ========================================= */

  function getLibrary() {
    return window.EXAM_MASTER &&
      window.EXAM_MASTER.library
      ? window.EXAM_MASTER.library
      : null;
  }

  function showMessage(message) {
    lessonMessage.textContent = message;
  }

  /* =========================================
     SUBJECT SELECTION
     ========================================= */

  function loadSubjects() {
    const library = getLibrary();

    subjectSelect.innerHTML =
      '<option value="">Select a subject</option>';

    if (!library) {
      showMessage(
        "Lesson library not found. Check that lesson-library.js exists and loads before app.js."
      );
      return;
    }

    let subjects = [];

    if (typeof library.getAvailableSubjects === "function") {
      subjects = library.getAvailableSubjects(
        classSelect.value,
        termSelect.value
      ) || [];
    } else {
      subjects = library.subjects || [];
    }

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
        ? "Choose a subject to view its available lessons."
        : "No subjects are currently available for this selection."
    );
  }

  /* =========================================
     GET LESSONS
     ========================================= */

  function getSelectedLessons() {
    const library = getLibrary();

    if (!library) return [];

    if (typeof library.getLessons === "function") {
      return library.getLessons(
        classSelect.value,
        termSelect.value,
        subjectSelect.value
      ) || [];
    }

    return [];
  }

  /* =========================================
     DISPLAY LESSON LIST
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
      lessonList.textContent =
        "No lesson notes have been added for this subject and term yet.";

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
        lesson.description || "Open this lesson to study.";

      const button = document.createElement("button");
      button.className = "primary-action";
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

  function addText(parent, value) {
    const paragraph = document.createElement("p");
    paragraph.textContent = String(value);
    parent.appendChild(paragraph);
  }

  function renderValue(parent, value) {
    if (value === null || value === undefined) return;

    if (Array.isArray(value)) {
      const list = document.createElement("ul");

      value.forEach(item => {
        const li = document.createElement("li");

        if (typeof item === "object" && item !== null) {
          li.textContent = Object.entries(item)
            .map(([key, val]) => `${key}: ${String(val)}`)
            .join(" — ");
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

    addText(parent, value);
  }

  function addSection(parent, headingText, content) {
    if (content === undefined || content === null) return;

    const heading = document.createElement("h3");
    heading.textContent = headingText;
    parent.appendChild(heading);

    renderValue(parent, content);
  }

  /* =========================================
     DISPLAY A LESSON
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
      `${classSelect.value} • ${termSelect.value} • ${subjectSelect.value}`;

    lessonContent.appendChild(details);

    addSection(
      lessonContent,
      "Learning Objectives",
      lesson.objectives
    );

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

    addSection(
      lessonContent,
      "Definitions and Key Terms",
      lesson.keyTerms
    );

    addSection(
      lessonContent,
      "Worked Examples",
      lesson.examples
    );

    addSection(
      lessonContent,
      "Class Exercises",
      lesson.exercises
    );

    addSection(
      lessonContent,
      "Common Mistakes",
      lesson.commonMistakes
    );

    addSection(
      lessonContent,
      "Lesson Summary",
      lesson.summary
    );

    addSection(
      lessonContent,
      "Examination Practice",
      lesson.examQuestions
    );

    const completeButton = document.createElement("button");
    completeButton.className = "primary-action";
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
     PROGRESS TRACKING
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
      lessonTitle: lesson.title || `Week ${index + 1}`
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
