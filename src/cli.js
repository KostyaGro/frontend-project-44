#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (nameQuest) => {
const name = readlineSync.question('May I have your name? ');
console.log('Hello, ',name,'!');
};

