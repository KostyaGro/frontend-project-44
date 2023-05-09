import runEngine from '../engine.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getRandomNumber() {
  return Math.round(Math.random() * 50);
}

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber();
  const trueAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default function primeGame() {
  runEngine(rules, generateRound);
}
