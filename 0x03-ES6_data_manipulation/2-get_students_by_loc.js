/*
 * A function that filter an array based on the location property
 */

export default function getStudentsByLocation(studentsList, city) {
  if (!Array.isArray(studentsList) || typeof city !== 'string') {
    return [];
  }
  return studentsList.filter((student) => student.location === city);
}
