interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass
}

interface IStudentClass {
  firstName: string;
  lastName: string;
  workOnHomework() :string;
  displayName(): string;
}

class StudentClass implements IStudentClass {

  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string{
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
    
}

// Test examples

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  yearsOfExperience: 0
};
console.log(director1);

// Test printTeacher
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
