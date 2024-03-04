export default function appendToEachArrayValue(array, appendString) {
  let scndArray = [];
  for (let value of array) {
    scndArray.push(appendString + value);
  }

  return scndArray;
}
