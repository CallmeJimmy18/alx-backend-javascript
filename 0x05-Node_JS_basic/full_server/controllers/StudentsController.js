const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((stdnts) => {
      const output = [];
      output.push('This is the list of our students');
      const keys = Object.keys(stdnts);
      keys.sort();
      for (let i = 0; i < keys.length; i += 1) {
        output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${stdnts[keys[i]].join(', ')}`);
      }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
  
  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((stdnts) => {
      if (!(field in stdnts)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${stdnts[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}
