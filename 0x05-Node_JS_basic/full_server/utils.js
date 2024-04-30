const fs = require('fs');

function readDatabase(fileName) {
  const students = {};
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const nHeader = lines.slice(1);
        for (let i = 0; i < nHeader.length; i += 1) {
          if (nHeader[i]) {
            const field = nHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });   
}

module.exports = readDatabase;
