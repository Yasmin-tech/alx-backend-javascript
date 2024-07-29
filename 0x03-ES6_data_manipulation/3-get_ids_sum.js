/*
 * A function that returns the sum of all student ids using reduce
 * array method
 */

export default function getStudentIdsSum(studentsList) {
  if (!(studentsList instanceof Array)) {
    return 0;
  }
  return studentsList.reduce((acc, student) => acc + student.id, 0);
}
