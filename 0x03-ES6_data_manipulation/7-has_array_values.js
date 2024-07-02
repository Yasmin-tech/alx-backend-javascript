/**
 * This modules contains hasValuesFromArray function that
 * returns a boolean if all the elements in the array exist within the set
 */

export default function hasValuesFromArray(theSet, theArray) {
  return theArray.every((element) => theSet.has(element));
}
