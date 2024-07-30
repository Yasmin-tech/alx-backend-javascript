/*
 * a function that returns a new ArrayBuffer with an Int8 value at a specific position.
 * It accepts three arguments: length (Number) for the buffer,
 * position (Number) in the array,
 * and value (Number)
 */

export default function createInt8TypedArray(length, position, value) {
  if (length <= position) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer); // starting from offset 0 of the buffer
  view.setInt8(position, value);
  return view;
}
