const mainContent = document.getElementById("main-content");

const mainContentData = function (sidebarSelectedMainContent) {
  const subCategories = Object.keys(sidebarSelectedMainContent);
  //   console.log(subCategories);
  const subCategoryList = document.createElement("ul");
  subCategories.forEach((item) => {
    const subCategoryListItem = document.createElement("li");
    subCategoryListItem.textContent = item;
    subCategoryListItem.addEventListener("click", () => {
      const tests = sidebarSelectedMainContent[item];
      const testList = document.createElement("ul");
      tests.forEach((item) => {
        const testListItem = document.createElement("li");
        testListItem.textContent = item;
        testList.appendChild(testListItem);
      });
      console.log(mainContent);
      mainContent.appendChild(testList);
      mainContent.removeChild(mainContent.firstChild);
    });
    subCategoryList.appendChild(subCategoryListItem);
  });
  mainContent.appendChild(subCategoryList);
};

export default mainContentData;
