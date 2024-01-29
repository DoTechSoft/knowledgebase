import testPaper from "./testPaper.js";

const testSeries = function (testSeriesData, mainContent, subCategoryTitle) {
  // console.log(testSeriesData, mainContent, subCategoryTitle);
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  const testSeriesDataList = Object.keys(testSeriesData);
  const testSeriesHeader = document.createElement("h1");
  testSeriesHeader.setAttribute("id", "test-series-heading");
  testSeriesHeader.textContent = subCategoryTitle;
  mainContent.appendChild(testSeriesHeader);
  const testSeriesList = document.createElement("ul");
  testSeriesList.setAttribute("id", "test-series-list");
  testSeriesDataList.forEach((item) => {
    const testSeriesListItem = document.createElement("li");
    testSeriesListItem.textContent = item;
    testSeriesListItem.addEventListener("click", () => {
      testPaper(testSeriesData[item], mainContent, item);
    });
    testSeriesList.appendChild(testSeriesListItem);
  });
  mainContent.appendChild(testSeriesList);
};

export default testSeries;
