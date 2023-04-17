import readlineSync from 'readline-sync';
import nameQuest from './cli.js';

function num() {
  return Math.round(Math.random() * 50);
}

function ifPrime(n) {
  if (n === 1) {
    return 'no';
  } if (n === 2) {
    return 'yes';
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return 'no';
    }
  }
  return 'yes';
}

export default function primeGame() {
  const userName = nameQuest();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = num();
    const quest = readlineSync.question(`${'Question: '}${number} ${'\nYour answer: '}`);
    const rigthAnsw = ifPrime(number);
    if (quest === rigthAnsw) {
      console.log('Correct!');
    } else {
      console.log(`${quest} ${'is wrong answer ;(. Correct answer was'} ${rigthAnsw}.${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
}
