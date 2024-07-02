/**
 *
 * A function that returns an array of students for a specific city with their new grade
 */

export default function updateStudentGradeByCity(studentsList, city, grades) {
  if (studentsList instanceof Array) {
    return studentsList
      .filter(({ location }) => location === city)
      .map((student) => {
        const newObj = JSON.parse(JSON.stringify(student));
        for (const std of grades) {
          // console.log(std);
          if (std.studentId === newObj.id) {
            newObj.grade = std.grade;
            // console.log(student);
            return newObj;
          }
        }
        newObj.grade = 'N/A';
        return newObj;
      });
  }
  return [];
}
