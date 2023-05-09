import runEngine from '../engine.js';

const rules = 'Find the greatest common divisor of given numbers.';

function getRandomNumber() {
  return Math.round(Math.random() * 50);
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const trueAnswer = String(NOD(number1, number2));
  return [question, trueAnswer];
};

export default function gameGcd() {
  console.log('gameGcd');
  runEngine(rules, generateRound);
}
