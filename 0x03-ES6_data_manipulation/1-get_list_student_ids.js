/**
 * This function is taking one argument which is an array of objects
 * - and this array is the same format as getListStudents from the task 0-get_list_students.js.
 *
 *   If the argument is not an array, the function is returning an empty array
 */

export default function getListStudentIds(studentsList) {
  if (studentsList instanceof Array) {
    return studentsList.map((student) => student.id);
  }
  return [];
}
