import runEngine from '../engine.js';

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

function randSign() {
  const coll = ['-', '+', '*'];
  const random = Math.floor(Math.random() * coll.length);
  return coll[random];
}

function calculate(num1, num2, sign) {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      console.log('error');
  }
  return sign;
}

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const getMathSign = randSign();
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${getMathSign} ${number2}`;
  const trueAnswer = String(calculate(number1, number2, getMathSign));
  return [question, trueAnswer];
};

export default function startGameCalc() {
  runEngine(rules, generateRound);
}
