const defaultFontSize = 12;
const defaultColor = '#000';
const defaultFont = 'OpenSans';

const defaultStyle = {
  fontSize: defaultFontSize,
  color: defaultColor,
  font: defaultFont,
};

const getDefaultHeaderTitleAndInfo = (type) => {
  return {
    title: {
      text: `${type} WorkSheet`,
      style: defaultStyle,
    },
    studentInfo: {
      Name: '',
      Date: '',
      style: defaultStyle,
    },
  }
}

const generateMatchingQuestion = (questionData, type) => {
  const instruction = 'Match the word on the left side to its definition on the right side.';
  questionData.header = {
    ...getDefaultHeaderTitleAndInfo(type),
    Instructions: {
      text: instruction,
      style: defaultStyle,
    },
  };

  questionData.body = {
    questions: [
      { leftWord: '', rightWord: ''}
    ]
  };
}

const generateMultipleChoiceQuestion = (questionData, type) => {
  const instruction = 'Circle the correct answer for each question below.';
  questionData.header = {
    ...getDefaultHeaderTitleAndInfo(type),
    Instructions: {
      text: instruction,
      style: defaultStyle,
    },
  }
}

export default (type) => {
  const generatedQuestion = {
    type,
    header: {},
    body: {},
  };

  if (type === 'MULTIPLE_CHOICE') {
    generateMultipleChoiceQuestion(generatedQuestion, type);
  } else if (type === 'MATCHING') {
    generateMatchingQuestion(generatedQuestion, type);
  }

  return generatedQuestion;
};
