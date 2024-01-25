import testSeries from "./testSeries.js";

const mainContent = document.getElementById("main-content");

const mainContentData = function (selectedCategoryData, selectedCategoryTitle) {
  // console.log(selectedCategoryData, selectedCategoryTitle);
  // const subCategoriesData = selectedCategoryData;
  const subCategories = Object.keys(selectedCategoryData);
  const mainHeading = document.createElement("h1");
  mainHeading.setAttribute("id", "main-heading");
  mainHeading.textContent = selectedCategoryTitle;
  mainContent.appendChild(mainHeading);
  const subCategoryList = document.createElement("ul");
  subCategoryList.setAttribute("id", "sub-category-list");
  subCategories.forEach((item) => {
    const subCategoryListItem = document.createElement("li");
    subCategoryListItem.textContent = item;
    // console.log(subCategoryListItem);
    subCategoryListItem.addEventListener("click", (subCategory) => {
      const subCategoryTitle = subCategory.target.textContent;
      testSeries(selectedCategoryData[item], mainContent, item);
    });
    subCategoryList.appendChild(subCategoryListItem);
  });

  mainContent.appendChild(subCategoryList);
};

export default mainContentData;
