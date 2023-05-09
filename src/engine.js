#!/usr/bin/env node
import readlineSync from 'readline-sync';
import nameQuest from './cli.js';

const maxCount = 3;

export default function runEngine(rules, generateRound) {
  const userName = nameQuest();
  console.log(rules);

  for (let i = 0; i < maxCount; i += 1) {
    const [question, trueAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
