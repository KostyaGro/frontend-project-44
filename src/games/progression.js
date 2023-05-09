import runEngine from '../engine.js';

const rules = 'What number is missing in the progression?';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getProgression = (num1, minLengthNum, stepNum) => {
  const resultProgression = [];
  for (let i = num1; i < minLengthNum; i += stepNum) {
    if (resultProgression.length !== 10) resultProgression.push(i);
  }
  return resultProgression;
};

const generateRound = () => {
  const firstNum = getRandomNumber(1, 10);
  const stepNum = getRandomNumber(1, 5);
  const minLengthNum = firstNum + (stepNum * 10);
  const progression = getProgression(firstNum, minLengthNum, stepNum);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const trueAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, trueAnswer];
};

export default function gameProgressive() {
  runEngine(rules, generateRound);
};
