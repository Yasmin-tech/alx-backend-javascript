/**
 *
 * A function that returns an array of objects
 */

export default function getListStudents() {
  const objs = [{}, {}, {}];
  const listsStudent = [];

  objs.forEach((_, index) => {
    const obj = {};
    if (index === 0) {
      obj.id = 1;
      obj.firstName = 'Guillaume';
      obj.location = 'San Francisco';
    } else if (index === 1) {
      obj.id = 2;
      obj.firstName = 'James';
      obj.location = 'Columbia';
    } else {
      obj.id = 5;
      obj.firstName = 'Serena';
      obj.location = 'San Francisco';
    }
    listsStudent.push(obj);
  });
  return listsStudent;
}
