// Read a CSV file synchronously

const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  // Read the file content
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    }

    if (data) {
      const records = data.trim().split('\n');
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
      resolve(true);
    }
  });
});

module.exports = countStudents;
