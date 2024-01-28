const sidebar = document.getElementById("sidebar-section");
const mainSection = document.getElementById("main-section");

const progressBar = function (selectedTestPaper) {
  //   console.log(selectedTestPaper);
  //creating the question paper containing a list of objects
  const questionPaper = [];
  for (const item of Object.values(selectedTestPaper)) {
    item.forEach((element) => {
      questionPaper.push(element);
    });
  }
  console.log(questionPaper);
  sidebar.className = "hidden";
  const progressBar = document.createElement("section");
  progressBar.setAttribute("id", "progress-bar");
  mainSection.prepend(progressBar);

  const progressBarList = document.createElement("ul");
  progressBarList.setAttribute("id", "progressbar-list");
  questionPaper.map((item, index) => {
    console.log(index);
    const progressBarListItem = document.createElement("li");
    progressBarListItem.textContent = index + 1;
    progressBarList.appendChild(progressBarListItem);
  });
  progressBar.appendChild(progressBarList);
};

export default progressBar;
