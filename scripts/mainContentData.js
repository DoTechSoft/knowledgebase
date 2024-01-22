const mainContent = document.getElementById("main-content");

const mainContentData = function (mainContentFetchedData, selectedCategory) {
  const subCategories = Object.keys(mainContentFetchedData[selectedCategory]);
  console.log(
    mainContentFetchedData[selectedCategory],
    "noooooooooooooooooooooo"
  );
  const subCategoryList = document.createElement("ul");

  subCategories.forEach((item) => {
    const subCategoryListItem = document.createElement("li");
    subCategoryListItem.textContent = item;
    // subCategoryListItem.addEventListener("click", () => {
    //   const tests = mainContentFetchedData[item];
    //   const testList = document.createElement("ul");
    //   tests.forEach((item) => {
    //     const testListItem = document.createElement("li");
    //     testListItem.textContent = item;
    //     testList.appendChild(testListItem);
    //   });
    //   //   console.log(mainContent);
    //   mainContent.removeChild(mainContent.lastChild);
    //   mainContent.appendChild(testList);
    // });
    subCategoryList.appendChild(subCategoryListItem);
  });

  mainContent.appendChild(subCategoryList);
};

export default mainContentData;
