/**
 * This moudel contains a function that checks if a set os strings start
 * with the given string
 * @return {String} a new string contains the rest of the string from the set
 *  that satisfy the condition
 */

export default function cleanSet(theSet, text) {
  let newString = '';
  let i = 0;

  if (!text || !theSet || !(theSet instanceof Set) || typeof text !== 'string') {
    return newString;
  }
  for (const str of theSet) {
    if (typeof str === 'string' && str.startsWith(text)) {
      if (i !== 0) {
        newString += '-';
      }
      newString += str.slice(text.length);
      i += 1;
    }
  }
  return newString;
}
