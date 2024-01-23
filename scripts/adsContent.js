const adsSection = document.getElementById("ads-section");

const adsContent = function (counter, adsList) {
  while (adsSection.firstChild) {
    adsSection.removeChild(adsSection.firstChild);
  }

  const adsHeading = document.createElement("h6");
  adsHeading.setAttribute("id", "ads-heading");
  adsHeading.textContent = "Dummy Ads";
  adsSection.appendChild(adsHeading);

  const adContentContainer = document.createElement("div");
  adContentContainer.setAttribute("id", "ads-content-container");
  adsSection.appendChild(adContentContainer);

  const adContentImage = document.createElement("img");
  adContentImage.setAttribute("class", "ad-content-image");
  adContentImage.setAttribute("id", "ad-content-image");
  adContentImage.setAttribute(
    "src",
    `../assets/dummyads/${adsList[counter]}.png`
  );
  adContentImage.setAttribute("alt", "ad");
  adContentContainer.appendChild(adContentImage);
};

export default adsContent;
