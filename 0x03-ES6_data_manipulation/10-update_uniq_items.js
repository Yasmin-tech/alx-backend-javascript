/**
 * A function that returns an updated map for all items with initial quantity at 1
 */

export default function updateUniqueItems(theMap) {
  if (!theMap || !(theMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of theMap) {
    if (value === 1) {
      theMap.set(key, 100);
    }
  }
  return theMap;
}
