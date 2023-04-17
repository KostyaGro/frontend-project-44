import readlineSync from 'readline-sync';
import nameQuest from './cli.js';

function num() {
  return Math.round(2 + Math.random() * (7 - 1));
}

function progression() {
  const result = [];
  const x = num();
  for (let i = 1; i <= 10; i += 1) {
    if (x !== 0) {
      result.push(x * i);
    }
  }
  return result;
}

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

function ad() {
  const result = progression();
  const number = getRandomInt();
  let numberind;
  const coll = [];
  for (let i = 0; i <= result.length - 1; i += 1) {
    if (i === number) {
      numberind = result[i];
      coll.push('..');
    } else {
      coll.push(result[i]);
    }
  }
  let str = '';
  str = `${str}${coll}`;
  const re = /,/gi;
  const newstr = str.replace(re, ' ');
  return [newstr, numberind];
}

export default function gameProgressive() {
  const userName = nameQuest();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const data = ad();
    const magicNum = data[1];
    const newstr1 = data[0];
    const quest = readlineSync.question(`${'Question: '}${newstr1} ${'\nYour answer: '}`);
    let rightansw = '';
    rightansw = `${rightansw}${magicNum}`;
    if (quest === rightansw) {
      console.log('Correct!');
    } else {
      console.log(`${quest} ${'is wrong answer ;(. Correct answer was'} ${rightansw}. ${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
}