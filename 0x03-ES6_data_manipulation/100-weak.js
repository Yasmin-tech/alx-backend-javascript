/*
 * This script export the function queryAPI
 * that contains the weakmap object that track the number of times queryAPI
 * is called for each endpoint
 */

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 0);
  }
  const oldValue = weakMap.get(endpoint);
  weakMap.set(endpoint, oldValue + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
