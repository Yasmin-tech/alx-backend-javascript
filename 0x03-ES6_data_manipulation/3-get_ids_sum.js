/**
 * Afunction that returns the sum of all the student ids
 */
export default function getStudentIdsSum(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.reduce((accumulator, student) => accumulator + student.id, 0);
  }
  return 0;
}
