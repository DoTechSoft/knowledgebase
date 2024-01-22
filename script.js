import fetchTestPaper from "./scripts/fetchTestPaper.js";
import fetchQuestion from "./scripts/fetchQuestion.js";
import fetchSidebarData from "./scripts/fetchSidebarData.js";
import mainContentData from "./scripts/mainContentData.js";

const card = document.getElementById("card-contents");
const submitButton = document.getElementById("q1");
const stat = document.getElementById("stat");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const questionElement = document.getElementById("question");
const summary = document.getElementById("summary");
const summaryStats = document.querySelectorAll("#summaryStats :nth-child(odd)");
const summaryMessage = document.querySelectorAll(
  "#summaryMessage :nth-child(odd)"
);

async function run() {
  const mainContentFetchedData = await fetchSidebarData();
  const sidebarList = document.getElementById("sidebar-list");
  const sidebarListNodes = sidebarList.childNodes;
  const initialCategorySelectionFlag = true;
  const mainContent = document.getElementById("main-content");
  sidebarListNodes.forEach((item) => {
    item.addEventListener("click", () => {
      mainContent.removeChild(mainContent.firstChild);
      mainContentData(mainContentFetchedData, item.textContent);
      initialCategorySelectionFlag = true;
    });
  });
  if (initialCategorySelectionFlag) {
    console.log(sidebarListNodes[0].textContent);
    mainContentData(
      mainContentFetchedData,
      sidebarListNodes[0].textContent,
      true
    );
  }

  const testPaper = await fetchTestPaper();

  let questionCounter = 0;
  const generateQuestion = await fetchQuestion(
    testPaper,
    questionCounter,
    questionElement
  );
  // nextButton.setAttribute("disabled", "true");
  // submitButton.removeAttribute("disabled");
  // card.setAttribute("class", "card-contents");
  // stat.textContent = "Good Luck";

  nextButton.addEventListener("click", generateQuestion);

  // function for generating the final score and displaying it onto the screen
  let finalScore = 0;
  const [correct, total, score] = summaryStats;
  const [alert, conclusion] = summaryMessage;
  const summaryFunction = function () {
    const grade = finalScore / testPaper.length >= 0.4;
    card.setAttribute("class", "hidden");
    summary.removeAttribute("class");
    correct.textContent = `Correct Answers: ${finalScore}`;
    total.textContent = `Total Questions: ${testPaper.length}`;
    score.textContent = `Score ${finalScore}/${testPaper.length}`;
    alert.textContent = grade ? "Congratulations!!!" : "Sorry!!!";
    conclusion.textContent = grade
      ? "You passed the test"
      : "You failed the test";
  };
  finishButton.addEventListener("click", summaryFunction);

  // take the user input and check whether the response is correct or incorrect or if the response has been provided or not
  // also update the score and display the final score
  let statMessage;
  const ques = function (actualAnswer) {
    const choices = document.getElementsByClassName("choice");
    for (const selected of choices) {
      if (selected.checked === true) {
        flag = true;
        const result =
          selected.value === actualAnswer ? "correct" : "incorrect";
        statMessage = `${selected.value} is ${result}`;
        submitButton.setAttribute("disabled", "true");
        if (result === "correct") {
          card.setAttribute("class", "correct");
          stat.textContent = statMessage;
          finalScore++;
        } else if (result === "incorrect") {
          card.setAttribute("class", "incorrect");
          stat.textContent = statMessage;
        }
        questionCounter++;
        if (questionCounter < testPaper.length) {
          nextButton.removeAttribute("disabled");
        } else {
          nextButton.setAttribute("class", "hidden");
          finishButton.removeAttribute("disabled");
          finishButton.removeAttribute("class");
        }
      }
    }
    if (!flag) {
      stat.textContent = "Please select an option";
    }
  };
}
run();
submitButton.addEventListener("click", function () {
  ques(correctAnswer);
});
