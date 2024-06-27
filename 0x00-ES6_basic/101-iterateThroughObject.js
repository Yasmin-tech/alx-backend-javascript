export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let i = 0;
  for (const employee of reportWithIterator) {
    if (i > 0) {
      str = `${str} | ${employee}`;
    } else {
      str = employee;
      i += 1;
    }
  }
  return str;
}
