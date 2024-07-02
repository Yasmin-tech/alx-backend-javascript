/**
 * A function that filters a list of students
 */

export default function getStudentsByLocation(studentsList, city) {
  if (studentsList instanceof Array) {
    return studentsList.filter(({ location }) => location === city);
  }
  return [];
}
