/*
 * A function that accepts a file name and returns a peomise with reject
 */

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
