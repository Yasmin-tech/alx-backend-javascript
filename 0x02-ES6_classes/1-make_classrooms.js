import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  /**
   * a function that returns an array of 3 ClassRoom objects with the sizes
   * 19, 20, and 34 (in this order).
   *
   */
  const arrayOfClassRoomObjs = [];
  arrayOfClassRoomObjs.push(new ClassRoom(19));
  arrayOfClassRoomObjs.push(new ClassRoom(20));
  arrayOfClassRoomObjs.push(new ClassRoom(34));

  return arrayOfClassRoomObjs;
}
