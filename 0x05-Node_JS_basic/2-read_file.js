// Read a CSV file synchronously

const fs = require('node:fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  try {
    const records = fs.readFileSync(path, 'utf-8');
    const arr = records.trim().split('\n');

    console.log(`Number of students: ${arr.length - 1}`);

    const csStudents = [];
    for (const line of arr) {
      if (line.includes('CS')) {
        csStudents.push(line.split(',')[0]);
      }
    }
    const sweStudents = [];
    for (const line of arr) {
      if (line.includes('SWE')) {
        sweStudents.push(line.split(',')[0]);
      }
    }

    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
