// Read a CSV file synchronously

const fs = require('node:fs');

function countStudents(path) {
  // Check the file exists
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  // Check path is of type file
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the file content
  const records = fs.readFileSync(path, 'utf-8').trim().split('\n');

  console.log(`Number of students: ${records.length - 1}`);

  // Get the header and an array of the students INFO
  const [header, ...studentsInfo] = records;
  // Make header an array that includes all colums except the last field
  const headers = header.split(',').slice(0, -1);
  const studentGroups = {};

  studentsInfo.forEach((line) => {
    const studentRecord = line.split(',');
    const field = studentRecord.pop();

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    // Create a student object based on the header

    const student = Object.fromEntries(
      headers.map((headerName, index) => [headerName, studentRecord[index]]),
    );
    studentGroups[field].push(student);
  });

  for (const [field, students] of Object.entries(studentGroups)) {
    const studentList = students.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${students.length}. List: ${studentList}`);
  }
}

module.exports = countStudents;
