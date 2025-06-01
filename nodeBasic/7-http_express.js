import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  // res.send("");

  readFile(process.argv[2], { encoding: 'utf-8' }).then((cont) => {
    const content = cont.trim().split('\n').slice(1);
    // res.send(``);

    const csList = [];
    const sweList = [];
    for (const i of content) {
      const newList = i.split(',');
      if (newList[newList.length - 1] === 'CS') {
        csList.push(newList[0]);
      } else if (newList[newList.length - 1] === 'SWE') {
        sweList.push(newList[0]);
      }
    }
    res.send(`This is the list of our students\nNumber of students: ${content.length}\nNumber of students in CS: ${csList.length}. List: ${csList.join(', ')}\nNumber of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`);
    // res.send(``)
  }).catch((error) => {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw error;
  });
});

app.listen(port, () => {
  console.log(`Started server at ${port}`);
});
