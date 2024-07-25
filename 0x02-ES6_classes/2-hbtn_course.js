/**
 * Represents a Holberton Course.
 */

export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course.
   */

  get name() {
    return this._name;
  }

  /**
   * Gets the length of this course (in months).
   */

  get length() {
    return this._length;
  }

  /**
   * Gets the names of students in this course.
   */

  get students() {
    return this._students;
  }

  /**
   * Sets the name of this course.
   */

  set name(n) {
    if (typeof n !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = n;
  }

  /**
   * Sets the length of this course (in months).
   */

  set length(l) {
    if (typeof l !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = l;
  }

  /**
   * Sets the names of students in this course.
   */

  set students(studentsArray) {
    if (!(studentsArray instanceof Array)) {
      throw new TypeError('Students must be an Array');
    }

    if (!studentsArray.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an Array of Strings');
    }
    this._students = studentsArray;
  }
}
