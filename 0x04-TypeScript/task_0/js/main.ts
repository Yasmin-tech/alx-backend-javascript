interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stdOne: Student = {
  firstName: 'Yasmin',
  lastName: 'Salam',
  age: 25,
  location: 'Addis Ababa'
}

const stdTwo: Student = {
  firstName: 'Dalia',
  lastName: 'Salam',
  age: 23,
  location: 'Addis Ababa'
}

const studentsList: Student[] = [stdOne, stdTwo];

studentsList.forEach((student: Student) => {
  const tableBody = document.getElementById('studentTableBody') as HTMLTableSectionElement;
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
    `;
  tableBody.appendChild(row);
})
