import displayQuestion from "./displayQuestion.js";

const testPaper = function (selectedTestPaper, mainContent, selectedTestTitle) {
  // console.log(selectedTestPaper, mainContent, selectedTestTitle);
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }

  //creating the main content heading title
  const mainHeading = document.createElement("h1");
  mainHeading.setAttribute("id", "main-heading");
  mainHeading.textContent = selectedTestTitle;
  mainContent.appendChild(mainHeading);

  const questionSection = document.createElement("section");
  questionSection.setAttribute("id", "question-section");
  mainContent.appendChild(questionSection);

  const controlsSection = document.createElement("section");
  controlsSection.setAttribute("id", "controls-section");
  controlsSection.textContent = "controls";
  mainContent.appendChild(controlsSection);

  //creating the question paper containing a list of objects
  const questionPaper = [];
  for (const item of Object.values(selectedTestPaper)) {
    item.forEach((element) => {
      questionPaper.push(element);
    });
  }
  // console.log(questionPaper);
  // calling display question function to display a specific question
  let counter = 0;
  displayQuestion(questionPaper[counter], questionSection);
};

export default testPaper;
