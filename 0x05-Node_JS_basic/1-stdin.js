// // This program should be executed through a command line
// // User should enter their name after the prompt in a new line

// const process = require('node:process');

// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// // Read the name from STDIN
// process.stdin.on('readable', () => {
//   const name = process.stdin.read();
//   if (name !== null) {
//     process.stdout.write(`Your name is: ${name}`);
//   }
// });

// // Write a message before closing

// process.stdin.on('end', () => {
//   process.stdout.write('This important software is now closing\n');
// });

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
