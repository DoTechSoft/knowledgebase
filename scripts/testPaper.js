const testPaper = function (selectedTestPaper, mainContent, selectedTestTitle) {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  console.log(selectedTestPaper, mainContent, selectedTestTitle);
};

export default testPaper;
