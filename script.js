import fetchTestPaper from "./scripts/fetchTestPaper.js";
import fetchQuestion from "./scripts/fetchQuestion.js";
import fetchSidebarData from "./scripts/fetchSidebarData.js";
import mainContentData from "./scripts/mainContentData.js";
import adsContent from "./scripts/adsContent.js";

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
  //fetches category data which gets displayed in the sidebar and also returns sub categories data that will display in the main content section
  const mainContentFetchedData = await fetchSidebarData();
  console.log(mainContentFetchedData);
  const sidebarList = document.getElementById("sidebar-list");
  const sidebarListNodes = sidebarList.childNodes;
  let initialCategorySelectionFlag = true;
  const mainContent = document.getElementById("main-content");
  //added an even listener to each category in the sidebar and setting a class attribute to the clicked elements so that it stays highlighted
  sidebarListNodes.forEach((item) => {
    item.addEventListener("click", () => {
      while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
      }

      sidebarListNodes.forEach((element) => {
        if (element.textContent !== item.textContent)
          element.removeAttribute("class");
      });
      item.setAttribute("class", "selected");

      //feching the sub category data for the clicked category for it to be displayed in the main content section
      mainContentData(
        mainContentFetchedData[item.textContent],
        item.textContent
      );
      initialCategorySelectionFlag = true;
    });
  });
  if (initialCategorySelectionFlag) {
    //feching the initial default sub category data for it to be displayed in the main content section
    const [initialCategory, ...rest] = sidebarListNodes;
    mainContentData(
      mainContentFetchedData[initialCategory.textContent],
      initialCategory.textContent
    );
  }

  // fetching a test paper based on test selection
  // const testPaper = await fetchTestPaper(mainContentFetchedData);
  // console.log(testPaper);

  //Running ads in the ads Section
  const adsList = ["weekendpromo", "casualclothing", "snowseasonsale"];
  let counter = 0;
  //running the ad when the page intially loads
  adsContent(2, adsList);
  //running the ads in a loop
  setInterval(() => {
    adsContent(counter, adsList);
    counter++;
    if (counter > 2) {
      counter = 0;
    }
  }, 5000);

  // let questionCounter = 0;
  // const generateQuestion = await fetchQuestion(
  //   testPaper,
  //   questionCounter,
  //   questionElement
  // );
  // nextButton.setAttribute("disabled", "true");
  // submitButton.removeAttribute("disabled");
  // card.setAttribute("class", "card-contents");
  // stat.textContent = "Good Luck";

  // nextButton.addEventListener("click", generateQuestion);

  // function for generating the final score and displaying it onto the screen
  // let finalScore = 0;
  // const [correct, total, score] = summaryStats;
  // const [alert, conclusion] = summaryMessage;
  // const summaryFunction = function () {
  //   const grade = finalScore / testPaper.length >= 0.4;
  //   card.setAttribute("class", "hidden");
  //   summary.removeAttribute("class");
  //   correct.textContent = `Correct Answers: ${finalScore}`;
  //   total.textContent = `Total Questions: ${testPaper.length}`;
  //   score.textContent = `Score ${finalScore}/${testPaper.length}`;
  //   alert.textContent = grade ? "Congratulations!!!" : "Sorry!!!";
  //   conclusion.textContent = grade
  //     ? "You passed the test"
  //     : "You failed the test";
  // };
  // finishButton.addEventListener("click", summaryFunction);

  // take the user input and check whether the response is correct or incorrect or if the response has been provided or not
  // also update the score and display the final score
  // let statMessage;
  // const ques = function (actualAnswer) {
  //   const choices = document.getElementsByClassName("choice");
  //   for (const selected of choices) {
  //     if (selected.checked === true) {
  //       flag = true;
  //       const result =
  //         selected.value === actualAnswer ? "correct" : "incorrect";
  //       statMessage = `${selected.value} is ${result}`;
  //       submitButton.setAttribute("disabled", "true");
  //       if (result === "correct") {
  //         card.setAttribute("class", "correct");
  //         stat.textContent = statMessage;
  //         finalScore++;
  //       } else if (result === "incorrect") {
  //         card.setAttribute("class", "incorrect");
  //         stat.textContent = statMessage;
  //       }
  //       questionCounter++;
  //       if (questionCounter < testPaper.length) {
  //         nextButton.removeAttribute("disabled");
  //       } else {
  //         nextButton.setAttribute("class", "hidden");
  //         finishButton.removeAttribute("disabled");
  //         finishButton.removeAttribute("class");
  //       }
  //     }
  //   }
  //   if (!flag) {
  //     stat.textContent = "Please select an option";
  //   }
  // };
}
run();
// submitButton.addEventListener("click", function () {
//   ques(correctAnswer);
// });
