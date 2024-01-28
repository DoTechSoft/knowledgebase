const displayQuestion = function (questionObject, questionSection) {
  // console.log(questionObject, questionSection);
  while (questionSection.firstChild) {
    questionSection.removeChild(questionSection.firstChild);
  }
  // Displaying the question
  const { question, options, answer } = questionObject;
  const questionTag = document.createElement("p");
  questionTag.setAttribute("id", "question-tag");
  // questionTag.textContent = question;
  //adding the question as an html element instead of a string
  questionTag.insertAdjacentHTML("beforeend", question);
  questionSection.appendChild(questionTag);
  // Displaying the options
  const optionsList = document.createElement("ul");
  optionsList.setAttribute("id", "response-options");
  options.forEach((element) => {
    const option = document.createElement("li");
    option.textContent = element;
    optionsList.appendChild(option);
  });
  questionSection.appendChild(optionsList);
};

export default displayQuestion;
