import readlineSync from 'readline-sync';
import nameQuest from './cli.js';

function num() {
  return Math.round(Math.random() * 50);
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function gameGcd() {
  const userName = nameQuest();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const num2 = num();
    const str = '';
    const quest = readlineSync.question(`${'Question'}: ${num1} ${num2} ${'\nYour answer: '}`);
    const rightAnsw = NOD(num1, num2);
    const answStr = `${str}${rightAnsw}`;
    if (quest === answStr) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${answStr}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
