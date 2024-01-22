const sidebarSection = document.getElementById("sidebar-section");

const fetchSidebarData = async function () {
  try {
    const response = await fetch("../sidebarMainContentBank.json");
    const responsePromise = await response.json();
    const categories = Object.keys(responsePromise);
    const list = document.createElement("ul");
    list.setAttribute("id", "sidebar-list");
    for (const item of categories) {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    }
    console.log(list);
    sidebarSection.appendChild(list);
    return responsePromise[categories[0]];
  } catch (error) {
    console.log(error);
  }
};

export default fetchSidebarData;
