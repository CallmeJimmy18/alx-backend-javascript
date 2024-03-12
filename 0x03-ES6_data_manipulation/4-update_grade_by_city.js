export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentlist = students.filter((student) => student.location === city);
  for (const student of studentlist) {
    student.grade = 'N/A';
  }
  const nwStudents = studentlist.map((student) => {
    const sngle = student;
    for (const grade of newGrades) {
      if (sngle.id === grade.studentId) {
        sngle.grade = grade.grade;
      }
    }
    return sngle;
  });
  return nwStudents;
}
