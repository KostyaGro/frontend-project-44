import runEngine from '../engine.js';

function getRandomNumber() {
  return Math.round(Math.random() * 100);
}
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber();
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default function startBrainEven() {
  runEngine(rules, generateRound);
}
