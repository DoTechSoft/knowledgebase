// let correctAnswer;
const fetchQuestion = async function (
  testPaper,
  questionCounter,
  questionElement
) {
  let option, optionRadio;
  for (let i = 1; i <= 4; i++) {
    option = `option${i}`;
    optionRadio = `${option}Radio`;
    option = document.getElementById(option);
    optionRadio = document.getElementById("optionRadio");
  }
  const { question, options, answer } = testPaper[questionCounter];
  const correctAnswer = answer;
  // console.log(question, options, answer);
  questionElement.textContent = question;
  option1.textContent = options[0];
  option2.textContent = options[1];
  option3.textContent = options[2];
  option4.textContent = options[3];
  option1Radio.checked = false;
  option2Radio.checked = false;
  option3Radio.checked = false;
  option4Radio.checked = false;
  option1Radio.setAttribute("value", options[0]);
  option2Radio.setAttribute("value", options[1]);
  option3Radio.setAttribute("value", options[2]);
  option4Radio.setAttribute("value", options[3]);
  option1Radio.setAttribute("title", options[0]);
  option2Radio.setAttribute("title", options[1]);
  option3Radio.setAttribute("title", options[2]);
  option4Radio.setAttribute("title", options[3]);
};

export default fetchQuestion;
