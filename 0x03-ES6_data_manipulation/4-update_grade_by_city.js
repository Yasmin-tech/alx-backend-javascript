export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList)
    || typeof city !== 'string'
    || !Array.isArray(newGrades)) {
    return [];
  }
  return studentsList
    .filter((student) => student.location === city)
    .map((std) => {
      const student = { ...std };
      for (const obj of newGrades) {
        if (obj.studentId === student.id) {
          student.grade = obj.grade;
          return student;
        }
      }
      student.grade = 'N/A';
      return student;
    });
}
