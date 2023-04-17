import readlineSync from 'readline-sync';
import nameQuest from './cli.js';

function rnd() {
  return Math.round(Math.random() * 100);
}

function randsign() {
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

export default function gamecalc() {
  const userName = nameQuest();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = rnd();
    const num2 = rnd();
    const sign = randsign();
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${sign} ${num2} ${'\nYour answer: '}`);
    const myAns = calculate(num1, num2, sign);
    const rightAnsw = `${str}${myAns}`;
    if (quest === rightAnsw) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${rightAnsw}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
