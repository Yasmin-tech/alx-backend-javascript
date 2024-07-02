/**
 * A function that accepts an argument (Array, of any kind of element,
 * and return a set from the array
 */

export default function setFromArray(arr) {
  const newSet = new Set(arr);
  return newSet;
}
