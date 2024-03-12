export default function getListStudentIds(objarr) {
  if (Array.isArray(objarr)) {
    return objarr.map((personId) => personId.id);
  }
  return [];
}
