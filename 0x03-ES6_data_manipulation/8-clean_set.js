export default function cleanSet(set, startString) {
  const string = [];

  if (
    typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  set.forEach((elem) => {
    if (elem && elem.startsWith(startString)) {
      string.push(elem.slice(startString.length));
    }
  });
  return string.join('-');
}
