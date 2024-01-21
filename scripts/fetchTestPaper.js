const fetchTestPaper = async function () {
  try {
    const responseData = await fetch("../questionsBank.json");
    const responseDataPromise = await responseData.json();
    const testPaper = responseDataPromise.jkssb.faa.paper1;

    const questionPaper = [];
    for (const item of Object.values(testPaper)) {
      item.forEach((element) => {
        questionPaper.push(element);
      });
    }
    return questionPaper;
  } catch (error) {
    console.log(error);
    return "Error occured";
  }
};

export default fetchTestPaper;
