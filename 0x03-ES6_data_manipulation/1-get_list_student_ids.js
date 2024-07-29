/*
 * A function that return a list of student ids
 *
 */

export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.map((student) => student.id);
}
