const sidebarSection = document.getElementById("sidebar-section");

const fetchSidebarData = async function () {
  const categories = [
    "JKSSB",
    "JKPSC",
    "Kashmir University",
    "UGC NET",
    "CSIR NET",
    "SKIMS",
    "SKUAST",
  ];
  const list = document.createElement("ul");
  list.setAttribute("id", "sidebar-list");
  for (const item of categories) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    if (item === "JKSSB") {
      listItem.setAttribute("class", "selected");
    }
    list.appendChild(listItem);
  }
  sidebarSection.appendChild(list);
};

export default fetchSidebarData;
