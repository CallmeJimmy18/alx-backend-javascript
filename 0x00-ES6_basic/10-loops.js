export default function appendToEachArrayValue(array, appendString) {
  const scndArray = [];
  for (const value of array) {
    scndArray.push(appendString + value);
  }

  return scndArray;
}
