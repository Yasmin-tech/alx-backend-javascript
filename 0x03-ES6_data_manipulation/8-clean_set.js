/**
 * This script contains a function that checks if a set of strings start
 * with the given string
 * @return {String} a new string contains the rest of the string from the set
 *  that satisfy the condition
 */

export default function cleanSet(theSet, startString) {
  if (!theSet || !(theSet instanceof Set)
    || !startString || typeof startString !== 'string') {
    return '';
  }
  const listOfSetStrings = [];
  for (const value of theSet) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      listOfSetStrings.push(value.slice(startString.length));
    }
  }
  return listOfSetStrings.join('-');
}
