// This program should be executed through a command line
// User should enter their name after the prompt in a new line

const process = require('node:process');

console.log('Welcome to Holberton School, what is your name?');

// Read the name from STDIN
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Write a message before closing

process.on('beforeExit', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
