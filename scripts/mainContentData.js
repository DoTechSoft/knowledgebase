const mainContent = document.getElementById("main-content");

const mainContentData = function (mainContentFetchedData, selectedCategory) {
  const subCategories = Object.keys(mainContentFetchedData[selectedCategory]);
  const mainHeading = document.createElement("h1");
  mainHeading.setAttribute("id", "main-heading");
  mainHeading.textContent = selectedCategory;
  mainContent.appendChild(mainHeading);
  const subCategoryList = document.createElement("ul");
  subCategoryList.setAttribute("id", "sub-category-list");
  subCategories.forEach((item) => {
    const subCategoryListItem = document.createElement("li");
    subCategoryListItem.textContent = item;
    subCategoryList.appendChild(subCategoryListItem);
  });

  mainContent.appendChild(subCategoryList);
};

export default mainContentData;
