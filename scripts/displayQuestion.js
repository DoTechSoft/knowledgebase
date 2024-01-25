const displayQuestion = function (questionObject, questionSection) {
  // console.log(questionObject, questionSection);
  while (questionSection.firstChild) {
    questionSection.removeChild(questionSection.firstChild);
  }

  const { question, options, answer } = questionObject;
  const questionTag = document.createElement("p");
  questionTag.textContent = question;
  questionSection.appendChild(questionTag);

  const optionsList = document.createElement("ul");
  options.forEach((element) => {
    const option = document.createElement("p");
    option.textContent = element;
    optionsList.appendChild(option);
  });
  questionSection.appendChild(optionsList);
};

export default displayQuestion;
