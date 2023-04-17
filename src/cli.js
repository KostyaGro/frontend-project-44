#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function nameQuest() {
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, %s!', name);
  return name;
}
