import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((value) => {
        response.status(200).send(`This is the list of our students\nNumber of students in CS: ${value.CS.length}. List: ${value.CS.join(', ')}\nNumber of students in SWE: ${value.SWE.length}. List: ${value.SWE.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((value) => {
        if (major === 'CS') {
          response.status(200).send(`List: ${value.CS.join(', ')}`);
        } else if (major === 'SWE') {
          response.status(200).send(`List: ${value.SWE.join(', ')}`);
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
