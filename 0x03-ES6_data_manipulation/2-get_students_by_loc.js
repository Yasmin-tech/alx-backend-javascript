/**
 * A function that filters a list of students
 */

export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter(({ location }) => location === city);
}
