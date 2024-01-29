import displayQuestion from "./displayQuestion.js";
import progressBarSelection from "./progressBarSelection.js";

const sidebar = document.getElementById("sidebar-section");
const mainSection = document.getElementById("main-section");

const progressBar = function (questionPaper, counter, questionSection) {
  // console.log(questionPaper, counter, questionSection);
  sidebar.className = "hidden";
  const progressBar = document.createElement("section");
  progressBar.setAttribute("id", "progress-bar");
  mainSection.prepend(progressBar);

  const progressBarList = document.createElement("ul");
  progressBarList.setAttribute("id", "progressbar-list");
  questionPaper.map((item, index) => {
    const progressBarListItem = document.createElement("li");
    progressBarListItem.textContent = index + 1;
    progressBarList.appendChild(progressBarListItem);
  });
  progressBar.appendChild(progressBarList);
  return progressBarList.childNodes;
};

export default progressBar;
