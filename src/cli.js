#!/usr/bin/env node
import readlineSync from 'readline-sync';

function sayWelcome() {
  console.log('Welcome to the Brain Games!');
}
export default function nameQuest() {
  sayWelcome();
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
  console.log('Hello, %s!', name);
  return name;
}
