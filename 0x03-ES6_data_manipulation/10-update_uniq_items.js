export default function updateUniqueItems(map) {
  const list = map;

  if (list instanceof Map) {
    list.forEach((value, key) => {
      if (value === 1) {
        list.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
  return list;
}
