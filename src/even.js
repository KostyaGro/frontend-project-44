import readlineSync from 'readline-sync';
import nameQuest from './cli.js';

function rnd() {
  return Math.round(Math.random() * 100);
}

export default function gameEven() {
  const userName = nameQuest();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numsave = rnd();
    const quest = readlineSync.question(`${'Question: '}${numsave}${'\nYour answer: '}`);
    if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !== 0 && quest === 'no')) {
      console.log('Correct!');
    } else {
      if (quest === 'yes') {
        console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      } else {
        console.log(`${quest} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      }
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
