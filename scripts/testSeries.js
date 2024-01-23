const testSeries = function (testSeriesData, mainContent, subCategoryTitle) {
  //   console.log(testSeriesData, mainContent, subCategoryTitle);
  const testSeriesDataList = Object.keys(testSeriesData);
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  const testSeriesHeader = document.createElement("h1");
  testSeriesHeader.setAttribute("id", "test-series-heading");
  testSeriesHeader.textContent = subCategoryTitle;
  mainContent.appendChild(testSeriesHeader);
  const testSeriesList = document.createElement("ul");
  testSeriesList.setAttribute("id", "test-series-list");
  testSeriesDataList.forEach((item) => {
    const testSeriesListItem = document.createElement("li");
    testSeriesListItem.textContent = item;
    testSeriesList.appendChild(testSeriesListItem);
  });
  mainContent.appendChild(testSeriesList);
};

export default testSeries;
