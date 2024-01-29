const progressBarSelection = function (progressBarNodesList, counter) {
  //   console.log(progressBarNodesList, counter);
  let index = 0;
  progressBarNodesList.forEach((element) => {
    if (index === counter) {
      element.setAttribute("class", "selected");
    } else {
      element.removeAttribute("class");
    }
    index++;
  });
  return counter;
};

export default progressBarSelection;
