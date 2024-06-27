export default function createIteratorObject(report) {
  const employeesAndDepartments = Object.values(report.allEmployees);

  const iteratorObject = {
    [Symbol.iterator]() {
      let departmentIndex = 0;
      let employeeIndex = 0;

      return {
        next() {
          if (departmentIndex < employeesAndDepartments.length) {
            const currentDepartment = employeesAndDepartments[departmentIndex];
            if (employeeIndex < currentDepartment.length) {
              const employee = currentDepartment[employeeIndex];
              employeeIndex += 1;
              return { value: employee, done: false };
            }
            // Move to the next department
            departmentIndex += 1;
            employeeIndex = 0;
            return this.next(); // Recurse to get the next employee
          }
          // No more departments
          return { done: true };
        },
      };
    },
  };

  return iteratorObject;
}
